import express from 'express';
import scoringQueue from '../queue/scoringQueue'; // Import the queue
import { addDelivery, getMatchStats } from '../controllers/scoringController';

const router = express.Router();

router.post('/delivery', async (req, res) => {
  try {
    // Add a delivery task to the queue
    await scoringQueue.add({
      taskType: 'updateDelivery',
      data: req.body,
    });

    res.status(200).json({ message: 'Delivery task added to queue' });
  } catch (err) {
    console.error('Error adding delivery task to queue:', err);
    res.status(500).json({ error: 'Failed to add delivery task to queue' });
  }
});

// GET: Fetch match stats (direct handler)
router.get('/match/:id', getMatchStats);

export default router;
