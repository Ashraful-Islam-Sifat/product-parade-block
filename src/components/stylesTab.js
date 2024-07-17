import { PanelColorSettings } from "@wordpress/block-editor";
import { Dropdown, SelectControl } from "@wordpress/components";
import { RangeControl, PanelBody,  __experimentalBorderControl as BorderControl, Button } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { __ } from '@wordpress/i18n';
import MyRangeControl from "./myRangeControl";
import {TypographyIcon} from '../Icons/myIcons';
import Typography from "./typography";

const StylesTab = ({attributes, setAttributes}) => {
    
    const { containerBgColor, containerBorder, containerHoverBgColor, containerHoverBorder, containerBorderRadius, nameFontSize, nameFontFamily, nameColor, nameHoverColor, priceFontSize, priceColor, priceHoverColor, iconSize, filledIconsColor, emptyIconsColor, filledIconsHoverColor, emptyIconsHoverColor, buttonBgColor, buttonTextColor, buttonHoverBgColor, buttonHoverTextColor, buttonFontFamily, showAverageRatings, buttonFontSize } = attributes;

    const [containerStyleType, setContainerStyleType] = useState('default');
    const [nameStyleType, setNameStyleType] = useState('default');
    const [priceStyleType, setPriceStyleType] = useState('default');
    const [iconsStyleType, setIconsStyleType] = useState('default');
    const [buttonStyleType, setButtonStyleType] = useState('default');

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const colors = [
        { name: 'Blue 20', color: '#72aee6' },
        // ...
    ];
    const fontFamilyOptions = [
        { label: 'Arial', value: 'Arial, sans-serif' },
        { label: 'Helvetica', value: 'Helvetica, sans-serif' },
        { label: 'Times New Roman', value: '"Times New Roman", Times, serif' },
        { label: 'Courier New', value: '"Courier New", Courier, monospace' },
        { label: 'Verdana', value: 'Verdana, sans-serif' },
        { label: 'Georgia', value: 'Georgia, serif' },
        { label: 'Palatino', value: '"Palatino Linotype", "Book Antiqua", Palatino, serif' },
        { label: 'Tahoma', value: 'Tahoma, sans-serif' },
        { label: 'Trebuchet MS', value: '"Trebuchet MS", Helvetica, sans-serif' },
        { label: 'Impact', value: 'Impact, Charcoal, sans-serif' },
        { label: 'Comic Sans MS', value: '"Comic Sans MS", cursive, sans-serif' },
        { label: 'Lucida Sans Unicode', value: '"Lucida Sans Unicode", "Lucida Grande", sans-serif' },
        { label: 'Arial Black', value: '"Arial Black", Gadget, sans-serif' },
        { label: 'Gill Sans', value: '"Gill Sans", "Gill Sans MT", Calibri, sans-serif' },
        { label: 'Geneva', value: 'Geneva, sans-serif' },
        { label: 'Calibri', value: 'Calibri, sans-serif' },
        { label: 'Candara', value: 'Candara, sans-serif' },
        { label: 'Optima', value: 'Optima, sans-serif' },
        { label: 'Cambria', value: 'Cambria, Georgia, serif' },
        { label: 'Baskerville', value: 'Baskerville, "Times New Roman", serif' },
        { label: 'Garamond', value: 'Garamond, serif' },
        { label: 'Bookman', value: 'Bookman, serif' },
        { label: 'Avant Garde', value: '"Avant Garde", sans-serif' }
      ];

    return ( 
        <>
        <PanelBody title={ __('Container','product-parade-block') } initialOpen={ false }>

            <div className='product-parade-block-button-group'>
                <Button className={`product-parade-block-sidebar-button ${containerStyleType == "default" ? 'active-button' : ''}`} onClick={()=> setContainerStyleType('default')}>Default</Button>
                <Button className={`product-parade-block-sidebar-button ${containerStyleType == "hover" ? 'active-button' : ''}`} onClick={()=> setContainerStyleType('hover')}>Hover</Button>
            </div>
            {containerStyleType === "default" && (
                <>
                    <PanelColorSettings
                        disableCustomColors={false}
                        colorSettings={[
                            {
                                label: __('Background', 'product-parade-block'),
                                value: containerBgColor,
                                onChange: (value) => {
                                    setAttributes({ containerBgColor: value });
                                }
                            }
                        ]}
                    />
                    <BorderControl
                        colors={colors}
                        label={__('Border')}
                        onChange={(v) => setAttributes({ containerBorder: v })}
                        value={containerBorder}
                    />
                </>
            )}
            {containerStyleType === "hover" && (
                <>
                    <PanelColorSettings
                        disableCustomColors={false}
                        colorSettings={[
                            {
                                label: __('Background', 'product-parade-block'),
                                value: containerHoverBgColor,
                                onChange: (value) => {
                                    setAttributes({ containerHoverBgColor: value });
                                }
                            }
                        ]}
                    />
                    <BorderControl
                        colors={colors}
                        label={__('Border')}
                        onChange={(v) => setAttributes({ containerBorder: v })}
                        value={containerHoverBorder}
                    />
                </>
            )}
            <MyRangeControl
                label={__('Border Radius', 'product-parade-block')}
                setAttributes={setAttributes}
                attributes={containerBorderRadius}
                units= {['px', '%', 'em']}
                attributesKey={'containerBorderRadius'}
                min={0}
                max={40}
                step={1}
            />

        </PanelBody>

        <PanelBody title={ __('Name', 'product-parade-block') } initialOpen={ false }>

            <Typography
                fontSize = {nameFontSize} 
                fontSizeKey = "nameFontSize"
                attributes ={ attributes }
                setAttributes={ setAttributes }
                fontFamily='nameFontFamily'
                fontWeight='nameFontWeight'
            />

            <div className="product-parade-block-sidebar-label-text">Color Settings</div>
            <div className='product-parade-block-button-group'>
                <Button className={`product-parade-block-sidebar-button ${nameStyleType == "default" ? 'active-button' : ''}`} onClick={()=> setNameStyleType('default')}>Default</Button>
                <Button className={`product-parade-block-sidebar-button ${nameStyleType == "hover" ? 'active-button' : ''}`} onClick={()=> setNameStyleType('hover')}>Hover</Button>
            </div>
            {nameStyleType === "default" && (
                <>
                    <PanelColorSettings
                        disableCustomColors={false}
                        colorSettings={[
                            {
                                label: __('Color', 'product-parade-block'),
                                value: nameColor,
                                onChange: (value) => {
                                    setAttributes({ nameColor: value });
                                }
                            }
                        ]}
                    />
                </>
            )}
            {nameStyleType === "hover" && (
                <>
                    <PanelColorSettings
                        disableCustomColors={false}
                        colorSettings={[
                            {
                                label: __('Color', 'product-parade-block'),
                                value: nameHoverColor,
                                onChange: (value) => {
                                    setAttributes({ nameHoverColor: value });
                                }
                            }
                        ]}
                    />
                </>
            )}

        </PanelBody>

        <PanelBody title={ __('Price', 'product-parade-block') } initialOpen={ false }>
            <Typography
                fontSize = {priceFontSize} 
                fontSizeKey = "priceFontSize"
                attributes ={ attributes }
                setAttributes={ setAttributes }
                fontWeight= "priceFontWeight"
                defaultValue = {{unit: 'px', value: 14}}
            />
            <div className="product-parade-block-sidebar-label-text">Color Settings</div>
            <div className='product-parade-block-button-group'>
                <Button className={`product-parade-block-sidebar-button ${priceStyleType == "default" ? 'active-button' : ''}`} onClick={()=> setPriceStyleType('default')}>Default</Button>
                <Button className={`product-parade-block-sidebar-button ${priceStyleType == "hover" ? 'active-button' : ''}`} onClick={()=> setPriceStyleType('hover')}>Hover</Button>
            </div>
            {priceStyleType === "default" && (
                <>
                    <PanelColorSettings
                        disableCustomColors={false}
                        colorSettings={[
                            {
                                label: __('Color', 'product-parade-block'),
                                value: priceColor,
                                onChange: (value) => {
                                    setAttributes({ priceColor: value });
                                }
                            }
                        ]}
                    />
                </>
            )}
            {priceStyleType === "hover" && (
                <>
                    <PanelColorSettings
                        disableCustomColors={false}
                        colorSettings={[
                            {
                                label: __('Color', 'product-parade-block'),
                                value: priceHoverColor,
                                onChange: (value) => {
                                    setAttributes({ priceHoverColor: value });
                                }
                            }
                        ]}
                    />
                </>
            )}
        </PanelBody>

        {showAverageRatings &&
        <PanelBody title={ __('Rating', 'product-parade-block') } initialOpen={ false }>
            <MyRangeControl
                label={__('Icon Size', 'product-parade-block')}
                setAttributes={setAttributes}
                attributes={iconSize}
                units= {['px', '%', 'em']}
                attributesKey={'iconSize'}
                min={0}
                max={40}
                step={0.5}
                defaultValue = {{unit: 'px', value: 14}}
            />
            <div className='product-parade-block-button-group'>
                <Button className={`product-parade-block-sidebar-button ${iconsStyleType == "default" ? 'active-button' : ''}`} onClick={()=> setIconsStyleType('default')}>Default</Button>
                <Button className={`product-parade-block-sidebar-button ${iconsStyleType == "hover" ? 'active-button' : ''}`} onClick={()=> setIconsStyleType('hover')}>Hover</Button>
            </div>
            {iconsStyleType === "default" && (
                <>
                    <PanelColorSettings
                        disableCustomColors={false}
                        colorSettings={[
                            {
                                label: __('Filled Stars', 'product-parade-block'),
                                value: filledIconsColor,
                                onChange: (value) => {
                                    setAttributes({ filledIconsColor: value });
                                }
                            },
                            {
                                label: __('Empty Stars', 'product-parade-block'),
                                value: emptyIconsColor,
                                onChange: (value) => {
                                    setAttributes({ emptyIconsColor: value });
                                }
                            }
                        ]}
                    />
                </>
            )}
            {iconsStyleType === "hover" && (
                <>
                    <PanelColorSettings
                        disableCustomColors={false}
                        colorSettings={[
                            {
                                label: __('Filled Stars', 'product-parade-block'),
                                value: filledIconsHoverColor,
                                onChange: (value) => {
                                    setAttributes({ filledIconsHoverColor: value });
                                }
                            },
                            {
                                label: __('Empty Stars', 'product-parade-block'),
                                value: emptyIconsHoverColor,
                                onChange: (value) => {
                                    setAttributes({ emptyIconsHoverColor: value });
                                }
                            }
                        ]}
                    />
                </>
            )}
        </PanelBody>
        }

        <PanelBody title={ __('Button', 'product-parade-block') } initialOpen={ false }>
            <>
            <Typography
                fontSize = {buttonFontSize} 
                fontSizeKey = "buttonFontSize"
                defaultFontSize={{unit: 'px', value: 16}}
                attributes ={ attributes }
                setAttributes={ setAttributes }
                fontFamily='buttonFontFamily'
                fontWeight='buttonFontWeight'
            />
                    <div className="product-parade-block-sidebar-label-text">Color Settings</div>
                    <div className='product-parade-block-button-group'>
                        <Button className={`product-parade-block-sidebar-button ${buttonStyleType == "default" ? 'active-button' : ''}`} onClick={()=> setButtonStyleType('default')}>Default</Button>
                        <Button className={`product-parade-block-sidebar-button ${buttonStyleType == "hover" ? 'active-button' : ''}`} onClick={()=> setButtonStyleType('hover')}>Hover</Button>
                    </div>
                    {buttonStyleType === 'default'&&
                    <PanelColorSettings
                        disableCustomColors={false}
                        colorSettings={[
                            {
                                label: __('Background', 'product-parade-block'),
                                value: buttonBgColor,
                                onChange: (value) => {
                                    setAttributes({ buttonBgColor: value });
                                }
                            },
                            {
                                label: __('Text Color', 'product-parade-block'),
                                value: buttonTextColor,
                                onChange: (value) => {
                                    setAttributes({ buttonTextColor: value });
                                }
                            }
                        ]}
                    />}
                    {buttonStyleType === 'hover'&&
                    <PanelColorSettings
                        disableCustomColors={false}
                        colorSettings={[
                            {
                                label: __('Background', 'product-parade-block'),
                                value: buttonHoverBgColor,
                                onChange: (value) => {
                                    setAttributes({ buttonHoverBgColor: value });
                                }
                            },
                            {
                                label: __('Text Color', 'product-parade-block'),
                                value: buttonHoverTextColor,
                                onChange: (value) => {
                                    setAttributes({ buttonHoverTextColor: value });
                                }
                            }
                        ]}
                    />}
                </>
        </PanelBody>
        </>
     );
}
 
export default StylesTab;