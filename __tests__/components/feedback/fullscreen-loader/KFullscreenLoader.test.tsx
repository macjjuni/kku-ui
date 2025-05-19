import { act } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { KInitializer } from '@/components';
import { useFullLoader } from '@/common/hooks';

const openText = 'Open';
const closeText = 'Close';

const TestFullscreenLoader = () => {

  const { open, close } = useFullLoader();

  const onOpen = () => {
    open();
  };
  const onClose = () => {
    close();
  };

  return (
    <>
      <button type="button" onClick={onOpen}>{openText}</button>
      <button type="button" onClick={onClose}>{closeText}</button>
      <KInitializer/>
    </>
  );
};

describe('KFullscreenLoader', () => {

  beforeEach(() => {
    vi.useRealTimers();
  });

  it('applies open props', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<TestFullscreenLoader/>);
    const openButton = screen.getByText(openText);

    // Assert
    expect(screen.queryByRole('presentation'))
      .not
      .toBeInTheDocument();

    // Act
    await act(async () => {
      await user.click(openButton);
      await new Promise((r) => {
        setTimeout(r, 300);
      });
    });
    const root = screen.getByRole('presentation', { hidden: true });

    // Assert
    expect(root)
      .toBeInTheDocument();
  });

});
