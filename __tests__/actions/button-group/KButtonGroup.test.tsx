import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { KButton, KButtonGroup } from '@/components';

describe('KSwitch', () => {

  it('버튼들이 그룹으로 렌더링되어야 한다', () => {
    render(
      <KButtonGroup>
        <KButton>Click me</KButton>
        <KButton>Next</KButton>
      </KButtonGroup>,
    );

    // name 옵션은 대소문자를 구분하거나 정규식을 쓰는 것이 안전합니다.
    expect(screen.getByRole('button', { name: /click me/i }))
      .toBeInTheDocument();
  });
});