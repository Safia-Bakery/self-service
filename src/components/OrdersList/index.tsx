import cl from "classnames";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigateParams } from "@/hooks/custom/useCustomNavigate";
import useQueryString from "@/hooks/custom/useQueryString";
import useOrders from "@/hooks/useOrders";
import { cartSelector } from "@/store/reducers/cart";
import { useAppSelector } from "@/store/rootConfig";
import { OrderStatus } from "@/utils/types";

const OrdersList = () => {
  const { t } = useTranslation();
  const listref = useRef<HTMLDivElement>(null);
  const id = useQueryString("id");
  const navigateParams = useNavigateParams();

  const itemsList = useAppSelector(cartSelector);

  console.log(itemsList, "itemsList");

  const { data } = useOrders({});

  const renderOrderList = (item: string) =>
    id == item
      ? `bg-mainBrown scale-105`
      : itemsList[item]
      ? "bg-secondary"
      : "bg-primary";

  const handleNavigate = (id: string | number) => navigateParams({ id });

  return (
    <div className="flex w-full overflow-x-auto overflow-y-visible lg:py-4 py-2">
      {data
        ?.filter(
          (item) => itemsList[item.Id].orderStatus !== OrderStatus.collected
        )
        .map((order, idx) => (
          <div
            key={idx}
            onClick={() => handleNavigate(order.Id)}
            ref={listref}
            className={cl(
              "flex items-center cursor-pointer justify-center transition-all shadow-orderCard rounded-md lg:min-w-96 min-w-60 lg:h-40 h-24 mx-2",
              renderOrderList(order.Id!)
            )}
          >
            <span className="text-white lg:text-4xl text-2xl">
              {t("order")} №{order.Number}
            </span>
          </div>
        ))}
    </div>
  );
};

export default OrdersList;
