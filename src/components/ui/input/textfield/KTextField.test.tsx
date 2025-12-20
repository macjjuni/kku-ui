import { act, createRef } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { KTextField, KTextFieldRefs } from './KTextField';

describe('KTextField 컴포넌트 테스트', () => {

  // region [Basic Tests]
  it('라벨과 헬퍼 텍스트가 정상적으로 렌더링되어야 한다', () => {
    render(<KTextField label="아이디" helperText="영문/숫자 조합" />);

    expect(screen.getByText('아이디')).toBeInTheDocument();
    expect(screen.getByText('영문/숫자 조합')).toBeInTheDocument();
  });

  it('입력 시 onChangeTextField가 호출되어야 한다', async () => {
    const user = userEvent.setup(); // 인스턴스 설정
    const handleChange = vi.fn();
    render(<KTextField onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'test value'); // act 없이 await로 충분

    expect(handleChange).toHaveBeenCalled();
    expect(input).toHaveValue('test value');
  });
  // endregion

  // region [Validation Tests]
  it('동기 규칙(rules) 검증이 실패하면 에러 메시지를 표시해야 한다', async () => {
    const textFieldRef = createRef<KTextFieldRefs>();
    const rules = [(v: string) => v.length >= 5 || '5자 이상 입력하세요.'];

    render(<KTextField ref={textFieldRef} rules={rules} defaultValue="abc" />);

    // 상태 업데이트를 일으키는 명령형 메서드는 act로 감쌈
    await act(async () => {
      await textFieldRef.current?.validate();
    });

    expect(screen.getByText('5자 이상 입력하세요.')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveClass('border-destructive');
  });

  it('비동기 규칙(rules) 검증을 지원해야 한다', async () => {
    const textFieldRef = createRef<KTextFieldRefs>();
    const asyncRule = async (v: string) => {
      await new Promise((res) => { setTimeout(res, 10); });
      return v === 'admin' ? '이미 사용 중인 아이디입니다.' : true;
    };

    render(<KTextField ref={textFieldRef} rules={[asyncRule]} defaultValue="admin" />);

    await act(async () => {
      await textFieldRef.current?.validate();
    });

    expect(screen.getByText('이미 사용 중인 아이디입니다.')).toBeInTheDocument();
  });

  it('에러 상태에서 타이핑을 시작하면 에러 메시지가 사라져야 한다', async () => {
    const user = userEvent.setup();
    const textFieldRef = createRef<KTextFieldRefs>();
    render(<KTextField ref={textFieldRef} rules={[() => '에러']} />);

    await act(async () => {
      await textFieldRef.current?.validate();
    });

    expect(screen.getByText('에러')).toBeInTheDocument();

    const input = screen.getByRole('textbox');
    await user.type(input, 'a'); // 유저 타이핑

    // 상태 변화가 반영될 때까지 대기
    await waitFor(() => {
      expect(screen.queryByText('에러')).not.toBeInTheDocument();
    });
  });
  // endregion

  // region [Imperative Handle Tests]
  it('reset() 호출 시 에러 메시지가 초기화되어야 한다', async () => {
    const textFieldRef = createRef<KTextFieldRefs>();
    render(<KTextField ref={textFieldRef} rules={[() => '에러']} />);

    await act(async () => {
      await textFieldRef.current?.validate();
    });

    expect(screen.getByText('에러')).toBeInTheDocument();

    await act(async () => {
      textFieldRef.current?.reset();
    });

    expect(screen.queryByText('에러')).not.toBeInTheDocument();
  });

  it('value getter가 현재 입력값을 정확히 반환해야 한다', async () => {
    const user = userEvent.setup();
    const textFieldRef = createRef<KTextFieldRefs>();
    render(<KTextField ref={textFieldRef} defaultValue="initial" />);

    expect(textFieldRef.current?.value).toBe('initial');

    await user.type(screen.getByRole('textbox'), ' updated');

    expect(textFieldRef.current?.value).toBe('initial updated');
  });
  // endregion
});