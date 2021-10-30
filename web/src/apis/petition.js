import { readContract } from 'smartweave'
import Arweave from 'arweave';

const arweave = Arweave.init({
    host: "arweave.net",
    port: 443,
    protocol: "https",
    timeout: 20000,
    logging: false
});

const getAll = async () => {
    const response = await readContract(arweave, process.env.REACT_APP_PETITION_CONTRACT);
    return response;
}
const get = async (id) => {
    const response = await readContract(arweave, id);
    return response;
}

const submitPort = async (data) => {
    const response = await fetch('http://localhost:4000/submit-port', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const json = await response.json();
    return json;
}

const getRealtimeAttention = async (id) => {
    const response = await fetch('http://localhost:8887/IzaZWGZDiR3UCABdMaDOzaeEnXBgJDVM_7egOs1GvY8/realtime-attention?id=' + id);
    const json = await response.json();
    return json.count;
}
const nft = {
    getAll,
    get,
    submitPort,
    getRealtimeAttention
}

export default nft