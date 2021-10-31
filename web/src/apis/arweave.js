import walletJSON from "../key.json";
import { interactWrite, readContract } from 'smartweave'
import Arweave from 'arweave';


const arweave = Arweave.init({
    host: "arweave.net",
    port: 443,
    protocol: "https",
    timeout: 20000,
    logging: false
});


export { walletJSON, interactWrite, readContract ,arweave};