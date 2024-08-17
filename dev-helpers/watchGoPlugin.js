const { exec } = require('child_process');
const path = require('path');

function watchGoPlugin() {
  return {
    name: 'watch-go-plugin',
    configureServer(server) {
      server.watcher.add(path.resolve(__dirname, 'wasm', 'go-wasm', 'main.go'));

      server.watcher.on('change', (file) => {
        if (file.endsWith('main.go')) {
          exec('./dev-helpers/wasm-builder.sh', (err, stdout, stderr) => {
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
      exec('./dev-helpers/wasm-builder.sh', (err, stdout, stderr) => {
        if (err) {
          console.error(`Error compiling Go code: ${stderr}`);
        } else {
          console.log(`Go code compiled successfully: ${stdout}`);
        }
      });
    }
  };
}

module.exports = watchGoPlugin;