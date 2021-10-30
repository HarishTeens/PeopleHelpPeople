const axios = require('axios');

const getAll = async () => {
    const response = await axios.get('http://localhost:8887/IzaZWGZDiR3UCABdMaDOzaeEnXBgJDVM_7egOs1GvY8/nft-summaries');
    return response.data;
}

const get = async (id) => {
    const response = await axios.get(`http://localhost:8887/IzaZWGZDiR3UCABdMaDOzaeEnXBgJDVM_7egOs1GvY8/nft?id=${id}`);
    return response.data;
}

const submitPort = async (data) => {
    const response = await axios.post(`http://localhost:8887/IzaZWGZDiR3UCABdMaDOzaeEnXBgJDVM_7egOs1GvY8/submit-port`, data, {
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