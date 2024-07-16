import { cssString } from "./controls";

function dynamicCss(attributes) {
    const { containerBgColor, containerBorder, containerHoverBgColor, containerHoverBorder, containerBorderRadius, nameFontSize, nameFontFamily, nameColor, nameHoverColor, priceFontSize, priceColor, priceHoverColor, iconSize, filledIconsColor, emptyIconsColor, filledIconsHoverColor, emptyIconsHoverColor, uniqueId, buttonBgColor, buttonTextColor, gapBetweenProducts, buttonHoverBgColor, buttonHoverTextColor, buttonBorderRadius, buttonFontFamily, nameFontWeight } = attributes;

    let desktopCss = {
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product`]: {
            'background-color': containerBgColor,
            'border': containerBorder.color+' ' + containerBorder.style +' '+ containerBorder.width,
            'border-radius':  containerBorderRadius.value+containerBorderRadius.unit,
            'transition': '0.4s all',
            'margin-right': gapBetweenProducts.value+gapBetweenProducts.unit
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product`]: {
            'background-color': containerBgColor,
            'border': containerBorder.color+' ' + containerBorder.style +' '+ containerBorder.width,
            'border-radius':  containerBorderRadius.value+containerBorderRadius.unit,
            'transition': '0.4s all',
            'margin-left': '20px'
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product:hover`]: {
            'background-color': containerHoverBgColor,
            'border': containerHoverBorder.color+' ' + containerHoverBorder.style +' '+ containerHoverBorder.width,
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product:hover .product-contents .product-name`]: {
            'color': nameHoverColor,
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product .product-contents .product-name`]: {
            'color': nameColor,
            'font-size': nameFontSize.value+nameFontSize.unit,
            'font-family': nameFontFamily,
            'font-weight': nameFontWeight
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product .product-contents .price`]: {
            'color': priceColor,
            'font-size': priceFontSize.value+priceFontSize.unit,
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product:hover .product-contents .price`]: {
            'color': priceHoverColor,
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product .product-contents .product-parade-block-rating-area .filled-icons`]: {
            'font-size': iconSize.value+iconSize.unit,
            'color': filledIconsColor
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product .product-contents .product-parade-block-rating-area .empty-icons`]: {
            'font-size': iconSize.value+iconSize.unit,
            'color': emptyIconsColor
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product:hover .product-contents .product-parade-block-rating-area .filled-icons`]: {
            'color': filledIconsHoverColor,
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product:hover .product-contents .product-parade-block-rating-area .empty-icons`]: {
            'color': emptyIconsHoverColor,
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId}  .ppb-product .add-to-cart .button`]: {
            'background-color': buttonBgColor,
            'color': buttonTextColor,
            'border-radius': buttonBorderRadius.value+buttonBorderRadius.unit,
            'font-family': buttonFontFamily
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId}  .ppb-product .add-to-cart .button:hover`]: {
            'background-color': buttonHoverBgColor,
            'color': buttonHoverTextColor
        },
        
    };
    
    desktopCss = cssString(desktopCss);
    const styling = `${desktopCss}`;
    return styling;
};
export default dynamicCss;