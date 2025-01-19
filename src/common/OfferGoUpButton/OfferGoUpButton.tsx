import { useState, useEffect } from "react";
import {
  DesktopArrowButton,
  DesktopArrowButtonTypeEnum,
} from "../../desktop/DesktopArrowButton/DesktopArrowButton";

interface OffersGoUpButtonProps {
  startingPoint: number;
}

export function OfferGoUpButton({ startingPoint }: OffersGoUpButtonProps) {
  const [active, setActive] = useState(false);
  function handleScroll() {
    setActive(window.pageYOffset > startingPoint);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleButtonClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <DesktopArrowButton
      type={DesktopArrowButtonTypeEnum.up}
      isShown={active}
      onClick={handleButtonClick}
    />
  );
}
