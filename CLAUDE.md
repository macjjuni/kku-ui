## Project Overview
- **Core**: React, TS, Radix UI, Tailwind CSS.
- **Pattern**: Compound components, Render props, A11y focus.
- **Output**: ESM (Modern build systems).

## Commands
- `pnpm sb`: Storybook (Port 6006) / `pnpm build-storybook`: SB build
- `pnpm build`: Build `lib/` (Vitest → Vite)
- `pnpm publish`: NPM public access
- `pnpm test`: Vitest (jsdom) / `pnpm test-ui`
- `pnpm chromatic`: Visual regression tests
- `pnpm e2e`: Playwright test (`:ui`, `:headed`, `:debug`, `:report`, `:codegen`)

## Architecture & Rules
### Organization (src/components/ui/)
- `actions`, `data-display`, `feedback`, `input`, `layout`, `foundation`.
- File structure: `[Name].tsx`, `[Name].test.tsx`, `[Name].stories.tsx`.
- **E2E Tests**: `/e2e/[ComponentName].spec.ts`.

### Development Standards
- **Foundation**: Radix UI Primitives + Lucide Icons.
- **Styling**: `cva` for variants, `cn()` (`clsx` + `tw-merge`) for merging.
- **Naming**: BEM-style (`k-accordion`, `k-accordion__item`).
- **Ref**: `ComponentPropsWithRef<typeof Primitive>` for forwarding.
- **Hooks**: Independent entry point (`kku-ui/hooks`).

### [Strict Syntax] Region Naming Convention
Every region name in React/Vue components **must** be enclosed in square brackets `[]`.
- **CRITICAL**: Do not omit the brackets.
- **BAD**: `// region Hooks`
- **GOOD**: `// region [Hooks]`

**Order & Scope:**
1. **Hooks**: States, Refs, Custom hooks.
2. **Privates**: Internal logic & helper functions (called by Events).
3. **Events**: DOM event handlers.
4. **Transactions**: API/Data fetching.
5. **Life Cycles**: `useEffect`.

## Build & Styling
- **Bundler**: Vite + `vite-plugin-dts`.
- **Alias**: `@/` -> `src/`.
- **Theme**: HSL-based CSS variables, `.focus-ring` utility.
- **Dark Mode**: Class-based (`darkMode: ['class']`).
- **External**: `react`, `react-dom`, `lucide-react`.

## Notes
- Maintain **A11y** & **SSR** compatibility (`suppressHydrationWarning`).
- Strict TS mode: No unused locals/parameters.