const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const posts = require('./routes/api/posts');
const user = require('./routes/api/user');

const app = express();

connectDB();

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

app.get('/', (req, res) => res.send('Hello world!'));
app.use('/api/posts', posts);
app.use('/api/user', user);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));