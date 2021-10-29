import ButtonAppBar from "./components/ButtonAppBar";
import NFTList from "./components/NFTList";
import useFinnie from "./hooks/useFinnie";


function App() {

  const [wallet, connectWallet] = useFinnie();

  return (
    <div className="App">
      <ButtonAppBar wallet={wallet} connectWallet={connectWallet} />
      <header className="App-header">
        <br />
      </header>
    </div>
  );
}

export default App;
