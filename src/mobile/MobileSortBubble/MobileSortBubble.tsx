"use client";

import  { useCallback, useState } from "react";
import { Bubble, BubbleModeEnum } from "../../common/Bubble/Bubble";
import {
  MobileCheckboxPopup,
  MobileCheckboxPopupTypeEnum,
} from "../../mobile/MobileCheckboxPopup/MobileCheckboxPopup";
import { sortBubble } from "./styles";
import { MobilePopupModeEnum } from "../../mobile/MobilePopupModeEnum";
import { DropdownItemInterface } from "../../common/DropdownItemInterface";

interface MobileSortBubbleProps {
  bubbleText: string;
  bubbleMode: BubbleModeEnum;
  popupData: DropdownItemInterface[];
  popupType: MobileCheckboxPopupTypeEnum;
  popupMode: MobilePopupModeEnum;
  onPopupChange: (val: (null | string)[]) => void;
  popupDefaultOption?: string | null;
}

export function MobileSortBubble({
  bubbleText,
  bubbleMode,
  popupData,
  popupType,
  popupMode,
  onPopupChange,
  popupDefaultOption = null,
}: MobileSortBubbleProps) {
  const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);
  const [selectedItems, setSelectedItems] = useState([popupDefaultOption]);

  const handleSelectedItemsCb = useCallback(
    (id: string) => {
      let newSelectedItems = [];
      if (selectedItems.includes(id)) {
        newSelectedItems = selectedItems.filter((oldId) => oldId != id);
      } else {
        newSelectedItems = [...selectedItems, id];
      }

      setSelectedItems(newSelectedItems);
      onPopupChange(newSelectedItems);
    },
    [selectedItems]
  );

  function handleBubbleClick() {
    setIsDropdownExpanded((val) => !val);
  }

  return (
    <div className={sortBubble}>
      <Bubble
        mode={bubbleMode}
        text={bubbleText}
        onClick={handleBubbleClick}
        layout="mobile"
        isDropdown={true}
        isDropdownExpanded={isDropdownExpanded}
      />
      <MobileCheckboxPopup
        active={isDropdownExpanded}
        title={bubbleText}
        hidePopupCb={handleBubbleClick}
        type={popupType}
        handleSelectedItemsCb={handleSelectedItemsCb}
        data={popupData}
        selectedItems={selectedItems}
        mode={popupMode}
      />
    </div>
  );
}
