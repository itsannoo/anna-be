const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors())
const port = 3333;
const mongoURI = 'mongodb+srv://twl_vue:240902@cluster0.2yqng7w.mongodb.net/?retryWrites=true&w=majority';
const rencanaroute = require('./router/rencanarouter')
const userroute = require('./router/userrouter')
const rencanacontroller = require('./controller/rencanacontroller')
const isAuthenticated = require('./middleware/authmiddleware')
const UserController = require('./controller/usercontroller');

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// Rest of your server code goes here


// Create a new Rencana

app.post('/rencana',isAuthenticated, rencanacontroller.createRencana);

// Get all Rencana
app.get('/rencana', isAuthenticated,rencanacontroller.getAllRencana);

// Get a specific Rencana by ID
app.get('/rencana/:id', rencanacontroller.getRencanaById);

// Update a Rencana by ID
app.put('/rencana/:id', isAuthenticated,rencanacontroller.updateRencanaById);

// Delete a Rencana by ID
app.delete('/rencana/:id', isAuthenticated,rencanacontroller.deleteRencanaById);


// Register a new user
app.post('/register', UserController.registerUser);

// Login user
app.post('/login', UserController.login);