import React, { useCallback, useState } from "react";
import { Bubble } from "../../common/Bubble/Bubble";
import { bubbleBlock } from "./styles";

interface DesktopBubbleBlockProps {
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
}

export function DesktopBubbleBlock({
  data,
  onClick,
  activeBubbleMode,
  defaultSelectedBubble,
}: DesktopBubbleBlockProps) {
  const [selectedBubble, setSelectedBubble] = useState<string>(
    defaultSelectedBubble
  );
  const changeActiveBubbleCb = useCallback((val: string) => {
    setSelectedBubble(val);
    onClick(val);
  }, []);

  return (
    <div className={bubbleBlock}>
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
