const express = require('express');
const cors = require('cors');
const db = require('./conn'); // Import the database module

const app = express();
const port = 3000;

app.use(cors());


app.get('/', (req, res) => {
  res.send('backend is running!');
});

app.get('/testConnection', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');

    res.status(200).json({
      success: true,
      message: 'Database connection successful!',
      timestamp: result.rows[0].now
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Database connection failed!',
      error: error.message
    });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
