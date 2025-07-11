import { act } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { KDropdown, KDropdownProps } from '@/components';

const triggerText = 'Test Trigger';
const contentText = 'Test Content';

const Template = (args: KDropdownProps) => {
  return (
    <KDropdown {...args}>
      <KDropdown.Trigger>
        {triggerText}
      </KDropdown.Trigger>
      <KDropdown.Content>
        {contentText}
      </KDropdown.Content>
    </KDropdown>
  );
};


describe('KDropdown', () => {

  beforeEach(() => {
    vi.useRealTimers();
  });

  it('hover 시 content 표시', async () => {
    const user = userEvent.setup();
    render(<Template trigger="hover"/>);

    const trigger = screen.getByText(triggerText);

    await act(async () => {
      await user.hover(trigger);
    });

    const content = await screen.findByText(contentText);

    expect(content)
      .toBeInTheDocument();
  });

  it('click 시 content 표시', async () => {
    const user = userEvent.setup();
    render(<Template trigger="click"/>);

    const trigger = screen.getByText(triggerText);

    await act(async () => {
      await user.click(trigger);
    });

    const content = await screen.findByText(contentText);

    expect(content)
      .toBeInTheDocument();
  });
});
