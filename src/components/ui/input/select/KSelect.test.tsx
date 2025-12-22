import { act, createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { KSelect, KSelectRefs } from '@/components';


beforeAll(() => {
  if (!global.Element.prototype.hasPointerCapture) {
    global.Element.prototype.hasPointerCapture = vi.fn(() => false);
  }
  global.Element.prototype.scrollIntoView = vi.fn();
});

describe('KSelect 컴포넌트 테스트', () => {
  const mockOptions = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
  ];

  it('라벨과 필수 표시(*)가 정상적으로 렌더링되어야 한다', () => {
    render(<KSelect label="프레임워크" required options={mockOptions}/>);
    expect(screen.getByText('프레임워크'))
      .toBeInTheDocument();
    expect(screen.getByText('*'))
      .toHaveClass('text-danger');
  });

  it('항목 선택 시 onChange가 호출되어야 한다', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<KSelect options={mockOptions} onChange={handleChange}/>);

    // 1. 트리거 클릭
    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    // 2. 포털에 뜬 옵션 대기 및 클릭
    const option = await screen.findByText('React');
    await user.click(option);

    expect(handleChange)
      .toHaveBeenCalledWith('react');
  });

  it('width prop에 따라 부모 컨테이너 클래스가 변경되어야 한다', () => {
    const { container } = render(<KSelect options={mockOptions} width="xs"/>);
    // container.firstChild는 KSelect의 가장 바깥 div
    expect(container.firstChild)
      .toHaveClass('w-full');
  });

  describe('Validation (검증 로직)', () => {
    it('rules 검증 실패 시 text-danger 컬러로 에러 메시지를 표시해야 한다', async () => {
      const selectRef = createRef<KSelectRefs>();
      const rules = [(v: string) => !!v || '필수 선택입니다.'];

      render(<KSelect ref={selectRef} options={mockOptions} value="" rules={rules}/>);

      await act(async () => {
        const isValid = await selectRef.current?.validate();
        expect(isValid)
          .toBe(false);
      });

      const errorMsg = screen.getByText('필수 선택입니다.');
      expect(errorMsg).toBeInTheDocument();
      expect(errorMsg).toHaveClass('text-danger');
      expect(screen.getByRole('combobox')).toHaveClass('border-danger');
    });

    it('비동기 rules 검증이 정상 작동해야 한다', async () => {
      const selectRef = createRef<KSelectRefs>();

      const asyncRule = async (v: string) => {
        await new Promise((res) => {
          setTimeout(res, 10);
        });
        return v === 'vue' ? 'Vue는 선택 불가' : true;
      };

      render(<KSelect ref={selectRef} options={mockOptions} value="vue" rules={[asyncRule]} />);

      let isValid;
      await act(async () => {
        isValid = await selectRef.current?.validate();
      });

      expect(isValid).toBe(false);
      expect(screen.getByText('Vue는 선택 불가')).toBeInTheDocument();
      expect(screen.getByText('Vue는 선택 불가')).toHaveClass('text-danger');
    });

    it('reset() 호출 시 에러 메시지가 사라져야 한다', async () => {
      const selectRef = createRef<KSelectRefs>();
      render(<KSelect ref={selectRef} options={mockOptions} rules={[() => '에러']}/>);

      await act(async () => {
        await selectRef.current?.validate();
      });
      expect(screen.getByText('에러'))
        .toBeInTheDocument();

      act(() => {
        selectRef.current?.reset();
      });

      expect(screen.queryByText('에러'))
        .not
        .toBeInTheDocument();
    });
  });

  it('value getter를 통해 현재 값을 가져올 수 있어야 한다', () => {
    const selectRef = createRef<KSelectRefs>();
    render(<KSelect ref={selectRef} options={mockOptions} value="react"/>);
    expect(selectRef.current?.value)
      .toBe('react');
  });
});