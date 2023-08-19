import React from "react";
import selverSvg from '../../../assets/retailer/selver.svg';
import rimiSvg from "../../../assets/retailer/rimi.svg";
import lidlSvg from "../../../assets/retailer/lidl.svg";
import prismaSvg from "../../../assets/retailer/prisma.svg";
import maximaSvg from "../../../assets/retailer/maxima.svg";
import { GoodCard, GoodCardFooter, GoodCardHeader } from '../../../common/GoodCard/GoodCard';

const RETAILER_IMG_URL: Record<string, string> = {
    'selver': selverSvg,
    'lidl': lidlSvg,
    'maxima': maximaSvg,
    'prisma': prismaSvg,
    'rimi': rimiSvg
}

export const GoodCardStory = (props: any) => {
    const {layout, imageURL, discount, retailer, price, oldPrice, title, pricePerKilo, discountUntil, disabled, expireDateStr, unitType } = props;

    return (
        <>
        <GoodCard
            header={
                <GoodCardHeader
                    productImageURL={imageURL}
                    retailerImageURL={RETAILER_IMG_URL[retailer]}
                    discount={discount}
                    layout={layout}
                    />
                }
            footer={
                <GoodCardFooter
                    price={price}
                    oldPrice={oldPrice}
                    productTitle={title}
                    unitPrice={pricePerKilo}
                    unitType={unitType}
                    layout={layout}
                    expireDateStr={expireDateStr}
                />
            }
            
            productId="1"
            isDisabled={disabled}
            addedToList={false}
            addToList={() => null}
            layout={layout}
        />
        <br/>
        </>
        
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
    unitType: "kg",
    layout:'mobile'
}

GoodCardStory.storyName = "GoodCard";