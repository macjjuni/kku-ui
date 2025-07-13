import { act } from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { KAccordion } from '@/components';
import { SIZES } from '@/common/base/base.interface';


describe('KAccordion', () => {

  const testId = 'k-accordion-id';
  const summaryText = 'Accordion Summary';
  const childrenText = 'Accordion Content';

  it('renders with summary and children', () => {
    // Arrange
    render(<KAccordion summary={summaryText}>{childrenText}</KAccordion>);

    // Assert
    expect(screen.getByText(summaryText))
      .toBeInTheDocument();
    expect(screen.getByText(childrenText))
      .toBeInTheDocument();
  });

  it('applies id, className, and style props', () => {
    // Arrange
    const testClass = 'k-accordion-class';
    const testStyle = { backgroundColor: '#eee' };

    render(
      <KAccordion id={testId} className={testClass} style={testStyle} summary={summaryText} data-testid={testId}>
        {childrenText}
      </KAccordion>,
    );
    const root = screen.getByTestId(testId);

    // Assert
    expect(root)
      .toHaveAttribute('id', testId);
    expect(root)
      .toHaveClass(testClass);
    expect(root)
      .toHaveStyle(testStyle);
  });

  it.each(SIZES)('applies size prop "%s"', (size) => {
    // Arrange
    render(
      <KAccordion summary={summaryText} size={size} data-testid={testId}>
        {childrenText}
      </KAccordion>,
    );
    const root = screen.getByTestId(testId);

    // Assert
    expect(root).toHaveClass(`k-accordion--${size}`);
  });

  it('renders open by default if open prop is true', () => {
    // Arrange
    render(<KAccordion summary={summaryText} data-testid={testId} defaultOpen>{childrenText}</KAccordion>);
    const root = screen.getByTestId(testId);

    // Assert
    expect(root).toHaveAttribute('data-open', 'true');
  });

  it('toggles content on summary click', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<KAccordion summary={summaryText} data-testid={testId}>{childrenText}</KAccordion>);
    const summary = screen.getByRole('button');
    const root = screen.getByTestId(testId);

    // Assert before click
    expect(root)
      .toHaveAttribute('data-open', 'false');

    // Act
    await act(async () => {
      await user.click(summary);
    });

    // Assert after click
    expect(root).toHaveAttribute('data-open', 'true')

    // Act again
    await act(async () => {
      await user.click(summary);
    });

    // Assert close again
    expect(root).toHaveAttribute('data-open', 'false')
  });

  it('toggles on Enter and Space key', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<KAccordion summary={summaryText} data-testid={testId}>{childrenText}</KAccordion>);
    const root = screen.getByTestId(testId)

    // Act
    await act(async () => {
      await user.tab();
      await user.keyboard('{Enter}');
    });

    // Assert
    expect(root).toHaveAttribute('data-open', 'true')

    // Act
    await act(async () => {
      await user.keyboard(' ');
    });

    // Assert
    expect(root).toHaveAttribute('data-open', 'false')
  });
});
