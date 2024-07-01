import { cssString } from "./controls";

function dynamicCss(attributes) {
    const { containerBgColor, containerBorder, containerHoverBgColor, containerHoverBorder, containerBorderRadius, nameFontSize, nameFontFamily } = attributes;

    let desktopCss = {
        [`.wp-block-wpdev-product-parade-block .ppb-product`]: {
            'background-color': containerBgColor,
            'border': containerBorder.color+' ' + containerBorder.style +' '+ containerBorder.width,
            'border-radius':  containerBorderRadius+'px',
            'transition': '0.4s all'
        },
        [`.wp-block-wpdev-product-parade-block .ppb-product:hover`]: {
            'background-color': containerHoverBgColor,
            'border': containerHoverBorder.color+' ' + containerHoverBorder.style +' '+ containerHoverBorder.width,
        },
        [`.wp-block-wpdev-product-parade-block .ppb-product .product-contents .product-name`]: {
            'color': '#000',
            'font-size': nameFontSize+'px',
            'font-family': nameFontFamily
        },
        [`.wp-block-task-block-shapedplugin-accordion .accordion__item .accordion__title`]: {
            'background-color': 'red',
            'padding': '44px'
        }        
    };
    

    desktopCss = cssString(desktopCss);
    const styling = `${desktopCss}`;
    return styling;
};
export default dynamicCss;