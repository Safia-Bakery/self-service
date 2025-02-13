import { useTranslation } from "react-i18next";
import Button from "../Button";
import useUpdateQueryStr from "@/hooks/custom/useUpdateQueryStr";
import { Fragment, useEffect } from "react";
import { OrderStatus } from "@/utils/types";
import { useAppDispatch, useAppSelector } from "@/store/rootConfig";
import { cartSelector, handleCart } from "@/store/reducers/cart";
import NotSelected from "../NotSelected";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";

const ShowOrder = () => {
  const { t } = useTranslation();
  const id = useUpdateQueryStr("id");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cart = useAppSelector(cartSelector);

  const closeModal = () => navigate("/", { replace: true });

  const handleStatus = () => {
    if (cart[id!].orderStatus === OrderStatus.new)
      dispatch(handleCart({ id: id!, status: OrderStatus.received }));
    else {
      closeModal();
      dispatch(handleCart({ id: id!, status: OrderStatus.collected }));
    }
  };

  useEffect(() => {
    if (id && !cart?.[id]) closeModal();
  }, [cart, id]);

  if (!id) return <NotSelected />;

  return (
    <Modal
      isOpen={!!id}
      onClose={closeModal}
      className="min-w-[80vw] h-[80svh]"
    >
      <button onClick={closeModal} className="absolute w-5 h-5 -top-2 right-2">
        <span className="text-2xl" aria-hidden="true">
          &times;
        </span>
      </button>
      <div className="bg-white lg:p-6 p-3 rounded-lg flex-1 flex h-full flex-col overflow-hidden lg:mt-4 mt-2">
        <div className="flex justify-between w-full flex-1 overflow-hidden lg:mb-8 mb-4">
          <div className="overflow-y-auto max-w-[45lvw] h-full w-full pr-2 flex flex-col flex-1">
            {cart[id]?.Items.map((guest) => (
              <Fragment key={guest.Id}>
                <div
                  key={guest.Id}
                  className="w-full flex border-b border-b-borderGray last:border-none"
                >
                  <span className="text-textGray lg:text-4xl text-xl py-2 mr-2">
                    {t("dish")}:
                  </span>
                  <ul className="w-full items-center flex ">
                    <li
                      key={guest.Id}
                      className="flex justify-between items-center lg:text-4xl text-xl w-full font-normal lg:py-2 py-1"
                    >
                      <span>{guest.ProductName}</span>
                      <span>x{guest.Amount}</span>
                    </li>
                  </ul>
                </div>
              </Fragment>
            ))}
          </div>

          <div className="flex flex-1 items-end flex-col">
            <div className="flex flex-col items-center lg:gap-3 gap-1">
              <span className="text-textGray lg:text-3xl text-lg">
                {/* {t("receiving_time")}: {dayjs(cart[id]?.PrintTime).format("HH:mm")} todo */}
              </span>

              <div className="bg-btnGray rounded-[20px] lg:text-5xl text-xl lg:px-5 px-3  lg:py-3 py-1">
                {t("table")}: №{cart[id]?.TableNum}
              </div>
            </div>
          </div>
        </div>

        <Button
          progress={cart[id]?.orderStatus === OrderStatus.new}
          secondary={cart[id]?.orderStatus === OrderStatus.received}
          collected={cart[id]?.orderStatus === OrderStatus.collected}
          onClick={handleStatus}
        >
          {cart[id]?.orderStatus === OrderStatus.new
            ? t("receive")
            : t("collected")}
        </Button>
      </div>
    </Modal>
  );
};

export default ShowOrder;
