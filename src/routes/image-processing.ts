import express from 'express';
import { nextTick } from 'process';
import processImage from '../utilities/image-processing';
const routes = express.Router();
routes.get('/image', async (req, res) => {
  let filepath: string = '';
  try {
    filepath = await processImage(
      req.query.name as unknown as string,
      parseInt(req.query.width as unknown as string),
      parseInt(req.query.height as unknown as string)
    );
  } catch (error) {
    if (error && error.status) {
      res.status(error.status).send(error.error.toString());
    }
    res.status(500).send('Unexpected Error');
  }
  res.sendFile(filepath);
});
export default routes;
