const getAll = async () => {
    const response = await fetch('http://localhost:4000/nfts');
    const json = await response.json();
    return json;
}
const get = async (id) => {
    const response = await fetch('http://localhost:8887/syi9Aqh5MRl7d22R2qTH4dYXiM0cS39omHJIw03AxF8/nft?id='+id);
    const json = await response.json();
    return json;
}
const nft = {
    getAll,
    get
}

export default nft