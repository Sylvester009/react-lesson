import "./App.css";
import reactLogo from "./Images/react.logo.png";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

function App() {
  return (
    <div className="container">
      <Navbar logo={reactLogo} />
      <Main />
    </div>
  );
}

export default App;
