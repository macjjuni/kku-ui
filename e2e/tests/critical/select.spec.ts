import { test, expect } from '@playwright/test';
import { gotoStory } from '../../helpers/storybook';
import { waitForPortal, verifyAriaAttributes } from '../../helpers/interactions';
import { checkA11y } from '../../helpers/accessibility';

test.describe('KSelect E2E', () => {
  test.beforeEach(async ({ page }) => {
    await gotoStory(page, 'input-select--default');
  });

  test('should open dropdown on click', async ({ page }) => {
    const trigger = page.locator('.k-select__trigger');
    await trigger.click();

    // Wait for portal dropdown to appear
    await waitForPortal(page, '[role="listbox"]');

    // Verify dropdown is visible
    const dropdown = page.locator('[role="listbox"]');
    await expect(dropdown).toBeVisible();
  });

  test('should select option and close dropdown', async ({ page }) => {
    const trigger = page.locator('.k-select__trigger');

    // Open dropdown
    await trigger.click();
    await waitForPortal(page, '[role="listbox"]');

    // Select first option
    const firstOption = page.locator('[role="option"]').first();
    const optionText = await firstOption.textContent();
    await firstOption.click();

    // Verify dropdown closed
    await expect(page.locator('[role="listbox"]')).not.toBeVisible();

    // Verify selected value is displayed
    await expect(trigger).toContainText(optionText!);
  });

  test('should navigate options with arrow keys', async ({ page }) => {
    const trigger = page.locator('.k-select__trigger');

    // Open dropdown
    await trigger.click();
    await waitForPortal(page, '[role="listbox"]');

    const options = page.locator('[role="option"]');
    const firstOption = options.first();

    // First option should be highlighted
    await expect(firstOption).toHaveAttribute('data-highlighted', '');

    // Press ArrowDown
    await page.keyboard.press('ArrowDown');
    const secondOption = options.nth(1);
    await expect(secondOption).toHaveAttribute('data-highlighted', '');

    // Press ArrowUp
    await page.keyboard.press('ArrowUp');
    await expect(firstOption).toHaveAttribute('data-highlighted', '');
  });

  test('should select option with Enter key', async ({ page }) => {
    const trigger = page.locator('.k-select__trigger');

    // Open dropdown
    await trigger.click();
    await waitForPortal(page, '[role="listbox"]');

    // Get first option text
    const firstOption = page.locator('[role="option"]').first();
    const optionText = await firstOption.textContent();

    // Press Enter to select
    await page.keyboard.press('Enter');

    // Verify dropdown closed and value selected
    await expect(page.locator('[role="listbox"]')).not.toBeVisible();
    await expect(trigger).toContainText(optionText!);
  });

  test('should close on Escape key without selection', async ({ page }) => {
    const trigger = page.locator('.k-select__trigger');
    const originalValue = await trigger.textContent();

    // Open dropdown
    await trigger.click();
    await waitForPortal(page, '[role="listbox"]');

    // Navigate to different option
    await page.keyboard.press('ArrowDown');

    // Press Escape
    await page.keyboard.press('Escape');

    // Verify dropdown closed and value unchanged
    await expect(page.locator('[role="listbox"]')).not.toBeVisible();
    await expect(trigger).toHaveText(originalValue!);
  });

  test('should skip disabled options with keyboard navigation', async ({ page }) => {
    // Default story already has disabled options (Option 3)
    const trigger = page.locator('.k-select__trigger');
    await trigger.click();
    await waitForPortal(page, '[role="listbox"]');

    // Navigate through options with ArrowDown
    // Disabled options should be skipped automatically by Radix UI
    await page.keyboard.press('ArrowDown');

    // Get the highlighted option
    const highlightedOption = page.locator('[role="option"][data-highlighted]');

    // Verify it's not disabled
    await expect(highlightedOption).not.toHaveAttribute('data-disabled', 'true');
  });

  test('should display error state', async ({ page }) => {
    await gotoStory(page, 'input-select--error');

    const selectContainer = page.locator('.k-select');
    await expect(selectContainer).toHaveAttribute('data-invalid', 'true');

    // Verify error message is displayed
    const errorMessage = page.locator('.k-select__error-message');
    await expect(errorMessage).toBeVisible();
  });

  test('should render with custom width', async ({ page }) => {
    const trigger = page.locator('.k-select__trigger');
    await trigger.click();
    await waitForPortal(page, '[role="listbox"]');

    const dropdown = page.locator('[role="listbox"]');

    // Verify dropdown has a width
    const boundingBox = await dropdown.boundingBox();
    expect(boundingBox?.width).toBeGreaterThan(0);
  });

  test('should have correct ARIA attributes', async ({ page }) => {
    const trigger = page.locator('.k-select__trigger');

    // Verify trigger has correct role and attributes
    await verifyAriaAttributes(trigger, {
      'role': 'combobox',
      'aria-expanded': 'false',
    });

    // Open dropdown
    await trigger.click();
    await waitForPortal(page, '[role="listbox"]');

    // Verify aria-expanded changed
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');

    // Verify dropdown has correct role
    const dropdown = page.locator('[role="listbox"]');
    await expect(dropdown).toHaveRole('listbox');
  });

  test('should pass axe accessibility tests', async ({ page }) => {
    const results = await checkA11y(page);
    expect(results.violations).toHaveLength(0);
  });
});
