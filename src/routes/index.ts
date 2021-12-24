/* The Main Router - API endpoint File */

// importing all the needed tools
import express from 'express';
import path from 'path';
import fs from 'fs';
import imageResizier from '../Utilities/imageResizing';

//creating an instance og the router
const convert = express.Router();

// requesting the data from the browser
convert.get('/', async (req, res) => {
  const imageName = req.query.name;
  const imageHight = Number(req.query.hight);
  const imageWidth = Number(req.query.width);

  // naming the main and resized images according to the parameters values
  const main = path.resolve('./') + `/assets/${imageName}.jpeg`;
  const resized =
    path.resolve('./') +
    `/assets/resizedImages/${imageName}_${imageWidth}_${imageHight}.jpeg`;

  // validating the main image existance

  if (!fs.existsSync(main)) {
    return res.status(404).send('Image not found');
  }

  // validating the required width and hight for the new resized image
  if (isNaN(imageHight) || isNaN(imageWidth)) {
    return res.status(400).send('Malformed Request');
  }

  // Add caching
  if (fs.existsSync(resized)) {
    res.sendFile(resized);
  } else {
    // calling the Image Resizing Function
    await imageResizier(imageWidth, imageHight, main, resized);
    res.sendFile(resized);
  }
});

export default convert;
