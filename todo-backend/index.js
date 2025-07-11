const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { task } = req.body;
  todos.push(task);
  res.status(201).json({ message: 'Task added' });
});

app.listen(5000, () => {
  console.log('Backend running on port 5000');
});
