/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';

const app = express();

app.get('/api/health', (req, res) => {
  res.send({ status: 'ok' });
});

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
