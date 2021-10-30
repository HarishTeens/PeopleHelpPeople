const axios = require('axios');

const getAll = async () => {
    const response = await axios.get('https://mainnet.koii.live/attention/nft-summaries?period=1w');
    return response.data;
}

const get = async (id) => {
    const response = await axios.get(`https://mainnet.koii.live/attention/nft?id=${id}`);
    return response.data;
}

const submitPort = async (data) => {
    const response = await axios.post(`https://mainnet.koii.live/attention/submit-port`, data,{
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
}

const nft = {
    getAll,
    get,
    submitPort
}

module.exports = nft