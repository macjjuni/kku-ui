import { defineConfig, configDefaults } from 'vitest/config'; // configDefaults 추가
import viteConfig from './vite.config';

export default defineConfig({
  ...viteConfig,
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts', // 테스트 실행 전에 필요한 설정 파일
    testTimeout: 4000,
    exclude: [...configDefaults.exclude, 'e2e/**'],
    coverage: {
      provider: 'v8', // 코드 커버리지 제공자 설정 (v8 또는 istanbul)
      reporter: ['text', 'lcov', 'html'], // 커버리지 리포트 형식 (HTML 추가)
      // 커버리지 목표 설정
      thresholds: {
        statements: 85, // 구문 커버리지 85%
        branches: 80, // 분기 커버리지 80%
        functions: 90, // 함수 커버리지 90%
        lines: 85, // 라인 커버리지 85%
      },
      // 커버리지 계산에서 제외할 파일
      exclude: [
        'node_modules/**',
        '**/*.stories.tsx', // Storybook 파일
        '**/*.test.tsx', // 테스트 파일 자체
        '**/*.test.ts',
        '**/test-utils/**', // 테스트 유틸리티
        'vitest.setup.ts',
        'vitest.config.ts',
        'vite.config.ts',
        'tailwind.config.cjs',
        'lib/**', // 빌드 출력물
        '.storybook/**', // Storybook 설정
      ],
    },
  },
});