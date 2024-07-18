const connectTOMongo = require('./db');
const express = require('express');
const cors = require('cors');

connectTOMongo(); // Connect to MongoDB
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Available routes
app.use('/api/notes', require('./routers/notes')); // Ensure this path is correct

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
