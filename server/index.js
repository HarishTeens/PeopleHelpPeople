const express = require('express')();

express.get('/', (req, res) => {
    res.send('Hello World!');
});

express.listen(3000, () => {
    console.log('Server is listening on port 3000');
})