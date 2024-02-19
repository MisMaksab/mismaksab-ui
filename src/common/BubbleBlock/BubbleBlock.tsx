"use client";

import React, { useCallback, useState } from "react";
import { Bubble } from "../Bubble/Bubble";
import { bubbleBlock, removePaddingTop } from "./styles";
import { LayoutProp } from "common/LayoutProp";
import cn from "classnames";

interface BubbleBlockProps extends LayoutProp {
  data: any[];
  onClick: (id: string) => void;
  activeBubbleMode:
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
  defaultSelectedBubble: string;
  noPaddingTop?: boolean;
}

export function BubbleBlock({
  data,
  onClick,
  activeBubbleMode,
  defaultSelectedBubble,
  noPaddingTop = false,
}: BubbleBlockProps) {
  const [selectedBubble, setSelectedBubble] = useState<string>(
    defaultSelectedBubble
  );
  const changeActiveBubbleCb = useCallback((val: string) => {
    setSelectedBubble(val);
    onClick(val);
  }, []);

  return (
    <div className={cn(bubbleBlock, { [removePaddingTop]: noPaddingTop })}>
      {data.map((bubbleData) => (
        <Bubble
          key={bubbleData.id}
          mode={
            bubbleData.text === selectedBubble
              ? activeBubbleMode
              : bubbleData.mode
          }
          text={bubbleData.text}
          layout={bubbleData.layout}
          onClick={changeActiveBubbleCb}
          isDropdown={bubbleData.isDropdown}
          isDropdownExpanded={bubbleData.isDropdownExpanded}
        />
      ))}
    </div>
  );
}
