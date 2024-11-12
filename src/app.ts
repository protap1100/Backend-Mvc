import express from 'express';
import { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';

// parsers
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello From Protap');
});

export default app;
