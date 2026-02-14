# KKU-UI

**React 기반 접근성 우선 컴포넌트 라이브러리**

[![npm version](https://img.shields.io/npm/v/kku-ui.svg)](https://www.npmjs.com/package/kku-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 소개

kku-ui는 **Radix UI**, **Tailwind CSS**, **TypeScript**를 기반으로 구축된 모던 React 컴포넌트 라이브러리입니다. 접근성(a11y)을 최우선으로 하며, 컴파운드 패턴(Compound Pattern)과 유연한 조합을 통해 재사용성과 확장성을 제공합니다.

### 🎨 Storybook

컴포넌트를 직접 체험해보세요: **[https://macjjuni.github.io/kku-ui](https://macjjuni.github.io/kku-ui)**

## 주요 특징

- ✅ **접근성 우선**: Radix UI 기반으로 WAI-ARIA 표준 준수
- 🎨 **Tailwind CSS**: 유틸리티 우선 스타일링으로 커스터마이징 용이
- 🧩 **컴파운드 패턴**: 유연한 컴포넌트 조합으로 다양한 UI 구성
- 🔧 **TypeScript**: 완전한 타입 지원으로 개발 경험 향상
- 📦 **Tree-shakable**: ES 모듈 형식으로 번들 크기 최적화
- 🌗 **다크모드 지원**: CSS 변수 기반 테마 시스템
- ⚡ **SSR 호환**: 서버 사이드 렌더링 지원

## 설치

```bash
# npm
npm install kku-ui

# yarn
yarn add kku-ui

# pnpm
pnpm add kku-ui
```

## 사용법

### 1. 스타일 불러오기

엔트리 포인트에서 CSS를 import 합니다:

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

kku-ui는 유용한 커스텀 훅도 제공합니다:

```tsx
import { useClickOutside, useStableId } from 'kku-ui/hooks'

function MyComponent() {
  const id = useStableId('my-component')
  // ...
}
```

## 컴포넌트

### Actions (액션)

사용자 상호작용을 위한 컴포넌트

- `KButton` - 버튼
- `KButtonGroup` - 버튼 그룹
- `KSwitch` - 스위치 토글

### Data Display (데이터 표시)

정보를 표시하는 컴포넌트

- `KAccordion` - 아코디언 (컴파운드 패턴)
- `KDropdownMenu` - 드롭다운 메뉴
- `KBottomSheet` - 바텀시트

### Feedback (피드백)

사용자에게 피드백을 제공하는 컴포넌트

- `KDialog` - 다이얼로그/모달
- `KPopover` - 팝오버
- `KSpinner` - 로딩 스피너
- `KSkeleton` - 스켈레톤 UI
- `KToast` - 토스트 알림

### Input (입력)

폼 입력을 위한 컴포넌트

- `KInput` - 기본 입력
- `KTextField` - 텍스트 필드
- `KTextarea` - 텍스트 영역
- `KSelect` - 셀렉트
- `KInputGroup` - 입력 그룹
- `KNumberStepper` - 숫자 증감

### Layout (레이아웃)

레이아웃 구성 컴포넌트

- `KCard` - 카드
- `KListRow` - 리스트 행
- `KAspectRatio` - 종횡비 컨테이너

### Foundation (기초)

기본 요소

- `KIcon` - 아이콘 (Lucide React 통합)

## 컴파운드 패턴 예시

일부 컴포넌트는 컴파운드 패턴을 사용하여 유연한 조합을 제공합니다:

```tsx
import { KAccordion, KAccordionItem, KAccordionTrigger, KAccordionContent } from 'kku-ui'

function Example() {
  return (
    <KAccordion type="single" collapsible>
      <KAccordionItem value="item-1">
        <KAccordionTrigger>제목</KAccordionTrigger>
        <KAccordionContent>
          컨텐츠 내용
        </KAccordionContent>
      </KAccordionItem>
    </KAccordion>
  )
}
```

## 스타일 커스터마이징

kku-ui는 CSS 변수를 사용하여 쉽게 테마를 커스터마이징할 수 있습니다:

```css
:root {
  --primary: 220 90% 56%;
  --primary-foreground: 0 0% 100%;
  --radius: 0.5rem;
  /* 더 많은 CSS 변수들... */
}
```

모든 컴포넌트는 `className` prop을 통해 Tailwind 클래스로 스타일을 확장할 수 있습니다.

## 개발

### 요구사항

- Node.js 18+
- pnpm 10.5.2

### 설치 및 실행

```bash
# 의존성 설치
pnpm install

# Storybook 실행
pnpm sb

# 테스트 실행
pnpm test

# 빌드
pnpm build
```

### 프로젝트 구조

```
src/
├── components/
│   └── ui/
│       ├── actions/       # 액션 컴포넌트
│       ├── data-display/  # 데이터 표시 컴포넌트
│       ├── feedback/      # 피드백 컴포넌트
│       ├── input/         # 입력 컴포넌트
│       ├── layout/        # 레이아웃 컴포넌트
│       └── foundation/    # 기초 컴포넌트
├── common/
│   └── hooks/            # 커스텀 훅
├── lib/
│   └── utils.ts          # 유틸리티 함수
└── styles/               # 전역 스타일
```

## 기술 스택

- **React 19** - UI 라이브러리
- **TypeScript 5.3** - 타입 안정성
- **Radix UI** - 접근 가능한 UI 프리미티브
- **Tailwind CSS 3** - 유틸리티 우선 CSS
- **Class Variance Authority** - 변형 기반 스타일링
- **Lucide React** - 아이콘
- **Vite** - 빌드 도구
- **Vitest** - 테스트 프레임워크
- **Storybook** - 컴포넌트 문서화

## 라이선스

MIT © [kku-ui](https://github.com/macjjuni/kku-ui)