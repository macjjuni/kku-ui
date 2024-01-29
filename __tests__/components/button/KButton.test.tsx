import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import KButton from '@/components/button/KButton.tsx';


describe('KButton', () => {

  const labelText = 'k-button test';

  test('<KButton /> render test', () => {

    render(<KButton label={labelText} />);
    const root = screen.getByText(labelText);

    expect(root).toBeInTheDocument();
  });

  test('KButton click test', async () => {

    const user = userEvent.setup();
    const mockOnClick = jest.fn();
    render(<KButton label={labelText} onClick={mockOnClick} />);
    const root = screen.getByText(labelText);

    expect(mockOnClick).toBeCalledTimes(0);

    await user.click(root);

    expect(mockOnClick).toBeCalledTimes(1);
  });
});
