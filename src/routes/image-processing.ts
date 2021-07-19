import express from 'express';
import processImage from '../utilities/image-processing';
const routes = express.Router();
routes.get('/image', async (req, res) => {
  let filepath: string = '';
  await processImage(
    req.query.name as unknown as string,
    parseInt(req.query.width as unknown as string),
    parseInt(req.query.height as unknown as string)
  )
    .then((res) => {
      filepath = res;
    })
    .catch((error) => {
      console.log(error);
    });
  res.sendFile(filepath);
});

export default routes;
