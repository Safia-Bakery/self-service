import { useTranslation } from "react-i18next";

const NotSelected = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-1 items-center m-auto">
      <img src="/assets/images/safia-logo.png" alt="safia-logo" />
      <h1 className="text-4xl text-textGray ml-2">{t("select_order")}</h1>
    </div>
  );
};

export default NotSelected;
