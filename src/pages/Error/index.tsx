import { logoutHandler } from "@/store/reducers/auth";
import { useAppDispatch } from "@/store/rootConfig";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Error = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(logoutHandler());
  }, []);

  return (
    <div className="flex flex-1 items-center m-auto">
      <img src="/assets/images/safia-logo.png" alt="safia-logo" />
      <h1 className="text-4xl text-textGray ml-2">{t("error_descr")}</h1>
    </div>
  );
};

export default Error;
