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
import Listing from "./screens/Listing";

import * as kweb from "@_koi/sdk/web.js";
const ktools = new kweb.Web();

function App() {

  const [wallet, connectWallet, submitRecipient, setRecipient, recipient, finnie] = useFinnie();
  const handlers = {
    submitRecipient, setRecipient, recipient, finnie, wallet
  }
  const [petitions, setPetitions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchPetitions = async () => {
      setLoading(true);
      const data = await apis.petition.getAll();
      console.log(data);
      const hydratedPetitions = await Promise.all(Object.keys(data.petitions).map(async pid => {
        const petitionData = await apis.petition.get(pid);
        return {...petitionData, id: pid};
      }))
      setPetitions(hydratedPetitions);
      setLoading(false);
    };
    fetchPetitions();
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
            <Route path="/listing/:id" >
              <Listing handlers={handlers} />
            </Route>
            <Route path="/">
              <Home listings={petitions} loading={loading} handlers={handlers} />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
