import { useTranslation } from "react-i18next";
import Button from "../Button";
import Loading from "../Loader";
import useOrder from "@/hooks/useOrder";
import dayjs from "dayjs";
import useUpdateQueryStr from "@/hooks/custom/useUpdateQueryStr";

const ShowOrder = () => {
  const { t } = useTranslation();
  const id = useUpdateQueryStr("id");

  const { isLoading: orderLoading, data: order } = useOrder({
    id: id!,
    enabled: !!id,
  });

  if (orderLoading) return <Loading absolute />;

  return (
    <div className="bg-white p-6 rounded-lg flex-1 flex flex-col overflow-hidden mt-4">
      <div className="flex justify-between w-full flex-1 overflow-hidden mb-8">
        <div className="overflow-y-auto max-w-[45lvw] w-full pr-2 flex flex-col flex-1">
          {order?.Guests?.[0]?.Items.map((dish, idx) => (
            <div
              key={idx}
              className=" w-full flex border-b border-b-borderGray last:border-none"
            >
              <span className="text-textGray text-5xl py-2">{dish.Name}:</span>
              <ul className="w-full">
                {dish.Modifiers.map((modifier, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center text-5xl w-full font-normal py-2"
                  >
                    <span>{modifier.Name}</span>
                    <span>x{modifier.Amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-1 items-end flex-col">
          <div className="flex flex-col items-center gap-3">
            <span className="text-textGray text-3xl">
              {t("receiving_time")}: {dayjs(order?.OpenTime).format("HH:mm")}
            </span>

            <div className="bg-btnGray rounded-[20px] text-5xl px-5 py-3">
              {t("table")}: №{order?.TableNum}
            </div>
          </div>
        </div>
      </div>

      <Button progress>{t("receive")}</Button>
      {/* <Button className="bg-secondary">{t("collected")}</Button> */}
    </div>
  );
};

export default ShowOrder;
