import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import KButton from '.'

const labelText = 'KKU-UI Button Test'
let count = 0

describe('<KButton /> Test', () => {
  test('<KButton /> render test', () => {
    render(<KButton label={labelText} />)
    const kbuttonRef = screen.getByText(labelText)
    expect(kbuttonRef).toBeInTheDocument()
  })

  test('<KButton /> click test', async () => {
    const user = userEvent.setup()

    const onTestClickEvent = () => {
      count += 1
    }
    render(<KButton label={labelText} onClick={onTestClickEvent} />)
    const kbuttonRef = screen.getByText(labelText)
    await user.click(kbuttonRef)
    expect(count).toBe(1)
  })
})
