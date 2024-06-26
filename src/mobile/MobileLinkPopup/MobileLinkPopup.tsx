;
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
import { MobilePopupModeEnum } from "../../mobile/MobilePopupModeEnum";

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
  mode: MobilePopupModeEnum;
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
          key={option.id}
          href={option.link}
          className={cn(popupOption, {
            [activeCN]: selectedItem === option.id,
          })}
        >
          {option.text}
          {selectedItem === option.id && (
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
