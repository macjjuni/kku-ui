import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';


export default defineConfig({
  ...viteConfig,
  test: {
    globals: true, // Jest처럼 `globalThis`를 사용할 수 있도록 설정
    environment: 'jsdom', // React 컴포넌트 테스트를 위한 JSDOM 환경
    setupFiles: './setupTests.ts', // 테스트 실행 전에 필요한 설정 파일
    coverage: {
      provider: 'v8', // 코드 커버리지 제공자 설정 (v8 또는 istanbul)
      reporter: ['text', 'lcov'], // 커버리지 리포트 형식
    },
  },
});