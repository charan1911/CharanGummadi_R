import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Store/Store.js";
import App from "./App.jsx";

// 🚫 remove default browser spacing
document.body.style.margin = "0";
document.body.style.padding = "0";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);