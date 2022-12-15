import express from 'express';
import {data} from './data.js';


const app = express();

app.get('/api/items', (req, res) => {
    res.send(data.items);  
});

const port = process.env.PORT || 5003;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

export default server;