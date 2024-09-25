import cn from "classnames";
import { JSXElementConstructor, ReactElement } from "react";
import { MobileCN } from "../../styles";
import { LayoutProp } from "../LayoutProp";
import { ShrinkButton } from "../ShrinkButton/ShrinkButton";
import { YellowButton } from "../YellowButton/YellowButton";
import {
  blockHeader,
  blockHeaderGoBackBtn,
  displayBlock,
  justifyCenter,
  removePaddingTop,
  subTitleCN,
  thin,
  titleCN,
} from "./styles";

interface BlockHeaderProps extends LayoutProp {
  title?: string | null;
  highlitedButtonText?: string;
  moreBtnEnabled?: boolean;
  highlitedButtonLink?: string;
  noPaddingTop?: boolean;
  isTitleThin?: boolean;
  subTitle?: string | null;
  shrinkBtnEnabled?: boolean;
  sortComponent?: ReactElement<any, string | JSXElementConstructor<any>> | null;
}

export function BlockHeader({
  title = null,
  layout,
  highlitedButtonText,
  highlitedButtonLink,
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
      {title && (
        <h1 className={cn(titleCN, { [thin]: isTitleThin })}>{title}</h1>
      )}

      {title && subTitle && sortComponent}

      {subTitle && (
        <span className={cn(subTitleCN, { [displayBlock]: title })}>
          {subTitle}
        </span>
      )}

      {!title && subTitle && sortComponent}

      {moreBtnEnabled && (
        <YellowButton
          layout={layout}
          text={highlitedButtonText}
          link={highlitedButtonLink}
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
