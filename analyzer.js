import esbuild from 'esbuild';
import AnalyzerPlugin from 'esbuild-analyzer';
import fs from 'fs';

esbuild.build({
  entryPoints: ['lib/esm/index.js'],
  outdir: 'analyzer',
  bundle: true,
  metafile: true,
  plugins: [AnalyzerPlugin()],
}).then((result) => {
  // 메타파일을 JSON으로 저장
  fs.writeFileSync('./analyzer/meta.json', JSON.stringify(result.metafile, null, 2));
  console.log('Metafile saved to ./analyzer/meta.json');
});
