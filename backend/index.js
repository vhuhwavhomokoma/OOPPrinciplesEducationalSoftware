const express = require('express');
const cors = require('cors');
const db = require('./conn'); // Import the database module


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('backend is running!');
});

app.get('/testConnection', async (req, res) => {
  try {
    //simply returns the time the query was executed
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

app.post('/login', async (req,res) =>{

  console.log('login...');

  const { email, password } = req.body;

  if (!email || !password) {
    console.log('email and/or password not provided');
    return res.status(400).json({
      success: false,
      message: 'Please provide both email and password.',
    });
  }

  try{

    const result = await db.query('SELECT * FROM person WHERE email = $1 ',[email]);

    if (result.rows.length === 0) {
      console.log('user not found!');
      return res.status(404).json({
        success: false,
        message: 'User not found.',
      });
    }

    const foundUser = result.rows[0];

    if (foundUser.password !== password) {
      console.log('incorrect password!');
      return res.status(401).json({
        success: false,
        message: 'Incorrect password.',
      });
    }

    // If email and password match
    res.status(200).json({
      success: true,
      message: 'Login successful!',
      data: {
        id: foundUser.id,
        email: foundUser.email,
        fname: foundUser.fname,
        lname: foundUser.lname,
        age: foundUser.age,
        total_points: foundUser.total_points,
        class_object_uml_points: foundUser.class_object_uml_points,
        polymorphism_points: foundUser.polymorphism_points,
        encapsulation_points: foundUser.encapsulation_points,
        inheritence_points: foundUser.inheritence_points,
        relationship_points: foundUser.relationship_points,
        abstraction_points: foundUser.abstraction_points
      }
    });

    console.log('login successful!');

  } catch(error){
    res.status(500).json({
      success: false,
      message: 'login failed',
      error: error.message
    });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
