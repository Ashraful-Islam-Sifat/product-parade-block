import { PanelColorSettings } from "@wordpress/block-editor";
import { SelectControl } from "@wordpress/components";
import { RangeControl, PanelBody,  __experimentalBorderControl as BorderControl, Button } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { __ } from '@wordpress/i18n';

const StylesTab = ({attributes, setAttributes}) => {
    
    const { containerBgColor, containerBorder, containerHoverBgColor, containerHoverBorder, containerBorderRadius, nameFontSize, nameFontFamily } = attributes;

    const [containerStyleType, setContainerStyleType] = useState('default');

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
            {/* <div className='product-parade-block-sidebar-label-text'>Color Settings</div> */}

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
            <RangeControl
                label={ __('Border Radius(px)', 'product-parade-block')}
                value={ containerBorderRadius }
                onChange={ (value)=> setAttributes( { containerBorderRadius: value } ) }
                min={ 0 }
                max={ 40 }
            />

        </PanelBody>

        <PanelBody title={ __('Name', 'product-parade-block') } initialOpen={ false }>

            <RangeControl
                label={ __('Font Size(px)', 'product-parade-block') }
                value={ nameFontSize }
                onChange={ (value)=> setAttributes( { nameFontSize: value } ) }
                min={ 10 }
                max={ 40 }
            />
            <SelectControl
                label={__('Font Family', 'product-parade-block')}
                value={nameFontFamily}
                options={fontFamilyOptions}
                onChange={(newValue)=> setAttributes({ nameFontFamily: newValue })}
            />

        </PanelBody>
        </>
     );
}
 
export default StylesTab;