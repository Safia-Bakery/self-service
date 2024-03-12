import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import BaseAPIClient from "./api/axiosConfig.ts";
import { persistor, store } from "./store/rootConfig.ts";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/helpers.ts";
import Loading from "./components/Loader/index.tsx";
import "./index.scss";

export const baseURL = "http://localhost:9042"; // todo
// export const baseURL = "http://10.0.3.73:9042"; // todo
// export const baseURL = "http://10.0.3.189:9042";

export default new BaseAPIClient(baseURL, store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<Loading absolute />}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </PersistGate>
  </Provider>
);
