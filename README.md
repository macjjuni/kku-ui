# KKU-UI

[![npm version](https://img.shields.io/npm/v/kku-ui.svg)](https://www.npmjs.com/package/kku-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

개인적으로 사용하려고 만든 Radix UI 기반 커스텀 컴포넌트 라이브러리입니다.

### 🎨 Storybook

**[Link](https://macjjuni.github.io/kku-ui)**

---

## 설치

```bash
npm install kku-ui react react-dom lucide-react
# or
pnpm add kku-ui react react-dom lucide-react
```

`react`, `react-dom`(19 이상)과 `lucide-react`는 peerDependency이므로 앱에 직접 설치해야 합니다.

## 사용법

### 1. 스타일 불러오기

```tsx
// Tailwind를 쓰지 않는 앱: 전역 리셋(preflight) + 컴포넌트 스타일
import 'kku-ui/base.css'
import 'kku-ui/index.css'

// Tailwind를 쓰는 앱: 앱의 preflight를 그대로 쓰고 컴포넌트 스타일만
import 'kku-ui/index.css'
```

| 파일 | 내용 |
|---|---|
| `kku-ui/index.css` | 디자인 토큰(CSS 변수), 폰트, 컴포넌트 스타일, 기본 border 색상, `body` 배경·글자색(라이트/다크) |
| `kku-ui/base.css` | Tailwind preflight (선택, Tailwind를 쓰지 않는 앱용) |

### 2. 컴포넌트 사용

```tsx
import { KButton, KSwitch, KAccordion } from 'kku-ui'

function App() {
  return (
    <div>
      <KButton>Click me</KButton>
      <KSwitch />
    </div>
  )
}
```

### 3. 커스텀 훅 사용

```tsx
import { useClickOutside, useStableId } from 'kku-ui/hooks'

function MyComponent() {
  const id = useStableId('my-component')
  // ...
}
```

---

## 컴포넌트

### Actions

- `KButton` - 버튼
- `KButtonGroup` - 버튼 그룹
- `KSwitch` - 스위치 토글

### Data Display

- `KAccordion` - 아코디언
- `KDropdownMenu` - 드롭다운 메뉴
- `KBottomSheet` - 바텀시트

### Feedback

- `KDialog` - 다이얼로그
- `KPopover` - 팝오버
- `KSpinner` - 로딩 스피너
- `KSkeleton` - 스켈레톤 UI
- `KToast` - 토스트 알림

### Input

- `KInput` - 기본 입력
- `KTextField` - 텍스트 필드
- `KTextarea` - 텍스트 영역
- `KSelect` - 셀렉트
- `KInputGroup` - 입력 그룹
- `KNumberStepper` - 숫자 증감

### Layout

- `KCard` - 카드
- `KListRow` - 리스트 행
- `KAspectRatio` - 종횡비 컨테이너

### Foundation

- `KIcon` - 아이콘 (Lucide React)

---

## 컴파운드 패턴

```tsx
import { KAccordion, KAccordionItem, KAccordionTrigger, KAccordionContent } from 'kku-ui'

function Example() {
  return (
    <KAccordion type="single" collapsible>
      <KAccordionItem value="item-1">
        <KAccordionTrigger>제목</KAccordionTrigger>
        <KAccordionContent>컨텐츠 내용</KAccordionContent>
      </KAccordionItem>
    </KAccordion>
  )
}
```

## 스타일 커스터마이징

CSS 변수로 테마를 덮어쓸 수 있습니다:

```css
:root {
  --primary: 220 90% 56%;
  --primary-foreground: 0 0% 100%;
  --radius: 0.5rem;
}
```

모든 컴포넌트는 `className` prop으로 Tailwind 클래스를 추가할 수 있습니다.

### 폰트

`kku-ui/index.css`를 import하면 기본 폰트로 **Pretendard**(Regular/Medium/Bold)가 `body`에 자동 적용됩니다. 별도 폰트 설정이 필요 없습니다.

다른 폰트를 쓰려면 `--font-sans` 변수를 덮어쓰면 됩니다. Portal로 렌더링되는 Dialog, Dropdown, Toast 등에도 함께 적용됩니다 CSS import 순서나 다크모드와 관계없이 앱의 `:root` 선언이 우선 적용됩니다.

```css
:root {
  --font-sans: 'Noto Sans KR', sans-serif;
}
```

Next.js의 `next/font`를 쓰는 경우 `body`에 폰트 클래스를 지정하거나 변수로 연결합니다.

```tsx
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
// <html className={inter.variable}>
```

```css
:root {
  --font-sans: var(--font-inter), sans-serif;
}
```

다른 폰트로 덮어쓰면 Pretendard 파일은 다운로드되지 않습니다.

---

## 개발

```bash
pnpm install

pnpm sb        # Storybook
pnpm test      # 유닛 테스트
pnpm e2e       # E2E 테스트
pnpm build     # 빌드
```

### 프로젝트 구조

```
src/
├── components/ui/
│   ├── actions/
│   ├── data-display/
│   ├── feedback/
│   ├── input/
│   ├── layout/
│   └── foundation/
├── common/hooks/
└── styles/

__tests__/         # 유닛 테스트
e2e/               # E2E 테스트 (Playwright)
```

## 기술 스택

- React 19 + TypeScript
- Radix UI + Tailwind CSS
- Vite / Vitest / Storybook / Playwright

## 라이선스

MIT © [macjjuni](https://github.com/macjjuni/kku-ui)
