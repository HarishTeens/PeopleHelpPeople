import { useEffect, useState } from "react";
import apis from "./apis";
import ButtonAppBar from "./components/ButtonAppBar";
import useFinnie from "./hooks/useFinnie";
import NFTCard from "./components/NFTCard"



function App() {

  const [wallet, connectWallet] = useFinnie();
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNFTS = async () => {
      setLoading(true);
      const nfts = await apis.nft.getAll();
      setNfts(nfts);
      setLoading(false);
    };
    fetchNFTS();
  }, []);

  return (
    <div className="App">
      <ButtonAppBar wallet={wallet} connectWallet={connectWallet} />
      <header className="App-header">
        <br />
        {
          nfts.length === 0 ?
            loading ? "loading..." : <h1>No Listings found</h1>
            :
            nfts.map(nft => (<NFTCard nft={nft} />))
        }
      </header>
    </div>
  );
}

export default App;
