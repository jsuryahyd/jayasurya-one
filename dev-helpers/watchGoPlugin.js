import { exec } from "child_process";
import path from "path";

export default function watchGoPlugin() {
  // const cmd = 'cd wasm/go-wasm && GOOS=js GOARCH=wasm go build -o ../../src/assets/js/main.wasm . && cd ../..'
  const cmd = "npm run build-wasm";
  return {
    name: "watch-go-plugin",
    configureServer(server) {
      server.watcher.add(path.resolve(__dirname, "wasm", "go-wasm", "main.go"));
      console.log("platform", process.platform);
      server.watcher.on("change", (file) => {
        if (file.endsWith("main.go")) {
          exec(cmd, (err, stdout, stderr) => {
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
      exec(cmd, (err, stdout, stderr) => {
        if (err) {
          console.error(`Error compiling Go code: ${stderr}`);
        } else {
          console.log(`Go code compiled successfully: ${stdout}`);
        }
      });
    },
  };
}
