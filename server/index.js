const apis = require('./apis');
const cors = require('cors');

const express = require('express')();
express.use(cors({ origin: '*' }));

express.get('/', (req, res) => {
    res.send('Hello World!');
});

express.get('/nfts', async (req, res) => {
    const data = await apis.nft.getAll();
    const NFTs = await Promise.all(data.map(async nft => {
        const nftData = await apis.nft.get(nft.id);
        if (nftData.tags?.includes("crowdsource"))
            return nftData;
        else
            return null;
    }))
    const filteredNFTs = NFTs.filter(nft => nft !== null);
    res.json(filteredNFTs);
})

express.listen(4000, () => {
    console.log('Server is listening on port 4000');
})