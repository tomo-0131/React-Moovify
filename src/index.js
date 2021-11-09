import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import { AuthProvider } from "./providers/AuthProvider"
Modal.setAppElement("#root");

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
  rootElement
);
