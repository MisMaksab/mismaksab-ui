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
} from "mobile/MobileLinkPopup/styles";

const stylesMap = {
  popupGreen,
  popupYellow,
  popupBlue,
  popupDefault,
};

interface MobileCheckboxPopupProps extends CalculateCheckboxBlockProps {
  active: boolean;
  title: string;
  hidePopupCb: () => void;
}

interface CalculateCheckboxBlockProps {
  type: "single" | "multiple";
  setSelectedItemsCb: () => void;
  data: Array<{ id: string; text: string; link: string }>;
  selectedItems: any[];
  mode: "popupGreen" | "popupYellow" | "popupBlue" | "popupDefault";
}

export function MobileCheckboxPopup({
  mode,
  active,
  hidePopupCb,
  type,
  data,
  title,
  selectedItems,
  setSelectedItemsCb,
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
            mode={mode}
            selectedItems={selectedItems}
            data={data}
            type={type}
            setSelectedItemsCb={() => {}}
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
  setSelectedItemsCb,
  type,
}: CalculateCheckboxBlockProps) {
  return (
    <>
      {data.map((option: any) => (
        <label
          htmlFor={option.id}
          key={option.id}
          className={cn(popupOption, {
            // [activeCN]: selectedItems.includes(option.id) !!!!!
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
            // checked={selectedItems.includes(option.id)} !!!!!
            onChange={setSelectedItemsCb}
          />
        </label>
      ))}
    </>
  );
}
