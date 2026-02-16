import { Page } from '@playwright/test';

/**
 * Navigate to a Storybook story by its ID
 * @param page - Playwright page instance
 * @param storyId - Story ID (e.g., 'feedback-dialog--default')
 */
export async function gotoStory(page: Page, storyId: string) {
  await page.goto(`/iframe.html?id=${storyId}&viewMode=story`);
  await page.waitForSelector('#storybook-root', { state: 'attached' });
  // Wait for hydration and initial render
  await page.waitForTimeout(500);
}

/**
 * Get the Storybook root element
 * @param page - Playwright page instance
 * @returns Locator for #storybook-root
 */
export async function getStoryRoot(page: Page) {
  return page.locator('#storybook-root');
}

/**
 * Navigate to a story with custom args
 * @param page - Playwright page instance
 * @param storyId - Story ID
 * @param args - URL-encoded args object
 */
export async function gotoStoryWithArgs(
  page: Page,
  storyId: string,
  args: Record<string, unknown>
) {
  const argsParam = encodeURIComponent(JSON.stringify(args));
  await page.goto(`/iframe.html?id=${storyId}&viewMode=story&args=${argsParam}`);
  await page.waitForSelector('#storybook-root', { state: 'attached' });
  await page.waitForTimeout(500);
}
