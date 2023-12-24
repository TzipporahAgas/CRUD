
const express = require('express');
const app = express();


let notes = [];

app.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  notes = notes.filter((note) => note.id !== id);
  res.sendStatus(204);
});

app.put('/notes/:id', (req, res) => {
  const { id } = req.params;
  const updatednote = req.body;
  notes = notes.map((note) => {
    if (note.id === id) {
      return { ...note, ...updatednote };
    }
    return note;
  });
  res.json(updatednote);
});

app.post('/notes', (req, res) => {
  const newnote = req.body;
  notes.push(newnote);
  res.status(201).json(newnote);
});

app.get('/notes', (req, res) => {
  res.json(notes);
});


const port = 3000; 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
