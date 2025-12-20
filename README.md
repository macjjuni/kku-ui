# ✨ KKU-UI ✨
### React Component Library for Modern UI Development<br>

### 🎨 스토리북

 🔗 [Link](https://macjjuni.github.io/kku-ui)

### 소개

kku-ui는 React 기반의 컴포넌트 라이브러리로, 컴포넌트 간 유연한 조합을 위해 컴파운드 패턴과 동적인 UI 구성을 위한 Render Props 패턴이 적용되어 있습니다. 
이를 통해 재사용성과 확장성을 높이며, 가볍게 사용할 수 있도록 만들어졌습니다.

### 컴포넌트 구조

프로젝트 내 컴포넌트는 크게 **Main 컴포넌트**와 **Core 컴포넌트**로 분리되어 있습니다.

#### **Main 컴포넌트**
  다지안이 적용된 최종 UI 컴포넌트입니다.

| 컴포넌트               | 기능 | 스토리북 | a11y |
|:-------------------|:----:|:--------:|:----:|
| `<KButton/>`       | ✅   | ✅       | ✅   |
| `<KButtonGroup/>`  | ✅   | ✅       | ✅   |
| `<KToggleButton/>` | ✅   | ✅       | ✅   |
| `<KSwitch/>`       | ✅   | ✅       | ✅   |
| `<KTextField/>`    | ✅   | ✅       | ✅   |
| `<KSelect/>`       | ✅   | ✅       | ✅   |
| `<KAccordion/>`    | ✅   | ✅       | ✅   |
| `<KMenu/>`         | ✅   | ✅       | ✅   |
| `<KDropdown/>`     | ✅   | ✅       | ✅   |
| `<KBackdrop/>`     | ✅   | ✅       | ✅   |
| `<KModal/>`        | ✅   | ✅       | ✅   |
| `<KSpinner/>`      | ✅   | ✅       | ✅   |
| `<KIcon/>`         | ✅   | ✅       | ✅   |
| 🏃🏻‍♂             

#### **Core 컴포넌트**  
  디자인 없이 기본 로직과 접근성(A11y) 처리만 포함된 단일 컴포넌트입니다.  
  Main 컴포넌트 내부에서 재사용되며, 재사용성과 별도의 디자인을 적용하기 위해 만들어 졌습니다.

| 컴포넌트                    | 기능 | 스토리북 | a11y |
|:------------------------|:----:|:--------:|:----:|
| `<KButton/>`            | ✅   | ✅       | ✅   |
| `<TextField/>`         | ✅  | ✅       | ✅   |
| `<Switch/>`            | ✅   | ✅       | ✅   |
| `<Menu/>`              | ✅   | ✅       | ✅   |
| `<MenuItem/>`          | ✅   | ✅       | ✅   |
| `<Accordion/>`         | ✅  | ✅       | ✅   |
| `<Accordion.Summary/>` | ✅  | ✅       | ✅   |
| `<Accordion.Content/>` | ✅  | ✅       | ✅   |


## 📦 Install
```
npm install kku-ui
```
```
yarn add kku-ui
```
```
pnpm add kku-ui
```

## ⚙️ Initial Setting
```typescript
// Entry Point 🏃🏻‍♂️

import 'kku-ui/lib/index.css'
```

## 🧑🏻‍💻 Use Examples

```typescript
import { KButton } from 'kku-ui'

export default function Component() {
  return (
    <KButton label="Hello World!"/>
  );
} 
```



