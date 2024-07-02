import { cssString } from "./controls";

function dynamicCss(attributes) {
    const { containerBgColor, containerBorder, containerHoverBgColor, containerHoverBorder, containerBorderRadius, nameFontSize, nameFontFamily, nameColor, nameHoverColor, priceFontSize, priceColor, priceHoverColor, iconSize, filledIconsColor, emptyIconsColor, filledIconsHoverColor, emptyIconsHoverColor, uniqueId } = attributes;

    let desktopCss = {
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product`]: {
            'background-color': containerBgColor,
            'border': containerBorder.color+' ' + containerBorder.style +' '+ containerBorder.width,
            'border-radius':  containerBorderRadius+'px',
            'transition': '0.4s all'
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
            'font-size': nameFontSize+'px',
            'font-family': nameFontFamily
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product .product-contents .price`]: {
            'color': priceColor,
            'font-size': priceFontSize+'px'
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product:hover .product-contents .price`]: {
            'color': priceHoverColor,
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product .product-contents .product-parade-block-rating-area .filled-icons`]: {
            'font-size': iconSize+'px',
            'color': filledIconsColor
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product .product-contents .product-parade-block-rating-area .empty-icons`]: {
            'font-size': iconSize+'px',
            'color': emptyIconsColor
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product:hover .product-contents .product-parade-block-rating-area .filled-icons`]: {
            'color': filledIconsHoverColor,
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product:hover .product-contents .product-parade-block-rating-area .empty-icons`]: {
            'color': emptyIconsHoverColor,
        },
        
    };
    

    desktopCss = cssString(desktopCss);
    const styling = `${desktopCss}`;
    return styling;
};
export default dynamicCss;