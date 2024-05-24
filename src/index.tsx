"use client";

// Css variables
// export * as variables from "./scss/variables.scss";

//Common
export { AllGoodsSlides } from "./common/AllGoodsSlides/AllGoodsSlides";
export { AllRetailersSlides } from "./common/AllRetailersSlides/AllRetailersSlides";
export { Banner } from "./common/Banner/Banner";
export { Bubble } from "./common/Bubble/Bubble";
export { Button } from "./common/Button/Button";
export { CloseCross } from "./common/CloseCross/CloseCross";
export {
  ExpandedGoodCard,
  ExpandedGoodCardFooter,
  ExpandedGoodCardHeader,
} from "./common/ExpadedGoodCard/ExpandedGoodCard";
export {
  GoodCard,
  GoodCardFooter,
  GoodCardHeader,
} from "./common/GoodCard/GoodCard";
export { GoodCardDiscount } from "./common/GoodCardDiscount/GoodCardDiscount";
export { LanguageDropdown } from "./common/LanguageDropdown/LanguageDropdown";
export { RetailerCard } from "./common/RetailerCard/RetailerCard";
export { SearchBar } from "./common/SearchBar/SearchBar";
export { ServiceBlock } from "./common/ServiceBlock/ServiceBlock";
export { ShrinkButton } from "./common/ShrinkButton/ShrinkButton";
export { SideBar } from "./common/SideBar/SideBar";
export { SideBarBox } from "./common/SideBarBox/SideBarBox";
export { SideBarBoxItem } from "./common/SideBarBoxItem/SideBarBoxItem";
export { SideBarHeader } from "./common/SideBarHeader/SideBarHeader";
export { RetailersCardsBlock } from "./common/RetailersCardsBlock/RetailersCardsBlock";
export { GoodCardsBlock } from "./common/GoodCardsBlock/GoodCardsBlock";
export { BlockHeader } from "./common/BlockHeader/BlockHeader";
export { SearchSvg } from "./common/SearchSvg/SearchSvg";
export { YellowButton } from "./common/YellowButton/YellowButton";
export { ErrorPage } from "./common/ErrorPage/ErrorPage";
export { BubbleBlock } from "./common/BubbleBlock/BubbleBlock";
export { Loader } from "./common/Loader/Loader";

// Desktop
export { DesktopArrowButton } from "./desktop/DesktopArrowButton/DesktopArrowButton";
export { DesktopFooter } from "./desktop/DesktopFooter/DesktopFooter";
export { DesktopFooterInfo } from "./desktop/DesktopFooterInfo/DesktopFooterInfo";
export { DesktopFooterLinks } from "./desktop/DesktopFooterLinks/DesktopFooterLinks";
export { DesktopGoodsSlider } from "./desktop/DesktopGoodsSlider/DesktopGoodsSlider";
export { DesktopHeader } from "./desktop/DesktopHeader/DesktopHeader";
export { DesktopHeaderLogo } from "./desktop/DesktopHeaderLogo/DesktopHeaderLogo";
export { DesktopRetailersSlider } from "./desktop/DesktopRetailersSlider/DesktopRetailersSlider";
export { DesktopSideBarWrapper } from "./desktop/DesktopSideBarWrapper/DesktopSideBarWrapper";
export { DesktopSlider } from "./desktop/DesktopSlider/DesktopSlider";
export { DesktopLanguageDropdownBox } from "./desktop/DesktopLangurageDropdownBox/DesktopLanguageDropdownBox";
export { DesktopSortDropdown } from "./desktop/DesktopSortDropdown/DesktopSortDropdown";
export { DesktopPagePath } from "./desktop/DesktopPagePath/DesktopPagePath";
export { DesktopPagination } from "./desktop/DesktopPagination/DesktopPagination";
// Mobile
export { MobileCheckboxPopup } from "./mobile/MobileCheckboxPopup/MobileCheckboxPopup";
export { MobileGoodsSlider } from "./mobile/MobileGoodsSlider/MobileGoodsSlider";
export { MobileHeader } from "./mobile/MobileHeader/MobileHeader";
export { MobileHeaderBurger } from "./mobile/MobileHeaderBurger/MobileHeaderBurger";
export { MobileHeaderLogo } from "./mobile/MobileHeaderLogo/MobileHeaderLogo";
export { MobileLinkPopup } from "./mobile/MobileLinkPopup/MobileLinkPopup";
export { MobileRetailersSlider } from "./mobile/MobileRetailersSlider/MobileRetailersSlider";
export { MobileSideBarControls } from "./mobile/MobileSideBarControls/MobileSideBarControls";
export { MobileSlider } from "./mobile/MobileSlider/MobileSlider";
export { MobileSearchBar } from "./mobile/MobileSearchBar/MobileSearchBar";
export { MobileSortBubble } from "./mobile/MobileSortBubble/MobileSortBubble";

// common interface
export { BubbleModeEnum } from "./common/Bubble/Bubble";
export type { BubbleProps } from "./common/Bubble/Bubble";
export type { BubbleBlockItemProps } from "./common/BubbleBlock/BubbleBlock";
export { CloseCrossTypeEnum } from "./common/CloseCross/CloseCross";
export type {
  SideBarItemDataProps,
  SideBarDropdownItemDataProps,
} from "./common/SideBarBoxItem/SideBarBoxItem";
export type { RetailerCardProps } from "./common/RetailerCard/RetailerCard";
export type { GoodCardDataProps } from "./common/GoodCard/GoodCard"; //!!!
export type { ProductProps } from "./common/ExpadedGoodCard/ExpandedGoodCard";
// desktop interface
export { DesktopArrowButtonTypeEnum } from "./desktop/DesktopArrowButton/DesktopArrowButton";
export type { DesktopFooterLinkProps } from "./desktop/DesktopFooterLinks/DesktopFooterLinks";
export type { DesktopPagePathItemProps } from "./desktop/DesktopPagePath/DesktopPagePath";
// mobile interface
export { MobileCheckboxPopupTypeEnum } from "./mobile/MobileCheckboxPopup/MobileCheckboxPopup";

export type { LayoutProp } from "./common/LayoutProp";
