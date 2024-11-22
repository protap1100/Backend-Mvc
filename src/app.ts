import express from 'express';
import { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRouter } from './app/modules/user/user.route';
import { globalErrorHandler } from './app/middlewares/globalErrorHandlers';

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRouter);

const getAControllers = (req: Request, res: Response) => {
  const a = 10;
  res.status(200).send({
    a,
  });
};

app.get('/', getAControllers);
app.use(globalErrorHandler);

export default app;
