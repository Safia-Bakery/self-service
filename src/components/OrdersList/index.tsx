import { useNavigateParams } from "@/hooks/custom/useCustomNavigate";
import useQueryString from "@/hooks/custom/useQueryString";
import useOrders from "@/hooks/useOrders";
import cl from "classnames";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const OrdersList = () => {
  const { t } = useTranslation();
  const listref = useRef<HTMLDivElement>(null);
  const id = useQueryString("id");
  const navigateParams = useNavigateParams();

  const { data } = useOrders({});

  const renderOrderList = (item: string) => {
    //bg-secondary
    if (id == item) return `bg-mainBrown scale-105`;
    else return "bg-primary";
  };

  const handleNavigate = (id: string | number) => navigateParams({ id });

  return (
    <div className="flex w-full overflow-x-auto overflow-y-visible py-[1vh]">
      {data?.map((order, idx) => (
        <div
          key={idx}
          onClick={() => handleNavigate(order.Id)}
          ref={listref}
          className={cl(
            "flex items-center cursor-pointer justify-center transition-all shadow-orderCard rounded-md min-w-96 h-[10em] mx-2",
            renderOrderList(order.Id!)
          )}
        >
          <span className="text-white text-4xl">
            {t("order")} №{order.Number}
            {t("ssss")} №{order.Guests.length}
          </span>
        </div>
      ))}
    </div>
  );
};

export default OrdersList;
