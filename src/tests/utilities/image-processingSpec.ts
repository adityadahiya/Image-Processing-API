import processImage from '../../utilities/image-processing';
import path from 'path';

describe('Image', () => {
  it('expect resize() to return resized image path', async () => {
    const data = await processImage('palmtunnel', 10, 20);
    expect(data).toEqual(
      path.join(__dirname, '../../../assets/thumbnails', 'palmtunnel1020.jpg')
    );
  });

  it('expect resize() to return deafult image path', async () => {
    const data = await processImage('palmtunnel', 0, 20);
    expect(data).toEqual(
      path.join(__dirname, '../../../assets/images', 'palmtunnel.jpg')
    );
  });
});
