import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// With ESM in Node.js, the __dirname and __filename globals are not available 
//as in CommonJS modules. To achieve similar functionality, 
//you need to use import.meta.url in combination with the url and path modules.

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname   + '/index.html');
    });


app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });