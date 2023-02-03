import logo from "./logo.svg";
import "./App.css";
import Multiselector from "./components/Multiselector";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <h1 className="text">REACT MULTI SELECTOR !!!</h1>
      <Multiselector></Multiselector>
      <Footer></Footer>
    </div>
  );
}

export default App;
