import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const outputDir = path.join(__dirname, '/Photos');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
}

inquirer
  .prompt([{
    message: "type in your URL: ",
    name: "URL",
  }])
  .then((answers) => {
    const url = answers.URL;
    const qr_svg = qr.image(url, { type: 'png' });

    const qrImageOutputPath = path.join(outputDir, 'qr_img.png');
    qr_svg.pipe(fs.createWriteStream(qrImageOutputPath));

    const textFileOutputPath = path.join(outputDir, 'URL.txt');
    fs.writeFile(textFileOutputPath, url, (err) => {
        if (err) throw err;
        console.log("The files have been saved in the output directory!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
