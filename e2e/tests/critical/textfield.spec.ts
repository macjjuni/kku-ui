import { test, expect } from '@playwright/test';
import { gotoStory } from '../../helpers/storybook';
import { verifyAriaAttributes } from '../../helpers/interactions';
import { checkA11y } from '../../helpers/accessibility';

test.describe('KTextField E2E', () => {
  test.beforeEach(async ({ page }) => {
    await gotoStory(page, 'input-textfield--default');
  });

  test('should accept text input', async ({ page }) => {
    // Find input by placeholder (from Default story)
    const input = page.getByPlaceholder('이름을 입력하세요');

    // Type text
    await input.fill('Hello World');

    // Verify value
    await expect(input).toHaveValue('Hello World');
  });

  test('should trigger async validation', async ({ page }) => {
    await gotoStory(page, 'input-textfield--async-validation');

    // Find input by placeholder (from AsyncValidation story)
    const input = page.getByPlaceholder('admin 입력 시 중복 에러');
    const validateButton = page.getByRole('button', { name: /중복 확인/i });

    // Type 'admin' which should trigger error
    await input.fill('admin');

    // Click validation button
    await validateButton.click();

    // Wait for async validation
    await page.waitForTimeout(500);

    // Verify error message appears (error messages are rendered as <p> with text-destructive class)
    const errorMessage = page.locator('p.text-destructive');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('이미 존재하는 아이디입니다');
  });

  test('should display error message when validation fails', async ({ page }) => {
    await gotoStory(page, 'input-textfield--validation');

    // Find input by placeholder (from Validation story)
    const input = page.getByPlaceholder('example@kku.com');
    const validateButton = page.getByRole('button', { name: /검증하기/i });

    // Leave input empty and validate
    await validateButton.click();

    // Verify error message appears (error messages are rendered as <p> with text-destructive class)
    const errorMessage = page.locator('p.text-destructive');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('필수 입력 항목');
  });

  test('should display helper text', async ({ page }) => {
    // Default story has helper text (rendered as <p> with text-muted-foreground class)
    const helperText = page.locator('p.text-muted-foreground');
    await expect(helperText).toBeVisible();
    await expect(helperText).toContainText('실명을 입력해 주세요');
  });

  test('should validate email format', async ({ page }) => {
    await gotoStory(page, 'input-textfield--validation');

    // Find input by placeholder (from Validation story)
    const input = page.getByPlaceholder('example@kku.com');
    const validateButton = page.getByRole('button', { name: /검증하기/i });

    // Type invalid email (without @)
    await input.fill('invalidemail');
    await validateButton.click();

    // Verify error message appears (error messages are rendered as <p> with text-destructive class)
    const errorMessage = page.locator('p.text-destructive');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('이메일 형식');
  });

  test('should have correct ARIA attributes', async ({ page }) => {
    // Find label by text content (from Default story)
    const label = page.getByText('이름', { exact: true });
    const input = page.getByPlaceholder('이름을 입력하세요');

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
