import express from 'express';
import routes from './routes/image-processing';

const app = express();

app.use('/', routes, function (req, res, next) {
  res.sendStatus(200);
  next();
});

const port = 3000;
app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
