import 'dotenv/config';
import express from 'express';
import { createServer as createViteServer } from 'vite';

async function createServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  // API Routes
  app.get('/api/courts', (req, res) => {
    // This is a minimal mock. For 1 million CCU, this should be built 
    // using read replicas, caching (Redis), and horizontal pod scaling.
    res.json({
      success: true,
      courts: [
        { id: 1, name: "PadelPro Club (Центр)", available: true },
        { id: 2, name: "PadelPro (Север)", available: false }
      ]
    });
  });

  // Standard Vite setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist/client'));
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

createServer();
