import express from 'express';
import logger from './logger.js';

const app = express();
const PORT = 3000;

app.get('/test', (req, res) => {
    logger.info('Testing the logs')
    res.send({message: 'Hello'})
})

app.listen(PORT, () => {
    logger.info('App is listening on port:' + PORT);
})