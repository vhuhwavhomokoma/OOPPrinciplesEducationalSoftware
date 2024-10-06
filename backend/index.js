const express = require('express');
const cors = require('cors');

const authRoute = require('./routes/auth')

const app = express();
const port = 3000;

app.use(cors());
app.use('/auth',authRoute);


app.get('/', (req, res) => {
  res.send('backend is running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
