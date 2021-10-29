import { useEffect, useState } from "react";
import apis from "./apis";
import ButtonAppBar from "./components/ButtonAppBar";
import useFinnie from "./hooks/useFinnie";
import NFTCard from "./components/NFTCard"
import { Container } from "@mui/material";

import * as kweb from "@_koi/sdk/web.js";
const ktools = new kweb.Web();



function App() {

  const [wallet, connectWallet] = useFinnie();
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchNFTS = async () => {
      setLoading(true);
      const nfts = await apis.nft.getAll();
      setNfts(nfts);
      setLoading(false);
    };
    fetchNFTS();
  }, []);

  useEffect(() => {
    ktools.setWallet(wallet);
    ktools.getKoiBalance().then(balance => {
      setBalance(balance);
    })

  }, [wallet]);

  return (
    <div className="App">
      <ButtonAppBar wallet={wallet} connectWallet={connectWallet} balance={balance} />
      <Container>

        {
          nfts.length === 0 ?
            loading ? "loading..." : <h1>No Listings found</h1>
            :
            nfts.map(nft => (<NFTCard key={nft.id} nft={nft} />))
        }
      </Container>
    </div>
  );
}

export default App;
