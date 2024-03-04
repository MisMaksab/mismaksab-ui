import React from "react";
import cn from "classnames";
import { CloseCross } from "../../common/CloseCross/CloseCross";
import {
  activeCN,
  border,
  color,
  popup,
  popupCloseCross,
  popupContent,
  popupOption,
  popupOptionCheckbox,
  popupOptionsWrapper,
  titleCN,
  popupGreen,
  popupBlue,
  popupDefault,
  popupYellow,
  customCheckbox,
  hidden,
  searchDefault,
} from "../../mobile/MobileLinkPopup/styles";
import { DropdownItemInterface } from "../../common/DropdownItemInterface";
import { MobilePopupModeEnum } from "../../mobile/MobilePopupModeEnum";

export enum MobileCheckboxPopupTypeEnum {
  single = "single",
  multiple = "multiple",
}

interface MobileCheckboxPopupProps extends CalculateCheckboxBlockProps {
  active: boolean;
  title: string;
  hidePopupCb: () => void;
}

interface CalculateCheckboxBlockProps {
  type: MobileCheckboxPopupTypeEnum;
  handleSelectedItemsCb: (id: string) => void;
  data: DropdownItemInterface[];
  selectedItems: (null | string)[];
  mode: MobilePopupModeEnum;
  hidePopupCb: () => void;
}

const stylesMap = {
  popupGreen,
  popupYellow,
  popupBlue,
  popupDefault,
  searchDefault,
};

export function MobileCheckboxPopup({
  mode = MobilePopupModeEnum.popupDefault,
  active,
  hidePopupCb,
  type,
  data,
  title,
  selectedItems,
  handleSelectedItemsCb,
}: MobileCheckboxPopupProps) {
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
          <CalculateCheckboxBlock
            hidePopupCb={hidePopupCb}
            mode={mode}
            selectedItems={selectedItems}
            data={data}
            type={type}
            handleSelectedItemsCb={handleSelectedItemsCb}
          />
        </div>
      </div>
    </div>
  );
}

function CalculateCheckboxBlock({
  mode,
  selectedItems,
  data,
  handleSelectedItemsCb,
  type,
  hidePopupCb,
}: CalculateCheckboxBlockProps) {
  function handleSingleOptionClick() {
    type === "single" && hidePopupCb();
  }

  return (
    <>
      {data.map((option) => (
        <label
          onClick={handleSingleOptionClick}
          htmlFor={option.id}
          key={option.id}
          className={cn(popupOption, {
            [activeCN]: selectedItems.includes(option.id),
          })}
        >
          {option.text}

          <input
            className={cn(
              popupOptionCheckbox,
              customCheckbox,
              border,
              stylesMap[mode],
              {
                [hidden]: type === "single",
              }
            )}
            type="checkbox"
            id={option.id}
            name={option.id}
            checked={selectedItems.includes(option.id)}
            onChange={() => handleSelectedItemsCb(option.id)}
          />
        </label>
      ))}
    </>
  );
}
