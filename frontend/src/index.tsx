import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('TaskSphere Backend is running!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});