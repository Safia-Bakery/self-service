import { useAppSelector } from "@/store/rootConfig";
import Container from "../Container";
import LanguageSelect from "../LanguageSelect";
import Timer from "../Timer";
import { langSelector } from "@/store/reducers/language";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [selectLang, $selectLang] = useState(false);
  const currLang = useAppSelector(langSelector);

  const toggleModal = () => $selectLang((prev) => !prev);

  return (
    <div className="bg-white">
      <Container>
        <div className="flex justify-between items-center border-b border-b-borderGray pb-2">
          <div className="flex items-center">
            <img src="/assets/images/safia-logo.png" alt="safia-logo" />
            <h3 className="text-4xl text-textGray ml-2">Safia Паркентский</h3>
          </div>

          <div className="flex gap-6 relative">
            <div
              className="flex items-center gap-2 pr-6 py-2 border-r border-r-borderGray"
              onClick={toggleModal}
            >
              <span className="capitalize">{t(currLang)}:</span>
              <div className="w-9 h-9">
                <img src={`/assets/icons/${currLang}.svg`} alt="ru" />
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
