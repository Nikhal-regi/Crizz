import scoringQueue from './scoringQueue';
import { addDelivery } from '../controllers/scoringController';

scoringQueue.process(async (job) => {
  const { taskType, data } = job.data;

  try {
    if (taskType === 'updateDelivery') {
      // Call the delivery logic with the data
      console.log('Processing delivery task:', data);
      await addDelivery({ body: data } as any, {} as any); // Simulated Express request/response objects
    } else {
      console.error(`Unknown task type: ${taskType}`);
    }
  } catch (error) {
    console.error('Error processing task:', error);
    throw error; // Let Bull handle retries
  }
});
