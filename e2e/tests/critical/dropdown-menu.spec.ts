import { test, expect } from '@playwright/test';
import { gotoStory } from '../../helpers/storybook';
import { waitForPortal, testClickOutside } from '../../helpers/interactions';
import { checkA11y } from '../../helpers/accessibility';

test.describe('KDropdownMenu E2E', () => {
  test.beforeEach(async ({ page }) => {
    await gotoStory(page, 'datadisplay-dropdownmenu--default');
  });

  test('should open menu on trigger click', async ({ page }) => {
    // Use button text to find trigger (more reliable than data attributes)
    const trigger = page.getByRole('button', { name: '설정 열기' });
    await trigger.click();

    // Wait for menu portal to appear
    await waitForPortal(page, '[role="menu"]');

    // Verify menu is visible
    const menu = page.locator('[role="menu"]');
    await expect(menu).toBeVisible();
  });

  test('should close menu on outside click', async ({ page }) => {
    const trigger = page.getByRole('button', { name: '설정 열기' });
    await trigger.click();
    await waitForPortal(page, '[role="menu"]');

    // Click outside the menu on the page background
    await page.mouse.click(10, 10);

    // Verify menu is closed
    await expect(page.locator('[role="menu"]')).not.toBeVisible();
  });

  test('should navigate menu items with keyboard', async ({ page }) => {
    const trigger = page.getByRole('button', { name: '설정 열기' });
    await trigger.click();
    await waitForPortal(page, '[role="menu"]');

    // Press ArrowDown to navigate
    await page.keyboard.press('ArrowDown');

    // Verify at least one item gets highlighted
    const highlightedItem = page.locator('[role="menuitem"][data-highlighted]');
    await expect(highlightedItem).toBeVisible();

    // Navigate down with ArrowDown again
    await page.keyboard.press('ArrowDown');
    await expect(highlightedItem).toBeVisible();

    // Navigate up with ArrowUp
    await page.keyboard.press('ArrowUp');
    await expect(highlightedItem).toBeVisible();
  });

  test('should select radio item', async ({ page }) => {
    await gotoStory(page, 'datadisplay-dropdownmenu--selection');

    const trigger = page.getByRole('button', { name: /옵션 선택/ });
    await trigger.click();
    await waitForPortal(page, '[role="menu"]');

    // Find radio items
    const radioItems = page.locator('[role="menuitemradio"]');
    const firstRadio = radioItems.first();

    // Click radio item
    await firstRadio.click();

    // Verify it's checked
    await expect(firstRadio).toHaveAttribute('data-state', 'checked');
  });

  test('should toggle checkbox item', async ({ page }) => {
    await gotoStory(page, 'datadisplay-dropdownmenu--selection');

    const trigger = page.getByRole('button', { name: /옵션 선택/ });
    await trigger.click();
    await waitForPortal(page, '[role="menu"]');

    // Find checkbox items
    const checkboxItems = page.locator('[role="menuitemcheckbox"]');
    const firstCheckbox = checkboxItems.first();

    // Get initial state
    const initialState = await firstCheckbox.getAttribute('data-state');

    // Click to toggle
    await firstCheckbox.click();

    // Re-open menu (it closes after click)
    await trigger.click();
    await waitForPortal(page, '[role="menu"]');

    // Verify state toggled
    const newState = await checkboxItems.first().getAttribute('data-state');
    expect(newState).not.toBe(initialState);
  });

  test('should open submenu on hover', async ({ page }) => {
    // Default story has submenu
    const trigger = page.getByRole('button', { name: '설정 열기' });
    await trigger.click();
    await waitForPortal(page, '[role="menu"]');

    // Find submenu trigger (contains text "친구 초대") using BEM class
    const submenuTrigger = page.locator('.k-dropdown-menu__sub-trigger').first();
    await submenuTrigger.hover();

    // Wait for submenu to appear
    await page.waitForTimeout(300); // Hover delay

    // Verify submenu is visible
    const submenus = page.locator('[role="menu"]');
    await expect(submenus).toHaveCount(2); // Main menu + submenu
  });

  test('should render separator', async ({ page }) => {
    // Default story has separators
    const trigger = page.getByRole('button', { name: '설정 열기' });
    await trigger.click();
    await waitForPortal(page, '[role="menu"]');

    // Find separator
    const separator = page.locator('[role="separator"]');
    await expect(separator.first()).toBeVisible();
  });

  test('should render label', async ({ page }) => {
    // Default story has labels (e.g., "내 계정")
    const trigger = page.getByRole('button', { name: '설정 열기' });
    await trigger.click();
    await waitForPortal(page, '[role="menu"]');

    // Find label elements - look for text content "내 계정"
    const label = page.getByText('내 계정');
    await expect(label).toBeVisible();
  });

  test('should close on Escape key', async ({ page }) => {
    const trigger = page.getByRole('button', { name: '설정 열기' });
    await trigger.click();
    await waitForPortal(page, '[role="menu"]');

    // Press Escape
    await page.keyboard.press('Escape');

    // Verify menu is closed
    await expect(page.locator('[role="menu"]')).not.toBeVisible();
  });

  test('should pass axe accessibility tests', async ({ page }) => {
    const trigger = page.getByRole('button', { name: '설정 열기' });
    await trigger.click();
    await waitForPortal(page, '[role="menu"]');

    // Disable aria-hidden-focus rule due to Storybook portal behavior
    const results = await checkA11y(page, {
      disableRules: ['aria-hidden-focus'],
    });
    expect(results.violations).toHaveLength(0);
  });
});
