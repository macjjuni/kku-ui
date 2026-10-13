const baseConfig = require('./tailwind.config.cjs');

/** base.css 전용 설정: preflight만 켠다 (utilities는 출력하지 않음) */
/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseConfig,
  content: ['./src/styles/base.css'],
  corePlugins: { preflight: true },
};
