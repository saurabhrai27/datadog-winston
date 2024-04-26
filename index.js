import express from 'express';
import logger from './logger';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send({message: 'Hello'})
})

app.listen(PORT, () => {
    logger.info('App is listening on port:' + PORT);
    logger.error('Error log',new Error('Testing the logger'));
})