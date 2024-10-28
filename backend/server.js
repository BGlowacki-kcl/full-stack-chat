import express from 'express';
import connectPC from './config/pc.js';

const app = express();

app.get("/", (req, res) => {
    res.send("Server is ready");
})

app.listen(5000, () => {
    console.log('listening on port http://localhost:5000');
    connectPC();
    console.log('connected to PineCone!');
})