import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import apis from "./apis";
import ButtonAppBar from "./components/ButtonAppBar";
import useFinnie from "./hooks/useFinnie";
import { Container } from "@mui/material";
import Home from "./screens/Home";
import NFT from "./screens/NFT";

import * as kweb from "@_koi/sdk/web.js";
const ktools = new kweb.Web();



function App() {

  const [wallet, connectWallet, submitRecipient, setRecipient, recipient, finnie] = useFinnie();
  const handlers = {
    submitRecipient, setRecipient, recipient, finnie
  }
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
        <Router>
          <Switch>
            <Route path="/nft/:id">
              <NFT />
            </Route>
            <Route path="/">
              <Home nfts={nfts} loading={loading} handlers={handlers} />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
