/* The Main API */

import express from 'express';
import routes from './routes/index';
import path from 'path';
import fs from 'fs';

const app = express();
const port = 3000;

// validating if the resizedImages folder is avaliable or not
const resizedImagePath = path.resolve('./') + `/assets/resizedImages/`;
if (!fs.existsSync(resizedImagePath)) {
  fs.mkdirSync(resizedImagePath);
}

app.use('/api', routes);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
