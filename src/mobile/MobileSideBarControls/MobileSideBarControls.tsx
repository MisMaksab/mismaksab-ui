import { LanguageDropdown } from "../../common/LanguageDropdown/LanguageDropdown";
import { sideBarMobileControls } from "./styles";
// import { MobileSearchBar } from "../../mobile/MobileSearchBar/MobileSearchBar";

// // СПРОСИТЬ ПАШУ
const LANGUAGES_ARR = [
  { text: "Estonian", id: "est", path: "/" },
  { text: "Russian", id: "rus", path: "/" },
  { text: "English", id: "eng", path: "/" },
];

export function MobileSideBarControls() {
  return (
    <div className={sideBarMobileControls}>
      {/* <MobileSearchBar
        onChange={(val: string) => null}
        placeHolderText="Найти в MisMaksab"
        expandedByDefault={true}
        showMoreText={"more"}
        showLessText={"less"}
      /> */}
      <LanguageDropdown
        layout="mobile"
        selectedLanguage="est"
        data={LANGUAGES_ARR}
      />
    </div>
  );
}
