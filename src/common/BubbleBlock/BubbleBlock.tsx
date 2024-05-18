"use client";

import cn from "classnames";
import { useCallback, useState } from "react";
import { LayoutProp } from "../../common/LayoutProp";
import { Bubble, BubbleModeEnum } from "../Bubble/Bubble";
import { bubbleBlock, removePaddingTop } from "./styles";

export interface BubbleBlockItemProps extends LayoutProp {
  text: string;
  path: string;
}

interface BubbleBlockProps extends LayoutProp {
  mode: BubbleModeEnum;
  data: BubbleBlockItemProps[];
  onClick: (val: string[]) => void;
  activeBubbleMode: BubbleModeEnum;
  noPaddingTop?: boolean;
  initialySelected: string[];
}

export function BubbleBlock({
  mode,
  data,
  onClick,
  activeBubbleMode,
  initialySelected,
  noPaddingTop = false,
}: BubbleBlockProps) {
  const [selectedBubblesPaths, setSelectedBubblesPaths] =
    useState<string[]>(initialySelected);
  const changeActiveBubbleCb = useCallback(
    (val: string) => {
      setSelectedBubblesPaths((selectedBubblesPaths) => {
        const updatedSelectedBubbles = selectedBubblesPaths.includes(val)
          ? selectedBubblesPaths.filter((bubble) => bubble != val)
          : [val, ...selectedBubblesPaths];
        onClick(updatedSelectedBubbles);
        return updatedSelectedBubbles;
      });
    },
    [selectedBubblesPaths]
  );

  return (
    <div className={cn(bubbleBlock, { [removePaddingTop]: noPaddingTop })}>
      {data.map((bubbleData) => (
        <Bubble
          key={bubbleData.path}
          mode={
            selectedBubblesPaths.includes(bubbleData.path)
              ? activeBubbleMode
              : mode
          }
          text={bubbleData.text}
          layout={bubbleData.layout}
          onClick={() => {
            changeActiveBubbleCb(bubbleData.path);
          }}
        />
      ))}
    </div>
  );
}
