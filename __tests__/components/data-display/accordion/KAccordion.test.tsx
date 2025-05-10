import { act } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { KAccordion, KAccordionSizes, KAccordionSizeType } from '@/components';


const KAccordionSizeList = Object.keys(KAccordionSizes) as KAccordionSizeType[];

describe('KAccordion', () => {

  const summaryText = 'Accordion Summary';
  const childrenText = 'Accordion Content';

  it('renders with summary and children', () => {
    // Arrange
    render(<KAccordion summary={summaryText}>{childrenText}</KAccordion>);

    // Assert
    expect(screen.getByText(summaryText)).toBeInTheDocument();
    expect(screen.getByText(childrenText)).toBeInTheDocument();
  });

  it('applies id, className, and style props', () => {
    // Arrange
    const testId = 'k-accordion-id';
    const testClass = 'k-accordion-class';
    const testStyle = { backgroundColor: '#eee' };

    render(
      <KAccordion id={testId} className={testClass} style={testStyle} summary={summaryText}>
        {childrenText}
      </KAccordion>,
    );
    const root = screen.getByTestId('k-accordion');

    // Assert
    expect(root).toHaveAttribute('id', testId);
    expect(root).toHaveClass(testClass);
    expect(root).toHaveStyle(testStyle);
  });

  it.each(KAccordionSizeList)('applies size prop "%s"', (size) => {
    // Arrange
    render(
      <KAccordion summary={summaryText} size={size}>
        {childrenText}
      </KAccordion>,
    );
    const root = screen.getByTestId('k-accordion');

    // Assert
    expect(root).toHaveClass(`k-accordion--${size}`);
  });

  it('renders open by default if open prop is true', () => {
    // Arrange
    render(<KAccordion summary={summaryText} open>{childrenText}</KAccordion>);
    const root = screen.getByTestId('k-accordion');

    // Assert
    expect(root).toHaveClass('k-accordion--open');
  });

  it('toggles content on summary click', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<KAccordion summary={summaryText}>{childrenText}</KAccordion>);
    const summary = screen.getByTestId('k-accordion__summary');
    const root = screen.getByTestId('k-accordion');

    // Assert before click
    expect(root).toHaveClass('k-accordion--close');

    // Act
    await act(async () => {
      await user.click(summary);
    });

    // Assert after click
    expect(root).toHaveClass('k-accordion--open');

    // Act again
    await act(async () => {
      await user.click(summary);
    });

    // Assert close again
    expect(root).toHaveClass('k-accordion--close');
  });

  it('toggles on Enter and Space key', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<KAccordion summary={summaryText}>{childrenText}</KAccordion>);

    // Act
    await act(async () => {
      await user.tab();
      await user.keyboard('{Enter}');
    })

    // Assert
    expect(screen.getByTestId('k-accordion')).toHaveClass('k-accordion--open');

    // Act
    await act(async () => {
      await user.keyboard(' ');
    });

    // Assert
    expect(screen.getByTestId('k-accordion')).toHaveClass('k-accordion--close');
  });
});
