const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./config');
const authenticateJWT = require('./middlewares/authMiddleware');

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use('/api', authenticateJWT, routes);

app.get('/api/status', (req, res) => {
    res.json({ message: 'API is running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
