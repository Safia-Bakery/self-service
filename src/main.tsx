import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { persistor, store } from "./store/rootConfig.ts";
import { Provider } from "react-redux";
import Loading from "./components/Loader/index.tsx";
import { PersistGate } from "redux-persist/integration/react";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loading absolute />}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
