"use client";

import { useCallback, useEffect, useState } from "react";
import { Bubble, BubbleModeType } from "../../common/Bubble/Bubble";
import {
  MobileCheckboxPopup,
  MobileCheckboxPopupType,
} from "../../mobile/MobileCheckboxPopup/MobileCheckboxPopup";
import { sortBubble } from "./styles";
import { DropdownItemInterface } from "../../common/DropdownItemInterface";
import { MobilePopupModeType } from "../MobilePopupModeType";

interface MobileSortBubbleProps {
  bubbleText: string;
  bubbleMode: BubbleModeType;
  popupData: DropdownItemInterface[];
  popupType: MobileCheckboxPopupType;
  popupMode: MobilePopupModeType;
  onPopupChange: (val: string[]) => void;
  popupDefaultOptions?: string[];
  onExpandStateChange?: (isExpanded: boolean) => void;
}

export function MobileSortBubble({
  bubbleText,
  bubbleMode,
  popupData,
  popupType,
  popupMode,
  onPopupChange,
  popupDefaultOptions = [],
  onExpandStateChange
}: MobileSortBubbleProps) {
  const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);
  const [selectedItems, setSelectedItems] =
    useState<string[]>(popupDefaultOptions);
  const handleSelectedItemsCb = useCallback(
    (id: string) => {
      let newSelectedItems: string[] = [];
      if (popupType === "single") {
        newSelectedItems = [id];
        handleBubbleClick();
      } else if (popupType === "multiple") {
        if (selectedItems.includes(id)) {
          newSelectedItems = selectedItems.filter((oldId) => oldId != id);
        } else {
          newSelectedItems = [...selectedItems, id];
        }
      }
      setSelectedItems(newSelectedItems);
      onPopupChange(newSelectedItems);
    },
    [selectedItems]
  );

  useEffect(() => {
    if (onExpandStateChange) {
      onExpandStateChange(isDropdownExpanded);
    }
  }, [isDropdownExpanded]);

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
