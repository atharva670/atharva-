const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to serve static files (CSS, JavaScript, and Images)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Serve an image directly via a route
app.get('/image', (req, res) => {
  // Updated path to the image
  const imagePath = "C:\\Users\\vs\\portfolio-website\\public\\images\\screenshot.png";
  res.sendFile(imagePath);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
