/* The Main Image Processin Function - Resizing */

import sharp from 'sharp';

const imageResizier = async (
  imageWidth: number,
  imageHight: number,
  mainPath: string,
  distPath: string
) => {
  await sharp(mainPath)
    .resize({ height: imageWidth, width: imageHight })
    .toFile(distPath);
  return distPath;
};
export default imageResizier;
