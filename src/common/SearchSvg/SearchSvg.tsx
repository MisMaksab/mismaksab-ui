import cn from "classnames";
import searchSvg from "../../assets/icons/search.svg";
import { header, searchSvgCN, searchSvgContainer } from "./styles";

interface SearchSvgProps {
  onClick?: () => void;
  isHeader?: boolean;
}

export function SearchSvg({ onClick, isHeader = false }: SearchSvgProps) {
  return (
    <div
      className={cn(searchSvgContainer, { [header]: isHeader })}
      onClick={onClick}
    >
      <div
        className={searchSvgCN}
        dangerouslySetInnerHTML={{ __html: searchSvg }}
      />
    </div>
  );
}
