import { useAppDispatch, useAppSelector } from "@/store/rootConfig";
import Container from "../Container";
import LanguageSelect from "../LanguageSelect";
import Timer from "../Timer";
import { langSelector } from "@/store/reducers/language";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { clearItems } from "@/store/reducers/cart";

const Header = () => {
  const { t } = useTranslation();
  const [selectLang, $selectLang] = useState(false);
  const currLang = useAppSelector(langSelector);
  const dispatch = useAppDispatch();

  const toggleModal = () => $selectLang((prev) => !prev);

  const handleClear = () => {
    dispatch(clearItems());
    window.location.reload();
  };

  return (
    <div className="bg-white lg:h-24 h-18">
      <Container>
        <div className="flex h-full justify-between items-center border-b border-b-borderGray pb-2">
          <div className="flex items-center h-full">
            <img
              className="max-h-14 max-w-14 lg:max-h-20 lg:max-w-20 w-full h-full"
              src="/assets/images/safia-logo.png"
              alt="safia-logo"
            />
            <h3 className="text-xl text-textGray ml-2 lg:text-4xl">
              Safia Паркентский
            </h3>
          </div>

          <div className="flex lg:gap-6 gap-3 relative">
            <button onClick={handleClear}>
              <img src="/assets/icons/reload.svg" alt="clear-cache" />
            </button>
            <div
              className="flex items-center gap-2 pr-4 lg:pr-6 lg:py-2 py-0 border-r border-r-borderGray"
              onClick={toggleModal}
            >
              <span className="capitalize">{t(currLang)}:</span>
              <div className="w-9 h-9">
                <img src={`/assets/icons/${currLang}.svg`} alt="lang" />
              </div>
            </div>
            {selectLang && (
              <>
                <div className="fixed inset-0" onClick={toggleModal} />
                <LanguageSelect onClose={toggleModal} />
              </>
            )}

            <div className="flex items-center flex-col">
              <Timer />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
