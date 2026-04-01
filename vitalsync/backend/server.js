// serveur express principal
const express = require('express');

const app = express();
const port = process.env.port_api || 3000;

// json activé
app.use(express.json());

// santé du serveur
app.get('/health', (req, res) => {
  res.json({ statut: 'ok' });
});

app.listen(port, () => console.log(`vitalsync sur :${port}`));
module.exports = app;
