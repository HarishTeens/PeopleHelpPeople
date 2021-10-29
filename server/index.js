const apis = require('./apis');

const express = require('express')();

express.get('/', (req, res) => {
    res.send('Hello World!');
});

express.get('/nfts',async  (req, res) => {
    const data = await apis.nft.getAll();
    res.json(data);
})

express.listen(3000, () => {
    console.log('Server is listening on port 3000');
})