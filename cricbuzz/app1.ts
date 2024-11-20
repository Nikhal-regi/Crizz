import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import scoringRoutes from './routes/scoring';
import './queue/scoringProcessor';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));

// MongoDB Connection
console.log('MongoDB URL:', process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL as string, {
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err: Error) => {
    console.error('MongoDB connection error:', err);
  });

// Or:

// Rate Limiting Middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// Redis Queue Setup
// const scoringQueue = new Queue('scoring-tasks', {
//   redis: {
//     host: process.env.REDIS_HOST || '127.0.0.1',
//     port: parseInt(process.env.REDIS_PORT || '6379', 10),
//   },
// });

// // Route to Add a Task to the Queue
// app.post('/api/queue-task', async (req: Request, res: Response) => {
//   const task = req.body;

//   try {
//     await scoringQueue.add(task);
//     res.status(200).json({ message: 'Task added to queue', task });
//   } catch (err) {
//     console.error('Error adding task to queue:', err);
//     res.status(500).json({ error: 'Failed to add task to queue' });
//   }
// });

// // Process Queue Jobs
// scoringQueue.process(async (job) => {
//   console.log('Processing job:', job.data);

//   return new Promise<void>((resolve) => {
//     setTimeout(() => {
//       console.log('Task completed:', job.data);
//       resolve();
//     }, 2000);
//   });
// });

// Register Routes
app.use('/api/scoring', scoringRoutes);

// Root Endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Cricket Scoring Admin Panel API');
});

// Start Server
const PORT = parseInt(process.env.PORT || '5000', 10);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
function handleError(error: any): any {
  throw new Error('Function not implemented.');
}

