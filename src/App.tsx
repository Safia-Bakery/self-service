import { useEffect } from "react";
import Header from "@/components/Header";
import BodyFrame from "@/components/BodyFrame";
import useLogin from "@/hooks/login";
import Loading from "./components/Loader";
import { useAppDispatch, useAppSelector } from "./store/rootConfig";
import { logoutHandler, tokenSelector } from "./store/reducers/auth";
import { langSelector } from "./store/reducers/language";
import i18n from "./localization";
import useOrders from "./hooks/useOrders";
import { cartSelector, handleItems } from "./store/reducers/cart";
import { BaseCartType, OrderStatus } from "./utils/types";

const App = () => {
  const { isLoading, error, refetch: loginRefetch } = useLogin();
  const dispatch = useAppDispatch();
  const token = useAppSelector(tokenSelector);
  const lang = useAppSelector(langSelector);
  const listItems = useAppSelector(cartSelector);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const { data, error: orderError } = useOrders({});

  useEffect(() => {
    if (data)
      dispatch(
        handleItems(
          data?.reduce((acc: BaseCartType, item) => {
            acc[item.Id] = OrderStatus.new;
            return acc;
          }, {})
        )
      );
  }, [data]);

  useEffect(() => {
    if (!token) loginRefetch();
  }, [token]);

  if (error || orderError) dispatch(logoutHandler());
  if (isLoading) return <Loading absolute />;

  return (
    <div className="bg-mainBg h-screen overflow-hidden flex flex-col">
      <Header />
      <BodyFrame />
    </div>
  );
};

export default App;
