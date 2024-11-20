// src/queue/scoringQueue.ts
import Queue from 'bull';

const scoringQueue = new Queue('scoring-tasks', {
  redis: {
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
  },
});

export default scoringQueue;
