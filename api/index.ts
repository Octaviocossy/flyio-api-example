import express, { Request, Response } from 'express';
import { config } from 'dotenv';
import cors from 'cors';

const app = express();

config();
app.use(express.json());

// CORS Config
app.use(
  cors({
    credentials: true,
    origin: [process.env.CLIENT_URL ?? ''],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'authorization'],
  })
);

const port = process.env.PORT || 3001;

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    msg: 'Hello World from Fly.io 🦀 😎 🚀',
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`[🧪]: Server is running at port: ${port}`);
});
