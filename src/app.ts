import express from 'express';
import { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { globalErrorHandler } from './app/middlewares/globalErrorHandlers';
import notFound from './app/middlewares/notfound';
import router from './app/routes';

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/', router);

const test = (req: Request, res: Response) => {
  const a = 10;
  res.status(200).send({
    a,
  });
};

app.get('/', test);
app.use(globalErrorHandler);
//  Not Found
app.use(notFound);

export default app;
