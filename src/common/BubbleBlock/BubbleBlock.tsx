"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Bubble, BubbleModeEnum } from "../Bubble/Bubble";
import { bubbleBlock, removePaddingTop } from "./styles";
import { LayoutProp } from "../../common/LayoutProp";
import cn from "classnames";

export interface BubbleBlockItemProps extends LayoutProp {
  mode: BubbleModeEnum;
  text: string;
  path: string;
}

interface BubbleBlockProps extends LayoutProp {
  data: BubbleBlockItemProps[];
  onClick: (val: string[]) => void;
  activeBubbleMode: BubbleModeEnum;
  noPaddingTop?: boolean;
}

export function BubbleBlock({
  data,
  onClick,
  activeBubbleMode,
  noPaddingTop = false,
}: BubbleBlockProps) {
  const [selectedBubblesPaths, setSelectedBubblesPaths] = useState<string[]>(
    []
  );
  const changeActiveBubbleCb = useCallback(
    (val: string) => {
      if (selectedBubblesPaths.includes(val)) {
        setSelectedBubblesPaths(
          selectedBubblesPaths.filter((bubble) => bubble != val)
        );
      } else {
        setSelectedBubblesPaths([val, ...selectedBubblesPaths]);
      }
    },
    [selectedBubblesPaths]
  );

  useEffect(() => {
    onClick(selectedBubblesPaths);
  }, [selectedBubblesPaths]);

  return (
    <div className={cn(bubbleBlock, { [removePaddingTop]: noPaddingTop })}>
      {data.map((bubbleData) => (
        <Bubble
          key={bubbleData.path}
          mode={
            selectedBubblesPaths.includes(bubbleData.path)
              ? activeBubbleMode
              : bubbleData.mode
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
