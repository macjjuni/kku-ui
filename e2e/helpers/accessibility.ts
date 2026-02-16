import { Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Run axe accessibility tests on the current page
 * @param page - Playwright page instance
 * @param options - Configuration options
 * @returns Axe results
 */
export async function checkA11y(
  page: Page,
  options?: {
    detailedReport?: boolean;
    tags?: string[];
    exclude?: string[];
  }
) {
  const {
    tags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
    exclude = [],
  } = options || {};

  let axeBuilder = new AxeBuilder({ page }).withTags(tags);

  // Exclude specific selectors if provided
  if (exclude.length > 0) {
    exclude.forEach((selector) => {
      axeBuilder = axeBuilder.exclude(selector);
    });
  }

  return await axeBuilder.analyze();
}

/**
 * Verify keyboard-only navigation works for a set of elements
 * @param page - Playwright page instance
 * @param startElement - Selector or locator to start from
 * @param expectedStops - Array of selectors for expected focus stops
 */
export async function verifyKeyboardNav(
  page: Page,
  startElement: string,
  expectedStops: string[]
): Promise<void> {
  // Focus the start element
  await page.locator(startElement).focus();

  // Tab through expected stops
  for (const selector of expectedStops) {
    await page.keyboard.press('Tab');
    const focused = page.locator(selector);
    await focused.waitFor({ state: 'visible' });
  }
}
