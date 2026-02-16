import { Page, Locator, expect } from '@playwright/test';

/**
 * Wait for a Radix UI portal to render
 * @param page - Playwright page instance
 * @param selector - CSS selector for the portal content
 * @param timeout - Maximum wait time in milliseconds
 */
export async function waitForPortal(
  page: Page,
  selector: string,
  timeout = 3000
): Promise<void> {
  await page.waitForSelector(selector, { state: 'visible', timeout });
}

/**
 * Test that clicking outside a portal closes it
 * @param page - Playwright page instance
 * @param portalSelector - CSS selector for the portal content
 */
export async function testClickOutside(
  page: Page,
  portalSelector: string
): Promise<void> {
  // Click on body (outside the portal)
  await page.click('body', { position: { x: 5, y: 5 } });

  // Verify portal is no longer visible
  await expect(page.locator(portalSelector)).not.toBeVisible({ timeout: 1000 });
}

/**
 * Verify focus trap is working correctly
 * Tests that Tab cycles through focusable elements and wraps around
 * @param page - Playwright page instance
 * @param containerSelector - CSS selector for the container with focus trap
 */
export async function verifyFocusTrap(
  page: Page,
  containerSelector: string
): Promise<void> {
  const container = page.locator(containerSelector);

  // Get all focusable elements within the container
  const focusable = await container.locator(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  ).all();

  expect(focusable.length).toBeGreaterThan(0);

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  // Test forward wrap: Tab from last element should focus first
  await last.focus();
  await page.keyboard.press('Tab');
  await expect(first).toBeFocused();

  // Test backward wrap: Shift+Tab from first element should focus last
  await first.focus();
  await page.keyboard.press('Shift+Tab');
  await expect(last).toBeFocused();
}

/**
 * Test keyboard navigation through a list of elements
 * @param page - Playwright page instance
 * @param expectedOrder - Array of locators in expected tab order
 */
export async function testTabNavigation(
  page: Page,
  expectedOrder: Locator[]
): Promise<void> {
  // Focus first element
  await expectedOrder[0].focus();
  await expect(expectedOrder[0]).toBeFocused();

  // Tab through each element
  for (let i = 1; i < expectedOrder.length; i++) {
    await page.keyboard.press('Tab');
    await expect(expectedOrder[i]).toBeFocused();
  }
}

/**
 * Verify an element has specific ARIA attributes
 * @param locator - Playwright locator
 * @param attributes - Object with expected ARIA attribute values
 */
export async function verifyAriaAttributes(
  locator: Locator,
  attributes: Record<string, string>
): Promise<void> {
  for (const [attr, value] of Object.entries(attributes)) {
    await expect(locator).toHaveAttribute(attr, value);
  }
}

/**
 * Wait for animation to complete
 * @param page - Playwright page instance
 * @param duration - Animation duration in milliseconds
 */
export async function waitForAnimation(
  page: Page,
  duration = 300
): Promise<void> {
  await page.waitForTimeout(duration);
}
