const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('ok');
});

app.listen(3030, () => {
    console.log(`server is listening on http://localhost:3030`);
});