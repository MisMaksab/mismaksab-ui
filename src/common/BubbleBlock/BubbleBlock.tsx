"use client";

import cn from "classnames";
import { useCallback, useState } from "react";
import { LayoutProp } from "../../common/LayoutProp";
import { Bubble, BubbleModeType } from "../Bubble/Bubble";
import { bubbleBlock, removePaddingTop } from "./styles";

export interface BubbleBlockItemProps extends LayoutProp {
  text: string;
  path: string;
}

interface BubbleBlockProps extends LayoutProp {
  mode: BubbleModeType;
  data: BubbleBlockItemProps[];
  onClick: (val: string[]) => void;
  activeBubbleMode: BubbleModeType;
  noPaddingTop?: boolean;
  initialySelected: string[];
  t?: (key: string) => string;
}

export function BubbleBlock({
  mode,
  data,
  onClick,
  activeBubbleMode,
  initialySelected,
  t,
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
          text={t ? t(bubbleData.text) : (bubbleData.text)}
          layout={bubbleData.layout}
          onClick={() => {
            changeActiveBubbleCb(bubbleData.path);
          }}
        />
      ))}
    </div>
  );
}
