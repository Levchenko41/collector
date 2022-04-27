import "bootstrap/dist/css/bootstrap.min.css";
import {NavBar} from "./components/NavBar";
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
