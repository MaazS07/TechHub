// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/github/:username', async (req, res) => {
    try {
      const { username } = req.params;
      const response = await axios.get(`https://api.github.com/users/${username}`, {
});

      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message }); // Send the error message in the response
    }
  });
  
  app.get('/github/:username/repos', async (req, res) => {
    try {
      const { username } = req.params;
      const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
      });
  
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message }); // Send the error message in the response
    }
  });
  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
