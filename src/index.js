const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/userRoutes');

app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}! http://localhost:${port}/`)
});