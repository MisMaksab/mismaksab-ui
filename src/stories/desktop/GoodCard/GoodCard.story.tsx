import React from "react";
import selverSvg from "../../assets/selver.svg";
import rimiSvg from "../../assets/rimi.svg";
import lidlSvg from "../../assets/lidl.svg";
import prismaSvg from "../../assets/prisma.svg";
import maximaSvg from "../../assets/maxima.svg";
import { GoodCard } from '../../../common/GoodCard/GoodCard';

const RETAILER_IMG_URL: Record<string, string> = {
    'selver': selverSvg,
    'lidl': lidlSvg,
    'maxima': maximaSvg,
    'prisma': prismaSvg,
    'rimi': rimiSvg
}

export const GoodCardStory = (props: any) => {
    const { imageURL, discount, retailer, price, oldPrice, title, pricePerKilo, discountUntil, disabled, expireDateStr, unitType } = props;

    return (
        <GoodCard
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
        />
    );
}

GoodCardStory.args = {
    imageURL: 'https://www.selver.ee/img/800/800/resize/4/7/4740125000108.jpg',
    discount: 21,
    retailer: "selver",
    price: 4.29,
    oldPrice: 5.49,
    title: 'Корм собачий ORLANDO GOURVE, 3 кг',
    pricePerKilo: 1.43,
    discountUntil: 15.04,
    disabled: false,
    expireDateStr: "Скидка до 18.07",
    unitType: "kg"
}

GoodCardStory.storyName = "GoodCard";