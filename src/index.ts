import express from 'express';
import type { Request, Response } from 'express';
import { env } from './config/env.config';
import { z } from 'zod';

const app = express();
const port = env.PORT;
const nodeEnv = env.NODE_ENV;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/example', (req: Request, res: Response) => {
  // @ts-expect-error - This is a test error
  function sum(a, b: number) {
    return a + b;
  }
  const querySchema = z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
  });
  const queryParse = querySchema.safeParse(req.query);
  if (!queryParse.success) {
    res.status(400).json({ error: queryParse.error.message });
    return;
  }
  const { name } = queryParse.data;
  const message = `Hello ${name}!`;
  res.send(message);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
  console.log(`Node environment: ${nodeEnv}`);
});
