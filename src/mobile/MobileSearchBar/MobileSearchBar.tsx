"use client";

import React, { useCallback } from "react";
import cn from "classnames";
import searchSvg from "../../assets/icons/search.svg";
import {
  search,
  searchInput,
  searchSvgContainer,
  shownCN,
  sideBarOpenCN,
  searchSvgCN,
  searchControl,
  active,
  searchPanel,
  searchPanelControl,
  searchPanelInput,
  expanded,
  input,
  searchPanelInputCross,
  searchPanelResultBubbles,
  searchPanelResultProducts,
} from "./styles";
import { ShrinkButton } from "../../common/ShrinkButton/ShrinkButton";
import {
  CloseCross,
  CloseCrossTypeEnum,
} from "../../common/CloseCross/CloseCross";
import { Bubble, BubbleModeEnum } from "../../common/Bubble/Bubble";
import { BubbleBlock } from "../../common/BubbleBlock/BubbleBlock";
import { GoodCardsBlock } from "../../common/GoodCardsBlock/GoodCardsBlock";
import { MobilePopupModeEnum } from "mobile/MobilePopupModeEnum";

const SEARCH_DATA = {
  categories: [
    {
      path: "gingerbread-spice-mixture",
      name: {
        est: "Piparkoogimaitseaine",
        rus: "Приправа для пряного печенья",
        eng: "Gingerbread spice mixture",
      },
    },
    {
      path: "fresh-bread",
      name: {
        est: "Värsked leivad",
        rus: "Свежий хлеб",
        eng: "Fresh bread",
      },
    },
    {
      path: "fine-rye-bread",
      name: {
        est: "Peenleivad",
        rus: "Пеклеванный хлеб",
        eng: "Fine rye bread",
      },
    },
    {
      path: "sweet-bread-rolls",
      name: {
        est: "Magusad saiakesed",
        rus: "Сладкие булочки",
        eng: "Sweet bread rolls",
      },
    },
    {
      path: "rye-bread",
      name: {
        est: "Rukkileivad",
        rus: "Ржаной хлеб",
        eng: "Rye bread",
      },
    },
    {
      path: "dark-bread-ends",
      name: {
        est: "Tumedad koorikleivad",
        rus: "Краюшки темного хлеба",
        eng: "Dark bread ends",
      },
    },
    {
      path: "white-bread-ends",
      name: {
        est: "Heledad koorikleivad",
        rus: "Краюшки светлого хлеба",
        eng: "White bread ends",
      },
    },
    {
      path: "white-bread",
      name: {
        est: "Saiad",
        rus: "Булка",
        eng: "White bread",
      },
    },
    {
      path: "plain-white-bread",
      name: {
        est: "Tavalised saiad",
        rus: "Обычная булка",
        eng: "Plain white bread",
      },
    },
    {
      path: "white-bread/bread-for-toasts-and-sandwiches",
      name: {
        est: "Röst-ja einevõileiva leivad/saiad",
        rus: "Булка/хлеб для тостов и бутербродов",
        eng: "White bread/bread for toasts and sandwiches",
      },
    },
    {
      path: "white-bread-for-toasts",
      name: {
        est: "Heledad röstsaiad",
        rus: "Светлая булка для тостов",
        eng: "White bread for toasts",
      },
    },
    {
      path: "brown-bread-for-toasts",
      name: {
        est: "Tumedad röstleivad",
        rus: "Темный хлеб для тостов",
        eng: "Brown bread for toasts",
      },
    },
    {
      path: "mixed-flour-bread-rolls",
      name: {
        est: "Segajahust kuklid",
        rus: "Булочки из смешанной муки",
        eng: "Mixed flour bread rolls",
      },
    },
    {
      path: "other-types-of-bread-rolls",
      name: {
        est: "Muud kuklid",
        rus: "Прочие виды булочек",
        eng: "Other types of bread rolls",
      },
    },
    {
      path: "national-breads",
      name: {
        est: "Rahvuslikud leivad",
        rus: "Национальные виды хлеба",
        eng: "National breads",
      },
    },
    {
      path: "pre-baked-bread",
      name: {
        est: "Eelküpsetatud leivad",
        rus: "Предварительно запеченный хлеб",
        eng: "Pre-baked bread",
      },
    },
    {
      path: "pre-baked-bread-rolls",
      name: {
        est: "Eelküpsetatud kuklid",
        rus: "Предварительно запеченные булочки",
        eng: "Pre-baked bread rolls",
      },
    },
    {
      path: "frozen-fish-in-breadcrumbs",
      name: {
        est: "Külmutatud paneeritud kala",
        rus: "Замороженная рыба в панировке",
        eng: "Frozen fish in breadcrumbs",
      },
    },
    {
      path: "dried-bread,-rusks",
      name: {
        est: "Kuivleivad, kuivikud",
        rus: "Хлебные сухарики, сухарики",
        eng: "Dried bread, rusks",
      },
    },
    {
      path: "crispbread",
      name: {
        est: "Näkileivad",
        rus: "Хлебцы",
        eng: "Crispbread",
      },
    },
    {
      path: "dried-bread",
      name: {
        est: "Kuivikud",
        rus: "Сухарики",
        eng: "Dried bread",
      },
    },
    {
      path: "honey-gingerbreads",
      name: {
        est: "Präänikud",
        rus: "Пряники",
        eng: "Honey gingerbreads",
      },
    },
    {
      path: "long-term-storage-bread-rolls",
      name: {
        est: "Kauasäilivad saiakesed",
        rus: "Булочки длительного хранения",
        eng: "Long-term storage bread rolls",
      },
    },
    {
      path: "pastry-and-dried-bread-for-children",
      name: {
        est: "Laste küpsised, kuivikud",
        rus: "Печенье и сухарики для детей",
        eng: "Pastry and dried bread for children",
      },
    },
  ],
  products: {
    items: [
      {
        id: "s-23257",
        retailer: "Selver",
        name: "Kehakoorija Gingerbread, ORGANIC SHOP, 250ml",
        productImg:
          "https://www.selver.ee/img/800/800/resize/4/7/4743318143071.jpg",
        price: 4.49,
        oldPrice: 5.49,
        discount: 0.1821,
        productOriginalUrl:
          "https://www.selver.ee/kehakoorija-gingerbread-organic-shop-250ml",
        unitPrice: 17.96,
        unitType: "l",
        discountTo: 1704239940000,
      },
      {
        id: "s-27437",
        retailer: "Selver",
        name: "Jõulutee Gingerbread Joy 20pk, TWININGS, 40 g",
        productImg:
          "https://www.selver.ee/img/800/800/resize/7/0/70177226299.jpg",
        price: 3.49,
        oldPrice: 4.99,
        discount: 0.3006,
        productOriginalUrl:
          "https://www.selver.ee/joulutee-gingerbread-joy-20pk-twinings-40-g",
        unitPrice: 87.25,
        unitType: "kg",
        discountTo: 1704239940000,
      },
    ],
    hasNext: false,
  },
};

interface Props {
  placeHolderText: string;
  onChange: (value: string) => void;
  expandedByDefault: boolean;
  showMoreText: string;
  showLessText: string;
}

export function MobileSearchBar({
  placeHolderText,
  onChange,
  expandedByDefault,
  showLessText,
  showMoreText,
}: Props) {
  const [shown, setShown] = React.useState(false);
  const handleChangeSearchPanelVisibilityCb = useCallback(() => {
    setShown((val) => !val);
  }, []);

  return (
    <div>
      <form
        className={cn(search, sideBarOpenCN, {
          [shownCN]: shown,
        })}
      >
        <SearchTrigger
          handleChangeSearchPanelVisibilityCb={
            handleChangeSearchPanelVisibilityCb
          }
          expandedByDefault={expandedByDefault}
          shown={shown}
          placeHolderText={placeHolderText}
        />

        <SearchPanel
          onChange={onChange}
          handleChangeSearchPanelVisibilityCb={
            handleChangeSearchPanelVisibilityCb
          }
          shown={shown}
          placeHolderText={placeHolderText}
          showMoreText={showMoreText}
          showLessText={showLessText}
        />
      </form>
    </div>
  );
}

interface SearchTriggerProps {
  handleChangeSearchPanelVisibilityCb: () => void;
  expandedByDefault: boolean;
  shown: boolean;
  placeHolderText: string;
}

function SearchTrigger({
  handleChangeSearchPanelVisibilityCb,
  expandedByDefault,
  shown,
  placeHolderText,
}: SearchTriggerProps) {
  return (
    <div
      onClick={handleChangeSearchPanelVisibilityCb}
      className={cn(searchControl, {
        [expanded]: expandedByDefault,
        [shownCN]: shown,
      })}
    >
      {expandedByDefault && (
        <input
          type="text"
          placeholder={placeHolderText}
          className={searchInput}
        />
      )}
      <div className={searchSvgContainer}>
        <div
          className={searchSvgCN}
          dangerouslySetInnerHTML={{ __html: searchSvg }}
        />
      </div>
    </div>
  );
}

interface SearchPanelProps {
  onChange: (value: string) => void;
  handleChangeSearchPanelVisibilityCb: () => void;
  shown: boolean;
  placeHolderText: string;
  showMoreText: string;
  showLessText: string;
}

function SearchPanel({
  onChange,
  handleChangeSearchPanelVisibilityCb,
  shown,
  placeHolderText,
  showLessText,
  showMoreText,
}: SearchPanelProps) {
  const [value, setValue] = React.useState("");
  const [isBubblesExpanded, setIsBubblesExpanded] = React.useState(false);

  const onChangeCb = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      onChange(e.target.value);
    },
    [onChange]
  );

  const clearInputValueCb = useCallback(() => {
    setValue("");
  }, []);

  return (
    <div
      className={cn(searchPanel, {
        [active]: shown,
      })}
    >
      <div className={searchPanelControl}>
        <ShrinkButton
          rotate={false}
          onClick={handleChangeSearchPanelVisibilityCb}
        />
        <div className={searchPanelInput}>
          <input
            type="text"
            placeholder={placeHolderText}
            value={value}
            onChange={onChangeCb}
            className={input}
          />
          <div
            className={cn(searchPanelInputCross, {
              [active]: value !== "",
            })}
          >
            <CloseCross
              type={CloseCrossTypeEnum.searchCross}
              mode={MobilePopupModeEnum.searchDefault}
              onClick={clearInputValueCb}
            />
          </div>
        </div>
      </div>
      <div className={searchPanelResultBubbles}>
        {/* implement no search results */}
        {SEARCH_DATA.categories.length >= 1 && !isBubblesExpanded && (
          <Bubble
            mode={BubbleModeEnum.bubbleLightorange}
            text={SEARCH_DATA.categories[0].name.rus}
            onClick={(val) => {
              val;
            }}
            layout="mobile"
          />
        )}
        {SEARCH_DATA.categories.length > 1 && isBubblesExpanded && (
          <BubbleBlock
            noPaddingTop={true}
            data={bubbleDataAdapter(SEARCH_DATA.categories)}
            onClick={function (id: string): void {
              throw new Error("Function not implemented.");
            }}
            activeBubbleMode={BubbleModeEnum.bubbleOrange}
            defaultSelectedBubble={""}
            layout={"mobile"}
          />
        )}
        {SEARCH_DATA.categories.length > 1 && (
          <Bubble
            mode={BubbleModeEnum.bubbleLightorange}
            isDropdown={true}
            isDropdownExpanded={isBubblesExpanded}
            text={isBubblesExpanded ? showLessText : showMoreText}
            onClick={() => {
              setIsBubblesExpanded((val) => !val);
            }}
            layout="mobile"
          />
        )}
      </div>
      <div className={searchPanelResultProducts}>
        <GoodCardsBlock
          layout="mobile"
          data={goodsAdapter(SEARCH_DATA.products.items)}
        />
      </div>
    </div>
  );
}

function bubbleDataAdapter(data: any) {
  const arr: any = [];
  data.map((item: any) => {
    arr.push({
      text: item.name.rus,
      // path: item.path,
      mode: "bubbleLightorange",
      layout: "mobile",
    });
  });
  return arr;
}

function goodsAdapter(data: any) {
  const arr: any = [];
  data.map((item: any) => {
    arr.push({
      productImageURL: item.productImg,
      discount: `${Math.round(item.discount * 100)}`,
      retailerImageURL: `/img/retailers-logos/${item.retailerId}.svg`,
      price: item.price,
      oldPrice: item.oldPrice,
      productTitle: item.name,
      unitPrice: item.unitPrice,
      discountUntil: item.discountTo, //!!!
      disabled: false,
      expireDateStr: `Скидка до ${new Date(
        item.discountTo
      ).getDate()}.${new Date(item.discountTo).getMonth()}`,
      unitType: item.unitType,
    });
  });

  return arr;
}
