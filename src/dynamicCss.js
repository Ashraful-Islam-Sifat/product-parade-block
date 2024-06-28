import { cssString } from "./controls";

function dynamicCss(attributes) {
    const { uniqueId, itemsGap, titlleBgColor, contentBgColor, contentHoverBgColor, titleBgHover, titlleTextColor, titleTextHover, titleTextAlingment, iconPosition, iconColor, iconHoverColor, titlePadding, contentPadding, titleFontFamily } = attributes;

    let desktopCss = {
        [`.wp-block-wpdev-product-parade-block .myProduct h2`]: {
            'color': '#000',
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