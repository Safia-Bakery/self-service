import { useTranslation } from "react-i18next";
import Button from "../Button";
import Loading from "../Loader";
import useOrder from "@/hooks/useOrder";
import dayjs from "dayjs";
import useUpdateQueryStr from "@/hooks/custom/useUpdateQueryStr";
import { Fragment, useEffect } from "react";
import { OrderStatus } from "@/utils/types";
import { useAppDispatch, useAppSelector } from "@/store/rootConfig";
import { cartSelector, handleCart } from "@/store/reducers/cart";
import NotSelected from "../NotSelected";
import { useRemoveParams } from "@/hooks/custom/useCustomNavigate";

const ShowOrder = () => {
  const { t } = useTranslation();
  const id = useUpdateQueryStr("id");
  const removeParams = useRemoveParams();
  const dispatch = useAppDispatch();
  const cart = useAppSelector(cartSelector);

  const { isLoading: orderLoading, data: order } = useOrder({
    id: id!,
    enabled: !!id,
  });

  const handleStatus = () => {
    if (cart[id!] === OrderStatus.new)
      dispatch(handleCart({ id: id!, status: OrderStatus.received }));
    else dispatch(handleCart({ id: id!, status: OrderStatus.collected }));
  };

  useEffect(() => {
    if (id && !cart[id]) removeParams(["id"]);
  }, [cart]);

  if (!id) return <NotSelected />;
  if (orderLoading && id) return <Loading absolute />;

  return (
    <div className="bg-white lg:p-6 p-3 rounded-lg flex-1 flex flex-col overflow-hidden lg:mt-4 mt-2">
      <div className="flex justify-between w-full flex-1 overflow-hidden lg:mb-8 mb-4">
        <div className="overflow-y-auto max-w-[45lvw] w-full pr-2 flex flex-col flex-1">
          {order?.Guests.map((guest) => (
            <Fragment key={guest.Id}>
              {guest.Items.map((item) => (
                <div
                  key={item.Id}
                  className="w-full flex border-b border-b-borderGray last:border-none"
                >
                  <span className="text-textGray lg:text-4xl text-xl py-2 mr-2">
                    {/* {item.Name}(x{item.Amount}): */}
                    {t("dish")}:
                  </span>
                  <ul className="w-full">
                    {/* {item.Modifiers.map((modifier) => (
                      <li
                        key={modifier.Id}
                        className="flex justify-between items-center lg:text-4xl text-xl w-full font-normal lg:py-2 py-1"
                      >
                        <span>{modifier.Name}</span>
                        <span>x{modifier.Amount}</span>
                      </li>
                    ))} */}

                    <li
                      key={item.Id}
                      className="flex justify-between items-center lg:text-4xl text-xl w-full font-normal lg:py-2 py-1"
                    >
                      <span>{item.Name}</span>
                      <span>x{item.Amount}</span>
                    </li>
                  </ul>
                </div>
              ))}
            </Fragment>
          ))}
        </div>

        <div className="flex flex-1 items-end flex-col">
          <div className="flex flex-col items-center lg:gap-3 gap-1">
            <span className="text-textGray lg:text-3xl text-lg">
              {t("receiving_time")}: {dayjs(order?.OpenTime).format("HH:mm")}
            </span>

            <div className="bg-btnGray rounded-[20px] lg:text-5xl text-xl lg:px-5 px-3  lg:py-3 py-1">
              {t("table")}: №{order?.TableNum}
            </div>
          </div>
        </div>
      </div>

      <Button
        progress={cart[id] === OrderStatus.new}
        secondary={cart[id] === OrderStatus.received}
        collected={cart[id] === OrderStatus.collected}
        onClick={handleStatus}
      >
        {cart[id] === OrderStatus.new ? t("receive") : t("collected")}
      </Button>
    </div>
  );
};

export default ShowOrder;
