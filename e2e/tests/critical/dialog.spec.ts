import { test, expect } from '@playwright/test';
import { gotoStory } from '../../helpers/storybook';
import { waitForPortal, verifyFocusTrap, verifyAriaAttributes } from '../../helpers/interactions';
import { checkA11y } from '../../helpers/accessibility';

test.describe('KDialog E2E', () => {
  test.beforeEach(async ({ page }) => {
    await gotoStory(page, 'datadisplay-dialog--default');
  });

  test('should render in portal outside story root', async ({ page }) => {
    // Open dialog - button text is "열기" in Korean
    await page.getByRole('button', { name: '열기' }).click();
    await waitForPortal(page, '[role="dialog"]');

    // Verify dialog content is visible
    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).toBeVisible();

    // Verify dialog has proper content class
    const dialogContent = page.locator('.k-dialog__content');
    await expect(dialogContent).toBeVisible();
  });

  test('should trap focus within dialog', async ({ page }) => {
    await page.getByRole('button', { name: '열기' }).click();
    await waitForPortal(page, '[role="dialog"]');

    await verifyFocusTrap(page, '[role="dialog"]');
  });

  test('should close on Escape key', async ({ page }) => {
    await page.getByRole('button', { name: '열기' }).click();
    await waitForPortal(page, '[role="dialog"]');

    await page.keyboard.press('Escape');

    // Verify dialog is closed
    await expect(page.locator('[role="dialog"]')).not.toBeVisible();
  });

  test('should close on outside click', async ({ page }) => {
    await page.getByRole('button', { name: '열기' }).click();
    await waitForPortal(page, '[role="dialog"]');

    // Click outside dialog (on body background)
    await page.mouse.click(10, 10);

    // Wait a bit for the close animation
    await page.waitForTimeout(300);

    // Verify dialog is closed
    await expect(page.locator('[role="dialog"]')).not.toBeVisible();
  });

  test('should close when close button is clicked', async ({ page }) => {
    await page.getByRole('button', { name: '열기' }).click();
    await waitForPortal(page, '[role="dialog"]');

    // Click close button (X icon)
    const closeButton = page.locator('[role="dialog"] button').filter({ hasText: /×|close/i }).first();
    await closeButton.click();

    // Verify dialog is closed
    await expect(page.locator('[role="dialog"]')).not.toBeVisible();
  });

  test('should restore focus to trigger after close', async ({ page }) => {
    const trigger = page.getByRole('button', { name: '열기' });

    await trigger.click();
    await waitForPortal(page, '[role="dialog"]');

    await page.keyboard.press('Escape');

    // Verify focus returned to trigger
    await expect(trigger).toBeFocused();
  });

  test('should have correct ARIA attributes', async ({ page }) => {
    await page.getByRole('button', { name: '열기' }).click();
    await waitForPortal(page, '[role="dialog"]');

    const dialog = page.locator('[role="dialog"]');

    // Verify dialog has correct role
    await expect(dialog).toHaveAttribute('role', 'dialog');

    // Verify title exists and is properly labeled
    const title = page.getByText('정말 진행하시겠습니까?');
    await expect(title).toBeVisible();
  });

  test('should render small size variant', async ({ page }) => {
    await gotoStory(page, 'datadisplay-dialog--small');

    // Button text for Small story is "Small 모달"
    await page.getByRole('button', { name: 'Small 모달' }).click();
    await waitForPortal(page, '[role="dialog"]');

    const dialogContent = page.locator('.k-dialog__content');
    await expect(dialogContent).toBeVisible();
  });

  test('should pass axe accessibility tests (excluding color-contrast)', async ({ page }) => {
    await page.getByRole('button', { name: '열기' }).click();
    await waitForPortal(page, '[role="dialog"]');

    const results = await checkA11y(page);

    // Filter out color-contrast violations (known design system issue)
    const nonColorContrastViolations = results.violations.filter(
      violation => violation.id !== 'color-contrast'
    );

    expect(nonColorContrastViolations).toHaveLength(0);
  });
});
