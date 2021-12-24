/* Main Testing File */

import supertest from 'supertest';
import app from '../index';
import fs from 'fs';
import path from 'path';
import imageResizier from '../Utilities/imageResizing';

const request = supertest(app);

const resized = path.resolve('./') + `/assets/resizedImages/`;
const main = path.resolve('./') + `/assets/`;

describe('(1) Test The Applications Assets', () => {
  it('checks if the original image parameter is avaliable', () => {
    expect(fs.existsSync(`${main}/fjord.jpeg`)).toBe(true);
  });
  it('checks if the original image parameter is invalid', () => {
    expect(fs.existsSync(`${main}/Hagar.jpeg`)).toBe(false);
  });
});

describe('(2) Test The Image Processing Function', () => {
  it('checks if the function succeed in resizing image correctly', async () => {
    const response = await imageResizier(
      200,
      400,
      `${main}/encenadaport.jpeg`,
      `${resized}/encenadaport_200_400.jpeg`
    );
    expect(response).toEqual(`${resized}/encenadaport_200_400.jpeg`);
  });
});

describe('(3) Test endpoint responses', () => {
  it('checks if the api can get the resized image correctly', async () => {
    const response = await request.get(
      '/api?name=palmtunnel&width=200&hight=200'
    );
    expect(response.status).toBe(200);
  });
  it('checks if the resized image saved in the specified output directory', () => {
    expect(fs.existsSync(`${resized}/palmtunnel_200_200`)).toBeTruthy;
  });

  it('checks if a new first time resized image has already saved in the specified output directory', () => {
    expect(fs.existsSync(`${resized}/fjord_500_200`)).toBe(false);
  });
});
