import { changeLanguage, langSelector } from "@/store/reducers/language";
import { useAppDispatch, useAppSelector } from "@/store/rootConfig";
import { Language } from "@/utils/types";
import cl from "classnames";
import { useTranslation } from "react-i18next";

interface Props {
  onClose: () => void;
}

const LanguageSelect = ({ onClose }: Props) => {
  const { t } = useTranslation();
  const currLang = useAppSelector(langSelector);
  const dispatch = useAppDispatch();

  const handleLang = (lang: Language) => () => dispatch(changeLanguage(lang));

  return (
    <div className="absolute bg-white rounded-2xl max-w-xl w-full shadow-selected top-16 -left-8">
      <div className="flex justify-between items-center p-4 border-b border-b-borderGray">
        <h2>{t("select_language")}</h2>
        <button
          onClick={onClose}
          className="bg-primary h-10 w-10 rounded-full flex items-center justify-center"
        >
          <img src="/assets/icons/cross.svg" alt="cancel" />
        </button>
      </div>

      <div className="max-h-32 h-full w-full overflow-y-auto flex items-center justify-evenly flex-wrap py-4">
        {Object.values(Language).map((item) => (
          <div
            key={item}
            onClick={handleLang(item)}
            className={cl(
              "cursor-pointer flex items-center justify-center p-3 rounded-full transition-all",
              { ["border border-borderGray"]: currLang === item }
            )}
          >
            <img
              src={`/assets/icons/${item}.svg`}
              className="h-14 w-14"
              alt={item}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelect;
