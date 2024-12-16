import { spawn } from "child_process";

// Run `pdflatex` using `spawn`
const runPdflatex = (filePath: string, path: string) => {
  return new Promise((resolve, reject) => {
    const pdflatex = spawn("pdflatex", [filePath], { cwd: path });

    pdflatex.stdout.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });

    pdflatex.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
    });

    pdflatex.on("error", (error) => {
      console.error(`Error spawning pdflatex: ${error.message}`);
      reject(new Error("Error spawning pdflatex."));
    });

    pdflatex.on("close", (code) => {
      if (code !== 0) {
        console.error(`pdflatex process exited with code ${code}`);
        reject(new Error(`pdflatex process failed with code ${code}`));
      } else {
        resolve(null);
      }
    });
  });
};

export default runPdflatex;
