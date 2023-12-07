import React from "react";
import cn from "classnames";
import { YellowButton } from "../YellowButton/YellowButton";
import { LayoutProp } from "../LayoutProp";
import { ShrinkButton } from "../ShrinkButton/ShrinkButton";
import {
  blockHeader,
  blockHeaderGoBackBtn,
  justifyCenter,
  removePaddingTop,
  subTitleCN,
  thin,
  titleCN,
} from "./styles";
import { MobileCN } from "../../styles";

interface BlockHeaderProps extends LayoutProp {
  title: string;
  yellowButtonText?: string;
  moreBtnEnabled?: boolean;
  yellowButtonLink?: string;
  noPaddingTop?: boolean;
  isTitleThin?: boolean;
  subTitle?: string | null;
  shrinkBtnEnabled?: boolean;
  sortComponent?: React.ReactElement | null;
}

export function BlockHeader({
  title,
  layout,
  yellowButtonText,
  yellowButtonLink,
  moreBtnEnabled = false,
  isTitleThin = false,
  subTitle = null,
  noPaddingTop = false,
  shrinkBtnEnabled = false,
  sortComponent = null,
}: BlockHeaderProps) {
  return (
    <div
      className={cn(blockHeader, {
        [removePaddingTop]: noPaddingTop,
        [justifyCenter]: layout === "mobile" && !moreBtnEnabled,
        [MobileCN]: layout === "mobile",
      })}
    >
      <h1 className={cn(titleCN, { [thin]: isTitleThin })}>{title}</h1>

      {sortComponent}

      {subTitle && <p className={subTitleCN}>{subTitle}</p>}

      {moreBtnEnabled && (
        <YellowButton
          layout={layout}
          text={yellowButtonText}
          link={yellowButtonLink}
          isArrowRotated={true}
        />
      )}

      {shrinkBtnEnabled && (
        <a className={blockHeaderGoBackBtn}>
          <ShrinkButton onClick={() => {}} />
        </a>
      )}
    </div>
  );
}
