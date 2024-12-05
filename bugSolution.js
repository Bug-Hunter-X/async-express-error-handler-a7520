const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        res.send('Hello World!');
      } else {
        //Simulate a unexpected error
        throw new Error('Something went wrong!');
      }
    } catch (error) {
      console.error('Caught error:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 1000);
});

process.on('uncaughtException', (err) => {
  console.error('An uncaught exception occurred:', err);
  // Perform graceful shutdown or other necessary actions
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});