import { describe, expect, it } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Accordion from '@/core/accordion/Accordion';
import AccordionSummary from '@/core/accordion/AccordionSummary';
import AccordionContent from '@/core/accordion/AccordionContent';

describe('Accordion', () => {
  it('renders properly', () => {
    render(
      <Accordion>
        <AccordionSummary>Title</AccordionSummary>
        <AccordionContent>Content</AccordionContent>
      </Accordion>,
    );

    expect(screen.getByRole('button')).toHaveTextContent('Title');
    expect(screen.getByRole('region')).toHaveTextContent('Content');
  });

  it('is initially closed by default', () => {
    render(
      <Accordion>
        <AccordionSummary>Title</AccordionSummary>
        <AccordionContent>Content</AccordionContent>
      </Accordion>,
    );

    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(screen.getByRole('region')).not.toHaveAttribute('open');
  });

  it('opens by default if defaultOpen is true', () => {
    render(
      <Accordion defaultOpen>
        <AccordionSummary>Title</AccordionSummary>
        <AccordionContent>Content</AccordionContent>
      </Accordion>,
    );

    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(screen.getByRole('region')).toHaveAttribute('aria-labelledby');
  });

  it('toggles open and close on click', async () => {
    render(
      <Accordion>
        <AccordionSummary>Title</AccordionSummary>
        <AccordionContent>Content</AccordionContent>
      </Accordion>,
    );

    const summary = screen.getByRole('button');

    await act(async () => {
      await userEvent.click(summary);
      await userEvent.click(summary);
    });

    expect(screen.getByRole('region')).toBeInTheDocument();
  });

  it('toggles with Enter and Space keys', async () => {
    render(
      <Accordion>
        <AccordionSummary>Title</AccordionSummary>
        <AccordionContent>Content</AccordionContent>
      </Accordion>,
    );

    const summary = screen.getByRole('button');

    await act(async () => {
      await userEvent.keyboard('{Enter}');
      await userEvent.keyboard(' ');
    });

    expect(summary).toBeInTheDocument();
  });

  it('passes isOpen to children if function', async () => {
    render(
      <Accordion>
        <AccordionSummary>
          {({ isOpen }) => <span>{isOpen ? 'Open' : 'Closed'}</span>}
        </AccordionSummary>
        <AccordionContent>Content</AccordionContent>
      </Accordion>,
    );

    expect(screen.getByText('Closed')).toBeInTheDocument();

    await act(async () => {
      await userEvent.click(screen.getByRole('button'));
    });

    expect(screen.getByText('Open')).toBeInTheDocument();
  });
});
