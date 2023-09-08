import React from "react";
import selverSvg from '../../../assets/retailer/selver.svg';
import rimiSvg from "../../../assets/retailer/rimi.svg";
import lidlSvg from "../../../assets/retailer/lidl.svg";
import prismaSvg from "../../../assets/retailer/prisma.svg";
import maximaSvg from "../../../assets/retailer/maxima.svg";

import rimiCardPng from '../../../assets/retailer/rimiCart.png';

import { ExpandedGoodCard } from "../../../common/ExpadedGoodCard/ExpandedGoodCard";

const RETAILER_IMG_URL: Record<string, string> = {
    'selver': selverSvg,
    'lidl': lidlSvg,
    'maxima': maximaSvg,
    'prisma': prismaSvg,
    'rimi': rimiSvg
}

const RETAILER_CARD_IMG_URL: Record<string, string> = {
    'rimi': rimiCardPng
}

export const ExpadnedGoodCardStory = (props: any) => {
    const {layout, imageURL, discount, retailer, price, oldPrice, title, pricePerKilo, discountUntil, disabled, expireDateStr, unitType, goToRetailerText, goToRetailerLink, discountConditionsText, retailerCardImage } = props;

    return (
        <>
        <ExpandedGoodCard
            productId="1"
            productImageURL={imageURL}
            discount={discount}
            price={price}
            oldPrice={oldPrice}
            productTitle={title}
            unitPrice={pricePerKilo}
            unitType={unitType}
            discountUntil={discountUntil}
            isDisabled={disabled}
            retailerImageURL={RETAILER_IMG_URL[retailer]}
            addedToList={false}
            expireDateStr={expireDateStr}
            addToList={() => null}
            layout={layout}
            goToRetailerText={goToRetailerText}
            goToRetailerLink={goToRetailerLink}
            discountConditionsText={discountConditionsText}
            retailerCardImage={RETAILER_CARD_IMG_URL[retailerCardImage]}
        />
        </>
        
    );
}

ExpadnedGoodCardStory.args = {
    imageURL: 'https://www.selver.ee/img/800/800/resize/4/7/4740125000108.jpg',
    discount: 21,
    retailer: "rimi",
    price: 4.29,
    oldPrice: 5.49,
    title: 'Корм собачий ORLANDO GOURVE, 3 кг',
    pricePerKilo: 1.43,
    discountUntil: 15.04,
    disabled: false,
    expireDateStr: "Скидка до 18.07",
    unitType: "kg",
    goToRetailerText: "Перейти на сайт продавца",
    goToRetailerLink: '/',
    discountConditionsText: 'Скидка при предъявлении карты магазина',
    retailerCardImage: 'rimi',
    layout: 'desktop'
}

ExpadnedGoodCardStory.storyName = "ExpandedGoodCard";