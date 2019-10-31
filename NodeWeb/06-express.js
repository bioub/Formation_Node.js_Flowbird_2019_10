const express = require('express');

const contacts = [
  {
    firstName: 'Jean',
    id: 123,
  },
  {
    lastName: 'Pierre',
    id: 456,
  },
];

// GET /api/contacts -> list en JSON
// GET /api/contacts/:id -> detail en JSON
// POST /api/contacts -> ajouter au tableau et retourne l'objet créé en JSON

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Home</h2>');
});

app.get('/hello/:name', (req, res) => {
  res.json({ msg: 'Hello ' + req.params.name });
});

app.post('/inscription', express.json(), express.urlencoded(), (req, res) => {
  res.json({msg: 'Bonjour ' + req.body.prenom});
});

app.get('/redirect', (req, res) => {
  res.redirect('/');
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});
