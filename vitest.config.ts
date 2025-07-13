import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default defineConfig({
  ...viteConfig,
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts', // 테스트 실행 전에 필요한 설정 파일
    testTimeout: 4000, // 10초
    coverage: {
      provider: 'v8', // 코드 커버리지 제공자 설정 (v8 또는 istanbul)
      reporter: ['text', 'lcov'], // 커버리지 리포트 형식
    },
  },
});