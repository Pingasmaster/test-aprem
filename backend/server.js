// serveur express principal
const express = require('express');

const app = express();
const port = process.env.port_api || 3000;

app.use(express.json());

// santé enrichie, version + horodatage
app.get('/health', (req, res) => {
  res.json({ statut: 'ok', version: '1.0.0', horodatage: new Date().toISOString() });
});

app.listen(port, () => console.log(`vitalsync sur :${port}`));
module.exports = app;
