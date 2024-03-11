import { useEffect } from "react";
import Header from "@/components/Header";

import useLogin from "@/hooks/login";
import Loading from "./components/Loader";
import { useAppDispatch, useAppSelector } from "./store/rootConfig";
import { logoutHandler, tokenSelector } from "./store/reducers/auth";
import { langSelector } from "./store/reducers/language";
import i18n from "./localization";
import useOrders from "./hooks/useOrders";
import { handleItems } from "./store/reducers/cart";

import BodyFrame from "@/pages/BodyFrame";

const App = () => {
  const {
    isLoading,
    isError: loginError,
    refetch: loginRefetch,
    isFetching: logining,
  } = useLogin();
  const dispatch = useAppDispatch();
  const token = useAppSelector(tokenSelector);
  const lang = useAppSelector(langSelector);
  const { data, isError: orderError, isLoading: orderLoading } = useOrders({});

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  useEffect(() => {
    if (!!data && !!token) {
      dispatch(handleItems(data));
    }
  }, [data, token]);

  useEffect(() => {
    if (!token) loginRefetch();
  }, [token]);

  if (!!loginError || !!orderError) dispatch(logoutHandler());

  if (
    ((logining || isLoading) && !loginError) ||
    orderLoading ||
    !lang ||
    (!token && !loginError)
  )
    return <Loading absolute />;

  return (
    <div className="bg-mainBg h-screen overflow-hidden flex flex-col">
      <Header />
      <BodyFrame />
    </div>
  );
};

export default App;
