import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { KSwitch } from "./KSwitch"

describe("KSwitch", () => {
  it("클릭 시 온/오프 상태가 전환된다", async () => {
    const user = userEvent.setup()
    render(<KSwitch data-testid="switch" />)

    const switchElement = screen.getByTestId("switch")

    expect(switchElement).toHaveAttribute("aria-checked", "false")

    await user.click(switchElement)
    expect(switchElement).toHaveAttribute("aria-checked", "true")
  })

  it("disabled 상태일 때 클릭이 작동하지 않는다", async () => {
    const user = userEvent.setup()
    render(<KSwitch disabled data-testid="switch" />)

    const switchElement = screen.getByTestId("switch")
    expect(switchElement).toBeDisabled()

    await user.click(switchElement)
    expect(switchElement).toHaveAttribute("aria-checked", "false")
  })
})