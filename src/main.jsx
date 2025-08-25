import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { EachPokemonContextProvider } from "./context/EachPokemonContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <EachPokemonContextProvider>
        <App />
      </EachPokemonContextProvider>
    </StrictMode>
  </BrowserRouter>
);
