# KKU-UI

[![npm version](https://img.shields.io/npm/v/kku-ui.svg)](https://www.npmjs.com/package/kku-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

개인적으로 사용하려고 만든 Radix UI 기반 커스텀 컴포넌트 라이브러리입니다.

### 🎨 Storybook

**[Link](https://macjjuni.github.io/kku-ui)**

---

## 설치

```bash
npm install kku-ui
# or
pnpm add kku-ui
```

## 사용법

### 1. 스타일 불러오기

```tsx
import 'kku-ui/lib/index.css'
```

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
