'use client'

import { Bubble } from "../../common/Bubble/Bubble";
import { MobileCheckboxPopup } from "../../mobile/MobileCheckboxPopup/MobileCheckboxPopup";
import React, { useCallback, useState } from "react";
import { sortBubble } from "./styles";

interface MobileSortBubbleProps {
  bubbleText: string;
  bubbleMode:
    | "bubbleBlue"
    | "bubbleGreen"
    | "bubbleLightgreen"
    | "bubbleLightblue"
    | "bubbleOrange"
    | "bubbleLightorange"
    | "bubbleDisabled"
    | "bubbleMobile"
    | "bubbleMobileActive"
    | "bubbleDesktopSort";
  popupData: any[];
  popupType: "single" | "multiple";
  popupMode: "popupGreen" | "popupYellow" | "popupBlue" | "popupDefault";
  onPopupChange: (val: any) => void;
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
