import { useEffect } from "react";
import Header from "@/components/Header";
import BodyFrame from "@/components/BodyFrame";
import useLogin from "@/hooks/login";
import Loading from "./components/Loader";
import { useAppDispatch, useAppSelector } from "./store/rootConfig";
import { logoutHandler } from "./store/reducers/auth";
import { langSelector } from "./store/reducers/language";
import i18n from "./localization";
import useOrders from "./hooks/useOrders";

const App = () => {
  const { isLoading, error } = useLogin();
  const dispatch = useAppDispatch();
  const lang = useAppSelector(langSelector);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const { data } = useOrders({});

  console.log(data, "ortders");

  if (isLoading) return <Loading absolute />;
  if (error) dispatch(logoutHandler());

  return (
    <div className="bg-mainBg h-screen overflow-hidden flex flex-col">
      <Header />
      <BodyFrame />
    </div>
  );
};

export default App;
