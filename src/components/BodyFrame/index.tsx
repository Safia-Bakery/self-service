import { useTranslation } from "react-i18next";
import ProgressBtn from "../ProgressBtn";

const BodyFrame = () => {
  const { t } = useTranslation();
  return (
    <div className="overflow-auto flex flex-col flex-1">
      <div className="flex w-full overflow-x-auto gap-3 py-3">
        {[...Array(15)].map((_, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center bg-primary shadow-orderCard rounded-md min-w-96 h-44"
          >
            <span className="text-white text-4xl">
              {t("order")} №{idx}
            </span>
          </div>
        ))}
      </div>
      <div className="bg-white p-6 rounded-lg flex-1 flex flex-col overflow-hidden">
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

        {/* background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
linear-gradient(90deg, #DCC38B 43.91%, rgba(180, 200, 140, 0) 52.91%);

 */}

        <ProgressBtn title={t("receive")} />
      </div>
    </div>
  );
};

export default BodyFrame;
