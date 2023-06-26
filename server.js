const express = require('express');
const weatherRouter = require('./routes/weatherRoutes');
const curfewRouter = require('./routes/curfewRoutes');

const app = express();

const server = app.listen(5000, () => {
    console.log('Server started...');
});

app.use('/data/weather', weatherRouter);
app.use('/data/curfew', curfewRouter);
// app.use('/data/distance', tweetRouter);

module.exports = app;
