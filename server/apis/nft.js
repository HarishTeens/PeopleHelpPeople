const axios = require('axios');

const getAll = async () => {
    const response = await axios.get('http://localhost:8887/syi9Aqh5MRl7d22R2qTH4dYXiM0cS39omHJIw03AxF8/nft-summaries');
    return response.data;
}

const get = async (id) => {
    const response = await axios.get(`http://localhost:8887/syi9Aqh5MRl7d22R2qTH4dYXiM0cS39omHJIw03AxF8/nft?id=${id}`);
    return response.data;
}

const submitPort = async (data) => {
    const response = await axios.post(`http://localhost:8887/syi9Aqh5MRl7d22R2qTH4dYXiM0cS39omHJIw03AxF8/submit-port`, data,{
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