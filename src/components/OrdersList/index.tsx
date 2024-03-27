import cl from "classnames";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigateParams } from "@/hooks/custom/useCustomNavigate";
import useQueryString from "@/hooks/custom/useQueryString";
import { cartSelector } from "@/store/reducers/cart";
import { useAppSelector } from "@/store/rootConfig";
import { OrderStatus } from "@/utils/types";
import MakeSound from "../MakeSound";
import EmptyList from "../EmptyList";

const OrdersList = () => {
  const { t } = useTranslation();
  const listref = useRef<HTMLDivElement>(null);
  const id = useQueryString("id");
  const navigateParams = useNavigateParams();

  const itemsList = useAppSelector(cartSelector);

  const activeOrders = Object.entries(itemsList)?.filter(
    (item) => item[1]?.orderStatus !== OrderStatus.collected
  );

  const renderOrderList = (item: string) =>
    id == item
      ? `bg-mainBrown scale-105`
      : itemsList[item].orderStatus === OrderStatus.received
      ? "bg-secondary"
      : "bg-primary";

  const handleNavigate = (id: string | number) => navigateParams({ id });

  return (
    <div className="flex w-full overflow-x-auto overflow-y-visible lg:py-4 py-2">
      {activeOrders.map((order, idx) => (
        <div
          key={idx}
          onClick={() => handleNavigate(order[0])}
          ref={listref}
          className={cl(
            "flex items-center cursor-pointer justify-center transition-all shadow-orderCard rounded-md lg:min-w-96 min-w-60 lg:h-40 h-24 mx-2",
            renderOrderList(order[0]!)
          )}
        >
          <span className="text-white lg:text-4xl text-2xl">
            {t("order")} №{order[1].Number}
          </span>
        </div>
      ))}

      {!activeOrders.length && <EmptyList />}

      <MakeSound />
    </div>
  );
};

export default OrdersList;
