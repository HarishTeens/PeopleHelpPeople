const getAll = async () => {
    const response = await fetch('http://localhost:4000/nfts');
    const json = await response.json();
    return json;
}
const nft = {
    getAll
}

export default nft