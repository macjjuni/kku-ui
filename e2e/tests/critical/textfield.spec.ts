import { test, expect } from '@playwright/test';
import { gotoStory } from '../../helpers/storybook';
import { verifyAriaAttributes } from '../../helpers/interactions';
import { checkA11y } from '../../helpers/accessibility';

test.describe('KTextField E2E', () => {
  test.beforeEach(async ({ page }) => {
    await gotoStory(page, 'input-textfield--default');
  });

  test('should accept text input', async ({ page }) => {
    const input = page.locator('.k-text-field__input');

    // Type text
    await input.fill('Hello World');

    // Verify value
    await expect(input).toHaveValue('Hello World');
  });

  test('should trigger async validation', async ({ page }) => {
    await gotoStory(page, 'input-textfield--async-validation');

    const input = page.locator('.k-text-field__input');
    const validateButton = page.getByRole('button', { name: /중복 확인/i });

    // Type 'admin' which should trigger error
    await input.fill('admin');

    // Click validation button
    await validateButton.click();

    // Wait for async validation
    await page.waitForTimeout(500);

    // Verify error message appears
    const errorMessage = page.locator('.k-text-field__error-message');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('이미 존재하는 아이디입니다');
  });

  test('should display error message when validation fails', async ({ page }) => {
    await gotoStory(page, 'input-textfield--validation');

    const input = page.locator('.k-text-field__input');
    const validateButton = page.getByRole('button', { name: /검증하기/i });

    // Leave input empty and validate
    await validateButton.click();

    // Verify error message appears
    const errorMessage = page.locator('.k-text-field__error-message');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('필수 입력 항목');
  });

  test('should display helper text', async ({ page }) => {
    // Default story has helper text
    const helperText = page.locator('.k-text-field__helper-text');
    await expect(helperText).toBeVisible();
    await expect(helperText).toContainText('실명을 입력해 주세요');
  });

  test('should validate email format', async ({ page }) => {
    await gotoStory(page, 'input-textfield--validation');

    const input = page.locator('.k-text-field__input');
    const validateButton = page.getByRole('button', { name: /검증하기/i });

    // Type invalid email (without @)
    await input.fill('invalidemail');
    await validateButton.click();

    // Verify error message appears
    const errorMessage = page.locator('.k-text-field__error-message');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('이메일 형식');
  });

  test('should have correct ARIA attributes', async ({ page }) => {
    const input = page.locator('.k-text-field__input').first();
    const label = page.locator('.k-text-field__label').first();

    // Verify label is associated with input
    const labelFor = await label.getAttribute('for');
    const inputId = await input.getAttribute('id');
    expect(labelFor).toBe(inputId);
  });

  test('should pass axe accessibility tests', async ({ page }) => {
    const results = await checkA11y(page);
    expect(results.violations).toHaveLength(0);
  });
});
