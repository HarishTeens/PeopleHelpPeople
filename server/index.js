const cors = require('cors');
const express = require('express')();
const bodyParser = require('body-parser');
const redis = require("redis");
const { promisify } = require("util");

const redisClient = redis.createClient({
    host: '127.0.0.1',
    port: 6379,
});

const getAsync = promisify(redisClient.get).bind(redisClient);
const setAsync = promisify(redisClient.set).bind(redisClient);


redisClient.on('connect', function () {
    console.log('Connected!');
});

redisClient.on("error", function (error) {
    console.error(error);
});

express.use(cors({ origin: '*' }));
express.use(bodyParser.json());

const apis = require('./apis');

express.get('/', (req, res) => {
    res.send('Hello World!');
});

express.get('/nfts', async (req, res) => {
    const hit = await getAsync("nfts");
    if (hit !== null) {
        res.send(hit);
        return;
    }

    const data = await apis.nft.getAll();
    const NFTs = await Promise.all(data.map(async nft => {
        try {
            const nftData = await apis.nft.get(nft.id);
            if (nftData.tags?.includes("lightning"))
                return nftData;
            else
                return null;

        } catch (error) {
            console.error(nft);
            return null;
        }
    }))
    const filteredNFTs = NFTs.filter(nft => nft !== null);
    setAsync("nfts", JSON.stringify(filteredNFTs));
    res.json(filteredNFTs);
})


// express.get('/submit-port', async (req, res) => {
//     const body = req.query.payload;
//     console.log('62', body);
//     try {
//         const data = await apis.nft.submitPort(body);
//         res.json(data);
//     } catch (error) {
//         console.log(error.message);
//         res.send(error.message);
//     }

// })

express.listen(4000, () => {
    console.log('Server is listening on port 4000');
})