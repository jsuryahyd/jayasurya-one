import { exec } from 'child_process';
import path from 'path';

export default function watchGoPlugin() {
  return {
    name: 'watch-go-plugin',
    configureServer(server) {
      server.watcher.add(path.resolve(__dirname, 'wasm', 'go-wasm', 'main.go'));
      console.log('platform', process.platform)
      server.watcher.on('change', (file) => {
        if (file.endsWith('main.go')) {
          exec('/bin/bash ./dev-helpers/wasm-builder.sh', (err, stdout, stderr) => {
            if (err) {
              console.error(`Error compiling Go code: ${stderr}`);
            } else {
              console.log(`Go code compiled successfully: ${stdout}`);
            }
          });
        }
      });
    },
    buildStart() {
      exec('/bin/bash ./dev-helpers/wasm-builder.sh', (err, stdout, stderr) => {
        if (err) {
          console.error(`Error compiling Go code: ${stderr}`);
        } else {
          console.log(`Go code compiled successfully: ${stdout}`);
        }
      });
    }
  };
}