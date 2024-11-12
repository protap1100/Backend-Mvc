import express from 'express';
import { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);

const getAControllers = (req: Request, res: Response) => {
  const a = 10;
  res.status(200).send({
    a,
  });
};

app.get('/', getAControllers);

export default app;
