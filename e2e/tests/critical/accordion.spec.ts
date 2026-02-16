import { test, expect } from '@playwright/test';
import { gotoStory } from '../../helpers/storybook';
import { verifyAriaAttributes, waitForAnimation } from '../../helpers/interactions';
import { checkA11y } from '../../helpers/accessibility';

test.describe('KAccordion E2E', () => {
  test.beforeEach(async ({ page }) => {
    await gotoStory(page, 'datadisplay-accordion--default');
  });

  test('should expand and collapse items', async ({ page }) => {
    const trigger = page.locator('.k-accordion__trigger').first();
    const content = page.locator('.k-accordion__content').first();

    // Initially collapsed
    await expect(content).toHaveAttribute('data-state', 'closed');

    // Click to expand
    await trigger.click();
    await waitForAnimation(page);
    await expect(content).toHaveAttribute('data-state', 'open');

    // Click to collapse
    await trigger.click();
    await waitForAnimation(page);
    await expect(content).toHaveAttribute('data-state', 'closed');
  });

  test('should support keyboard navigation with Enter', async ({ page }) => {
    const trigger = page.locator('.k-accordion__trigger').first();
    const content = page.locator('.k-accordion__content').first();

    // Focus trigger
    await trigger.focus();
    await expect(trigger).toBeFocused();

    // Press Enter to expand
    await page.keyboard.press('Enter');
    await waitForAnimation(page);
    await expect(content).toHaveAttribute('data-state', 'open');

    // Press Enter to collapse
    await page.keyboard.press('Enter');
    await waitForAnimation(page);
    await expect(content).toHaveAttribute('data-state', 'closed');
  });

  test('should support keyboard navigation with Space', async ({ page }) => {
    const trigger = page.locator('.k-accordion__trigger').first();
    const content = page.locator('.k-accordion__content').first();

    await trigger.focus();

    // Press Space to expand
    await page.keyboard.press('Space');
    await waitForAnimation(page);
    await expect(content).toHaveAttribute('data-state', 'open');

    // Press Space to collapse
    await page.keyboard.press('Space');
    await waitForAnimation(page);
    await expect(content).toHaveAttribute('data-state', 'closed');
  });

  test('should collapse previous item in single mode (default)', async ({ page }) => {
    const trigger1 = page.locator('.k-accordion__trigger').nth(0);
    const trigger2 = page.locator('.k-accordion__trigger').nth(1);
    const content1 = page.locator('.k-accordion__content').nth(0);
    const content2 = page.locator('.k-accordion__content').nth(1);

    // Expand first item
    await trigger1.click();
    await waitForAnimation(page);
    await expect(content1).toHaveAttribute('data-state', 'open');

    // Expand second item - first should close
    await trigger2.click();
    await waitForAnimation(page);
    await expect(content2).toHaveAttribute('data-state', 'open');
    await expect(content1).toHaveAttribute('data-state', 'closed');
  });

  test('should keep multiple items open in multiple mode', async ({ page }) => {
    await gotoStory(page, 'datadisplay-accordion--multiple');

    const trigger1 = page.locator('.k-accordion__trigger').nth(0);
    const trigger2 = page.locator('.k-accordion__trigger').nth(1);
    const content1 = page.locator('.k-accordion__content').nth(0);
    const content2 = page.locator('.k-accordion__content').nth(1);

    // Expand first item
    await trigger1.click();
    await waitForAnimation(page);
    await expect(content1).toHaveAttribute('data-state', 'open');

    // Expand second item - first should stay open
    await trigger2.click();
    await waitForAnimation(page);
    await expect(content2).toHaveAttribute('data-state', 'open');
    await expect(content1).toHaveAttribute('data-state', 'open');
  });

  test('should have correct ARIA attributes', async ({ page }) => {
    const trigger = page.locator('.k-accordion__trigger').first();
    const content = page.locator('.k-accordion__content').first();

    // Get IDs for aria-controls relationship
    const contentId = await content.getAttribute('id');
    expect(contentId).toBeTruthy();

    // Verify trigger has correct ARIA attributes when closed
    await verifyAriaAttributes(trigger, {
      'aria-expanded': 'false',
      'aria-controls': contentId!,
    });

    // Expand and verify aria-expanded changes
    await trigger.click();
    await waitForAnimation(page);
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  test('should render small size variant', async ({ page }) => {
    await gotoStory(page, 'datadisplay-accordion--small');

    const accordion = page.locator('.k-accordion');
    await expect(accordion).toBeVisible();

    // Verify item is rendered (Small story has 1 item)
    const items = page.locator('.k-accordion__item');
    await expect(items).toHaveCount(1);

    // Verify small size styling
    const trigger = page.locator('.k-accordion__trigger').first();
    await expect(trigger).toBeVisible();
  });

  test('should pass axe accessibility tests', async ({ page }) => {
    const results = await checkA11y(page);
    expect(results.violations).toHaveLength(0);
  });
});
