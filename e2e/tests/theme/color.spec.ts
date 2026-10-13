import { test, expect, type Page } from '@playwright/test';
import { gotoStory } from '../../helpers/storybook';

/** 앱이 kku-ui/index.css만 import한 상태를 재현 (Storybook preview가 함께 로드하는 base.css 제거) */
async function removeBaseCss(page: Page) {
  const removed = await page.evaluate(() => {
    const styles = [...document.querySelectorAll('style[data-vite-dev-id]')].filter((el) =>
      el.getAttribute('data-vite-dev-id')?.replace(/\\/g, '/').endsWith('/src/styles/base.css'),
    );
    for (const el of styles) el.remove();
    return styles.length;
  });
  expect(removed).toBeGreaterThan(0);
}

/** 테마 토큰(hsl(var(--x)))을 브라우저가 계산한 rgb 값으로 변환 */
const tokenColor = (page: Page, token: string) =>
  page.evaluate((t) => {
    const probe = document.createElement('div');
    probe.style.color = `hsl(var(${t}))`;
    document.body.appendChild(probe);
    const color = getComputedStyle(probe).color;
    probe.remove();
    return color;
  }, token);

const bodyStyle = (page: Page) =>
  page.evaluate(() => {
    const s = getComputedStyle(document.body);
    return { color: s.color, background: s.backgroundColor };
  });

async function enableDark(page: Page) {
  await page.evaluate(() => {
    document.documentElement.classList.add('dark');
  });
}

test.describe('테마 색상 (index.css만 import)', () => {
  test.beforeEach(async ({ page }) => {
    await gotoStory(page, 'datadisplay-dialog--default');
    await removeBaseCss(page);
  });

  test('라이트 모드: body 글자색/배경이 --foreground/--background를 따라야 한다', async ({ page }) => {
    const { color, background } = await bodyStyle(page);
    expect(color).toBe(await tokenColor(page, '--foreground'));
    expect(background).toBe(await tokenColor(page, '--background'));
  });

  test('다크 모드: body 글자색/배경이 다크 테마 값으로 바뀌어야 한다', async ({ page }) => {
    const light = await bodyStyle(page);
    await enableDark(page);
    const dark = await bodyStyle(page);

    expect(dark.color).toBe(await tokenColor(page, '--foreground'));
    expect(dark.background).toBe(await tokenColor(page, '--background'));
    expect(dark.color).not.toBe(light.color);
    expect(dark.color).not.toBe('rgb(0, 0, 0)');
  });

  test('앱 마크업의 기본 border 색상이 --border를 따라야 한다', async ({ page }) => {
    await enableDark(page);
    const borderColor = await page.evaluate(() => {
      const el = document.createElement('div');
      el.style.borderWidth = '1px';
      el.style.borderStyle = 'solid';
      document.body.appendChild(el);
      const c = getComputedStyle(el).borderTopColor;
      el.remove();
      return c;
    });
    expect(borderColor).toBe(await tokenColor(page, '--border'));
  });
});
