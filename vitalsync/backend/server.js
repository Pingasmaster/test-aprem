// serveur express principal
const express = require('express');

const app = express();
const port = process.env.port_api || 3000;

// json activé
app.use(express.json());

// santé — version avec nom du service
app.get('/health', (req, res) => {
  res.json({ statut: 'ok', service: 'activites' });
});

// données d'exemple
const activites = [
  { id: 1, nom: 'marche', duree_min: 30 },
  { id: 2, nom: 'vélo', duree_min: 45 },
  { id: 3, nom: 'natation', duree_min: 60 },
];

// liste des activités
app.get('/api/activities', (req, res) => {
  res.json({ activites });
});

app.listen(port, () => console.log(`vitalsync sur :${port}`));
module.exports = app;
