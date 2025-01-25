const express = require('express');         // Import the Express framework for building web applications
const mongoose = require('mongoose');       // Import Mongoose for interacting with MongoDB
const bodyParser = require('body-parser');  // Import body-parser middleware for parsing JSON request bodies
const cors = require('cors');               // Import cors middleware to allow cross-origin requests
require('dotenv').config();


// Import route handlers for different endpoints.
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const bookingRoute = require('./routes/booking');
const contactRoute = require('./routes/contact');

const app = express();    // Create an instance of an Express application
// Define the port for the server to listen on, using an environment variable or defaulting to 5000
const port = process.env.PORT || 5000;
app.use(bodyParser.json());// Use body-parser to parse incoming JSON requests
app.use(cors());    // Enable CORS to allow requests from different origins

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://techeduinfoyt25:leLXvG4KH9DUUbr3@restaurantdb.bpfyb.mongodb.net/?retryWrites=true&w=majority&appName=restaurantDB', {
  useNewUrlParser: true, // Use the new URL parser to avoid deprecation warnings
  useUnifiedTopology: true, // Use the new topology engine to avoid deprecation warnings
})
.then(() => console.log('MongoDB connected')) // Log success message if connected
.catch(err => console.log(err)); // Log error if connection fails

// Define routes for handling different API endpoints
app.use('/signup', signupRoute); // Route for user signup
app.use('/login', loginRoute); // Route for user login
app.use('/booking', bookingRoute); // Route for handling bookings
app.use('/contact', contactRoute); // Route for handling contact submissions

app.get('/', (req, res) => {
  res.send('Welcome to the Minor Project!');
});
// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`); // Log message when server is running
});
