import { cssDataCheck, cssString, unit } from "./controls/controls";

function dynamicCss(attributes) {
    const { containerBgColor, containerBorder, containerHoverBgColor, containerHoverBorder, containerBorderRadius, nameFontSize, nameFontFamily, nameColor, nameHoverColor, priceFontSize, priceColor, priceHoverColor, iconSize, filledIconsColor, emptyIconsColor, filledIconsHoverColor, emptyIconsHoverColor, uniqueId, buttonBgColor, buttonTextColor, gapBetweenProducts, buttonHoverBgColor, buttonHoverTextColor, buttonBorderRadius, buttonFontFamily, nameFontWeight } = attributes;

    let desktopCss = {
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product`]: {
            'background-color': containerBgColor,
            'border': containerBorder.color+' ' + containerBorder.style +' '+ containerBorder.width,
            'border-radius':  cssDataCheck(containerBorderRadius.device.Desktop, unit(containerBorderRadius, 'Desktop')),
            'transition': '0.4s all',
            'margin-right': cssDataCheck(gapBetweenProducts.device.Desktop, unit(gapBetweenProducts, 'Desktop')),
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
            'font-size': cssDataCheck(nameFontSize.device.Desktop, unit(nameFontSize, 'Desktop')),
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

    let tabletCss = {
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product`]: {
            'margin-right': cssDataCheck(gapBetweenProducts.device.Tablet, unit(gapBetweenProducts, 'Tablet')),
            'border-radius':  cssDataCheck(containerBorderRadius.device.Tablet, unit(containerBorderRadius, 'Tablet')),
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product .product-contents .product-name`]: {
            'font-size': cssDataCheck(nameFontSize.device.Tablet, unit(nameFontSize, 'Tablet')),
        }
    };

    let mobileCss = {
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product`]: {
            'margin-right': cssDataCheck(gapBetweenProducts.device.Mobile, unit(gapBetweenProducts, 'Mobile')),
            'border-radius':  cssDataCheck(containerBorderRadius.device.Mobile, unit(containerBorderRadius, 'Mobile')),
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product .product-contents .product-name`]: {
            'font-size': cssDataCheck(nameFontSize.device.Mobile, unit(nameFontSize, 'Mobile')),
        }
    };
    
    desktopCss = cssString(desktopCss);
    tabletCss = '' !== cssString( tabletCss ) ? `@media only screen and (max-width: 780px) {${cssString( tabletCss )}}` : '';
    mobileCss = '' !== cssString( mobileCss ) ? `@media only screen and (max-width: 360px){${cssString( mobileCss )}}` : '';

    const styling = `${desktopCss + tabletCss + mobileCss}`;
    return styling;
};
export default dynamicCss;