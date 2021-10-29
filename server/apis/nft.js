const axios = require('axios');

const getAll = async () => {
    const response = await axios.get('https://mainnet.koii.live/attention/nft-summaries?period=24h');
    return response.data;
}

const get = async (id) => {
    const response = await axios.get(`https://mainnet.koii.live/attention/nft?id=${id}`);
    return response.data;
}

const nft = {
    getAll,
    get
}

module.exports = nft