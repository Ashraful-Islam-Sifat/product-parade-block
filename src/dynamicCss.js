import { cssDataCheck, cssString, unit } from "./controls/controls";

function dynamicCss(attributes) {
    const { containerBgColor, containerBorder, containerHoverBgColor, containerHoverBorder, containerBorderRadius, nameFontSize, nameFontFamily, nameColor, nameHoverColor, priceFontSize, priceColor, priceHoverColor, iconSize, filledIconsColor, emptyIconsColor, filledIconsHoverColor, emptyIconsHoverColor, uniqueId, buttonBgColor, buttonTextColor, gapBetweenProducts, buttonHoverBgColor, buttonHoverTextColor, buttonBorderRadius, buttonFontFamily, nameFontWeight, priceFontWeight, buttonFontSize, buttonFontWeight, buttonBorder, buttonHoverBorder, titleMargin, containerPadding, buttonPadding, buttonMargin } = attributes;

    let desktopCss = {
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product`]: {
            'background-color': containerBgColor,
            'border': containerBorder.color+' ' + containerBorder.style +' '+ containerBorder.width,
            'border-radius':  cssDataCheck(containerBorderRadius.device.Desktop, unit(containerBorderRadius, 'Desktop')),
            'transition': '0.4s all',
            'margin-right': cssDataCheck(gapBetweenProducts.device.Desktop, unit(gapBetweenProducts, 'Desktop')),
            'padding': cssDataCheck(containerPadding.device.Desktop, unit(containerPadding, 'Desktop')),
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
            'font-weight': nameFontWeight,
            'margin': cssDataCheck(titleMargin.device.Desktop, unit(titleMargin, 'Desktop')),
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product .product-contents .price`]: {
            'color': priceColor,
            'font-size': cssDataCheck(priceFontSize.device.Desktop, unit(priceFontSize, 'Desktop')),
            'font-weight': priceFontWeight
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product:hover .product-contents .price`]: {
            'color': priceHoverColor,
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product .product-contents .product-parade-block-rating-area .filled-icons`]: {
            'font-size': cssDataCheck(iconSize.device.Desktop, unit(iconSize, 'Desktop')),
            'color': filledIconsColor
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product .product-contents .product-parade-block-rating-area .empty-icons`]: {
            'font-size': cssDataCheck(iconSize.device.Desktop, unit(iconSize, 'Desktop')),
            'color': emptyIconsColor
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product:hover .product-contents .product-parade-block-rating-area .filled-icons`]: {
            'color': filledIconsHoverColor,
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product:hover .product-contents .product-parade-block-rating-area .empty-icons`]: {
            'color': emptyIconsHoverColor,
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId}  .ppb-product .add-to-cart .button`]: {
            'background-color': buttonBgColor===undefined? "transparent" : buttonBgColor,
            'color': buttonTextColor,
            'font-family': buttonFontFamily,
            'font-size': cssDataCheck(buttonFontSize.device.Desktop, unit(buttonFontSize, 'Desktop')),
            'font-weight': buttonFontWeight,
            'width': '122px',
            'box-sizing': 'content-box',
            'border-radius':  cssDataCheck(buttonBorderRadius.device.Desktop, unit(buttonBorderRadius, 'Desktop')),
            'padding': cssDataCheck(buttonPadding.device.Desktop, unit(buttonPadding, 'Desktop')),
            'border': buttonBorder.color+' ' + buttonBorder.style +' '+ buttonBorder.width,
            'line-height': 'normal',
            'min-height': 'auto',
            'margin': cssDataCheck(buttonMargin.device.Desktop, unit(buttonMargin, 'Desktop')),
            
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId}  .ppb-product .add-to-cart .button:hover`]: {
            'background-color': buttonHoverBgColor,
            'color': buttonHoverTextColor,
            'border': buttonHoverBorder.color+' ' + buttonHoverBorder.style +' '+ buttonHoverBorder.width,
        },
        
    };


    let tabletCss = {
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product`]: {
            'margin-right': cssDataCheck(gapBetweenProducts.device.Tablet, unit(gapBetweenProducts, 'Tablet')),
            'border-radius':  cssDataCheck(containerBorderRadius.device.Tablet, unit(containerBorderRadius, 'Tablet')),
            'padding': cssDataCheck(containerPadding.device.Tablet, unit(containerPadding, 'Tablet')),
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product .product-contents .product-name`]: {
            'font-size': cssDataCheck(nameFontSize.device.Tablet, unit(nameFontSize, 'Tablet')),
            'margin': cssDataCheck(titleMargin.device.Tablet, unit(titleMargin, 'Tablet')),
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product .product-contents .price`]: {
            'font-size': cssDataCheck(priceFontSize.device.Tablet, unit(priceFontSize, 'Tablet')),
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product .product-contents .product-parade-block-rating-area .filled-icons`]: {
            'font-size': cssDataCheck(iconSize.device.Tablet, unit(iconSize, 'Tablet')),
            'color': filledIconsColor
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product .product-contents .product-parade-block-rating-area .empty-icons`]: {
            'font-size': cssDataCheck(iconSize.device.Tablet, unit(iconSize, 'Tablet')),
            'color': emptyIconsColor
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId}  .ppb-product .add-to-cart .button`]: {
            'font-size': cssDataCheck(buttonFontSize.device.Tablet, unit(buttonFontSize, 'Tablet')),
            'border-radius':  cssDataCheck(buttonBorderRadius.device.Tablet, unit(buttonBorderRadius, 'Tablet')),
        },
    };


    let mobileCss = {
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product`]: {
            'margin-right': cssDataCheck(gapBetweenProducts.device.Mobile, unit(gapBetweenProducts, 'Mobile')),
            'border-radius':  cssDataCheck(containerBorderRadius.device.Mobile, unit(containerBorderRadius, 'Mobile')),
            'padding': cssDataCheck(containerPadding.device.Mobile, unit(containerPadding, 'Mobile')),
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product .product-contents .product-name`]: {
            'font-size': cssDataCheck(nameFontSize.device.Mobile, unit(nameFontSize, 'Mobile')),
            'margin': cssDataCheck(titleMargin.device.Mobile, unit(titleMargin, 'Mobile')),
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product .product-contents .price`]: {
            'font-size': cssDataCheck(priceFontSize.device.Mobile, unit(priceFontSize, 'Mobile')),
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product .product-contents .product-parade-block-rating-area .filled-icons`]: {
            'font-size': cssDataCheck(iconSize.device.Mobile, unit(iconSize, 'Mobile')),
            'color': filledIconsColor
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId} .ppb-product .product-contents .product-parade-block-rating-area .empty-icons`]: {
            'font-size': cssDataCheck(iconSize.device.Mobile, unit(iconSize, 'Mobile')),
            'color': emptyIconsColor
        },
        [`.wp-block-wpdev-product-parade-block-${uniqueId}  .ppb-product .add-to-cart .button`]: {
            'font-size': cssDataCheck(buttonFontSize.device.Mobile, unit(buttonFontSize, 'Mobile')),
            'border-radius':  cssDataCheck(buttonBorderRadius.device.Mobile, unit(buttonBorderRadius, 'Mobile')),
        }
    };
    
    desktopCss = cssString(desktopCss);
    tabletCss = '' !== cssString( tabletCss ) ? `@media only screen and (max-width: 780px) {${cssString( tabletCss )}}` : '';
    mobileCss = '' !== cssString( mobileCss ) ? `@media only screen and (max-width: 360px){${cssString( mobileCss )}}` : '';

    const styling = `${desktopCss + tabletCss + mobileCss}`;
    return styling;
};
export default dynamicCss;