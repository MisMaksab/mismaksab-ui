import cn from "classnames";
import mark from "../../assets/icons/languageDropdownIcon.svg";
import { CloseCross } from "../../common/CloseCross/CloseCross";
import {
  popup,
  popupContent,
  popupCloseCross,
  color,
  popupOptionsWrapper,
  popupOption,
  activeCN,
  titleCN,
  popupGreen,
  popupBlue,
  popupDefault,
  popupYellow,
  markCN,
  searchDefault,
} from "../../mobile/MobileLinkPopup/styles";
import { DropdownItemInterface } from "../../common/DropdownItemInterface";
import { MobilePopupModeType } from "../MobilePopupModeType";

const stylesMap = {
  popupGreen,
  popupYellow,
  popupBlue,
  popupDefault,
  searchDefault,
};

interface CalculateRadioBlockProps {
  selectedItem: number | string;
  data: DropdownItemInterface[];
}

interface MobileLinkPopupProps extends CalculateRadioBlockProps {
  mode: MobilePopupModeType;
  active: boolean;
  title: string;
  hidePopupCb: () => void;
}

export function MobileLinkPopup({
  mode,
  active,
  hidePopupCb,
  data,
  title,
  selectedItem,
}: MobileLinkPopupProps) {
  return (
    <div
      className={cn(popup, {
        [activeCN]: active,
      })}
    >
      <div className={popupContent}>
        <div className={popupCloseCross}>
          <CloseCross onClick={hidePopupCb} mode={mode} />
        </div>

        <h1 className={cn(titleCN, stylesMap[mode], color)}>{title}</h1>
        <div className={popupOptionsWrapper}>
          <CalculateRadioBlock selectedItem={selectedItem} data={data} />
        </div>
      </div>
    </div>
  );
}

function CalculateRadioBlock({ selectedItem, data }: CalculateRadioBlockProps) {
  return (
    <>
      {data.map((option) => (
        <a
          key={option.text}
          href={option.link}
          className={cn(popupOption, {
            [activeCN]: selectedItem === option.path,
          })}
        >
          {option.text}
          {selectedItem === option.path && (
            <div
              className={markCN}
              dangerouslySetInnerHTML={{ __html: mark }}
            />
          )}
        </a>
      ))}
    </>
  );
}
