import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Panel from '@/core/panel/Panel';

describe('Panel', () => {
  it('renders as div by default', () => {
    const content = 'Default content';
    render(<Panel>{content}</Panel>);
    const panel = screen.getByText(content);
    expect(panel.tagName)
      .toBe('DIV');
  });

  it('renders with custom element from as prop', () => {
    const content = 'Section content';
    const as = 'section';
    render(<Panel as={as}>{content}</Panel>);
    const panel = screen.getByText(content);
    expect(panel.tagName)
      .toBe('SECTION');
  });

  it('applies aspect-ratio style when valid ratio is given', () => {
    const content = 'Valid ratio';
    const ratio = '4/3';
    render(<Panel ratio={ratio}>{content}</Panel>);
    const panel = screen.getByText(content);
    expect(panel)
      .toHaveStyle({ aspectRatio: '4 / 3' });
  });

  it('does not apply aspect-ratio when invalid ratio is given', () => {
    const content = 'Invalid ratio';
    const invalidRatio = 'invalid';
    render(<Panel ratio={invalidRatio}>{content}</Panel>);
    const panel = screen.getByText(content);
    expect(panel)
      .not
      .toHaveStyle({ aspectRatio: expect.anything() });
  });

  it('merges custom styles with default styles', () => {
    const content = 'Styled content';
    const customStyle = { color: '#000' };
    render(<Panel style={customStyle}>{content}</Panel>);
    const panel = screen.getByText(content);
    expect(panel)
      .toHaveStyle(customStyle);
  });

  it('applies both ratio and custom styles together', () => {
    const content = 'Combined styles';
    const ratio = '16/9';
    const customStyle = { color: '#000' };
    render(<Panel ratio={ratio} style={customStyle}>{content}</Panel>);
    const panel = screen.getByText(content);
    expect(panel)
      .toHaveStyle({ aspectRatio: '16 / 9', ...customStyle });
  });
});
