const getAll = async () => {
    const response = await fetch('http://localhost:4000/nfts');
    const json = await response.json();
    return json;
}
const get = async (id) => {
    const response = await fetch('http://localhost:8887/syi9Aqh5MRl7d22R2qTH4dYXiM0cS39omHJIw03AxF8/nft?id=' + id);
    const json = await response.json();
    return json;
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
    const response = await fetch('http://localhost:8887/syi9Aqh5MRl7d22R2qTH4dYXiM0cS39omHJIw03AxF8/realtime-attention?id=' + id);
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