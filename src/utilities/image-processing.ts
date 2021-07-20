import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const processImage = async (
  img: string,
  width: number,
  height: number
): Promise<string> => {
  let filepath: string = path.join(
    __dirname,
    '../../assets/images',
    img + '.jpg'
  );
  let topath: string = path.join(
    __dirname,
    '../../assets/thumbnails',
    img + width + height + '.jpg'
  );
  if (!fs.existsSync(filepath)) {
    throw { status: 404, error: new Error('404 - File Not Found') };
  }
  try {
    if (!height || !width) {
      console.log('Using default size');
      throw new Error('Height or width parameter is incorrect');
    }
  } catch (err) {
    console.log(err);
    topath = filepath;
  }
  if (fs.existsSync(topath)) {
    return topath;
  }
  await resize(filepath, topath, width, height);

  return topath;
};
const resize = async (
  filepath: string,
  topath: string,
  width: number,
  height: number
): Promise<void> => {
  try {
    await sharp(filepath).resize(width, height).toFile(topath);
  } catch (error) {
    console.log(error);
    throw { status: 500, error: new Error(error.toString()) };
  }
};
export default processImage;
