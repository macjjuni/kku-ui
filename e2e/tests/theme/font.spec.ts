import { test, expect, type Page } from '@playwright/test';
import { gotoStory } from '../../helpers/storybook';
import { waitForPortal } from '../../helpers/interactions';

const OVERRIDE_CSS = ":root { --font-sans: 'Courier New', monospace; }";

const fontOf = (page: Page, selector: string) =>
  page.locator(selector).first().evaluate((el) => getComputedStyle(el).fontFamily);

/** Dialog를 열고 body 밖 Portal(storybook-root 외부)에 렌더링됐는지 확인 */
async function openDialog(page: Page) {
  await gotoStory(page, 'datadisplay-dialog--default');
  await page.getByRole('button', { name: '열기' }).click();
  await waitForPortal(page, '[role="dialog"]');

  const insideRoot = await page.locator('[role="dialog"]').evaluate((el) => !!el.closest('#storybook-root'));
  expect(insideRoot).toBe(false);
}

async function openDropdown(page: Page) {
  await gotoStory(page, 'datadisplay-dropdownmenu--default');
  await page.getByRole('button', { name: '설정 열기' }).click();
  await waitForPortal(page, '[role="menu"]');
}

test.describe('폰트 (--font-sans)', () => {
  test('기본값: body와 Portal 컴포넌트에 Pretendard가 적용되어야 한다', async ({ page }) => {
    await openDialog(page);

    expect(await fontOf(page, 'body')).toMatch(/^Pretendard/);
    expect(await fontOf(page, '[role="dialog"]')).toMatch(/^Pretendard/);

    // 실제 폰트 파일이 로드되어 렌더링에 쓰이는지 확인
    const loaded = await page.evaluate(async () => {
      await document.fonts.ready;
      return document.fonts.check('16px Pretendard');
    });
    expect(loaded).toBe(true);
  });

  test('--font-sans를 덮어쓰면 Portal로 뜨는 Dialog/DropdownMenu에도 적용되어야 한다', async ({ page }) => {
    await openDialog(page);
    await page.addStyleTag({ content: OVERRIDE_CSS });

    expect(await fontOf(page, 'body')).toMatch(/^"Courier New"/);
    expect(await fontOf(page, '[role="dialog"]')).toMatch(/^"Courier New"/);

    await openDropdown(page);
    await page.addStyleTag({ content: OVERRIDE_CSS });
    expect(await fontOf(page, '[role="menu"]')).toMatch(/^"Courier New"/);
  });

  test('다크모드에서도 --font-sans 오버라이드가 유지되어야 한다', async ({ page }) => {
    await openDialog(page);
    await page.addStyleTag({ content: OVERRIDE_CSS });
    await page.evaluate(() => {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    });

    expect(await fontOf(page, '[role="dialog"]')).toMatch(/^"Courier New"/);
  });

  test('앱 CSS가 kku-ui CSS보다 먼저 로드되어도 --font-sans 오버라이드가 적용되어야 한다', async ({ page }) => {
    await openDialog(page);
    await page.evaluate((css) => {
      const style = document.createElement('style');
      style.textContent = css;
      document.head.prepend(style);
    }, OVERRIDE_CSS);

    expect(await fontOf(page, '[role="dialog"]')).toMatch(/^"Courier New"/);
  });

  test('앱 preflight가 html에 다른 폰트를 지정해도 kku-ui 기본 폰트가 유지되어야 한다', async ({ page }) => {
    await openDialog(page);
    // Tailwind preflight 등 앱의 html 폰트 지정을 흉내 (kku-ui CSS 이후에 로드)
    await page.addStyleTag({ content: 'html { font-family: serif; }' });

    expect(await fontOf(page, 'body')).toMatch(/^Pretendard/);
    expect(await fontOf(page, '[role="dialog"]')).toMatch(/^Pretendard/);
  });
});
