import { walletJSON, readContract, interactWrite, arweave } from './arweave.js';


const getAll = async () => {
    const response = await readContract(arweave, process.env.REACT_APP_CROWDSOURCE_CONTRACT);
    return response;
}
const get = async (id) => {
    const response = await readContract(arweave, id);
    return response;
}

const donateToken = async (id, data) => {
    const wallet = walletJSON;
    console.log(wallet);
    const response = await interactWrite(arweave, wallet, id, data);
    console.log(response);
    return response;
}

const nft = {
    getAll,
    get,
    donateToken
}

export default nft