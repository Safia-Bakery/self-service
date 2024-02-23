import { useTranslation } from "react-i18next";
import Button from "../Button";
import cl from "classnames";
import useQueryString from "@/hooks/custom/useQueryString";
import { useNavigateParams } from "@/hooks/custom/useCustomNavigate";
import { useRef } from "react";

const BodyFrame = () => {
  const { t } = useTranslation();
  const listref = useRef<HTMLDivElement>(null);
  const id = useQueryString("id");
  const navigateParams = useNavigateParams();
  const renderOrderList = (item: number | string) => {
    //bg-secondary
    if (id == item) return `bg-mainBrown scale-105`;
    else return "bg-primary";
  };

  const handleNavigate = (id: string | number) => {
    navigateParams({ id });
  };
  return (
    <div className="overflow-auto flex flex-col flex-1">
      <div className="flex w-full overflow-x-auto overflow-y-visible py-3">
        {[...Array(15)].map((_, idx) => (
          <div
            key={idx}
            onClick={() => handleNavigate(idx)}
            ref={listref}
            className={cl(
              "flex items-center cursor-pointer justify-center transition-all shadow-orderCard rounded-md min-w-96 h-44 mx-2",
              renderOrderList(idx)
            )}
          >
            <span className="text-white text-4xl">
              {t("order")} №{idx}
            </span>
          </div>
        ))}
      </div>
      <div className="bg-white p-6 rounded-lg flex-1 flex flex-col overflow-hidden mt-4">
        <div className="flex justify-between w-full flex-1 overflow-hidden mb-8">
          <div className="overflow-y-auto max-w-[45lvw] w-full pr-2 flex flex-col flex-1">
            {[...Array(7)].map((_, idx) => (
              <div
                key={idx}
                className=" w-full flex border-b border-b-borderGray last:border-none"
              >
                <span className="text-textGray text-5xl py-2">
                  {t("dish")}:
                </span>
                <ul className="w-full">
                  {[...Array(5)].map((_, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center text-5xl w-full font-normal py-2"
                    >
                      <span>Булочка с вишней</span>
                      <span>x2</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-1 items-end flex-col">
            <div className="flex flex-col items-center gap-3">
              <span className="text-textGray text-3xl">
                {t("receiving_time")}: 19:45
              </span>

              <div className="bg-btnGray rounded-[20px] text-5xl px-5 py-3">
                {t("table")}: №3
              </div>
            </div>
          </div>
        </div>

        <Button progress>{t("receive")}</Button>
        {/* <Button className="bg-secondary">{t("collected")}</Button> */}
      </div>
    </div>
  );
};

export default BodyFrame;
