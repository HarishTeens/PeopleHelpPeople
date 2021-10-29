import { useEffect, useState } from "react";
import apis from "./apis";
import ButtonAppBar from "./components/ButtonAppBar";
import useFinnie from "./hooks/useFinnie";
import NFTCard from "./components/NFTCard"



function App() {

  const [wallet, connectWallet] = useFinnie();
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const fetchNFTS = async () => {
      const nfts = await apis.nft.getAll();
      setNfts(nfts);
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
            <h1>No NFTs found</h1>
            :
            nfts.map(nft => (<NFTCard />))
        }
      </header>
    </div>
  );
}

export default App;
