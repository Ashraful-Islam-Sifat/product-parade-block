import { RangeControl, SelectControl, Button, TabPanel, Icon, ToggleControl, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import contentLeftIcon from '../Icons/contentLeft.svg';
import contentTopIcon from '../Icons/contentTop.svg';
import contentBottomIcon from '../Icons/contentBottom.svg';
import contentRightIcon from '../Icons/contentRight.svg';
import { useState } from '@wordpress/element';

const GeneralTab = ({attributes, setAttributes}) => {

    const { postPerPage, orderBy, order, showOnSaleRibbon, showAverageRatings, contentPosition } = attributes;

    const [ activeLayout, setActiveLayout ] = useState('bottom');
    console.log(contentPosition);

    return (
        <>
            <PanelBody title={__('Product Content Position', 'product-parade-block')}>
                <div className='product-parade-block-layouts'>

                    <div className='product-parade-block-layout' onClick={ ()=> setAttributes({contentPosition: "bottom"}) }>
                    <figure className={`product-parade-block-layout-icon-area ${contentPosition == 'bottom' ? 'active' : ''}`}>
                            <img src={contentBottomIcon} alt={__('content-top', 'product-parade-block')}/>
                            { contentPosition == 'bottom' && <Icon className='layout-yes-icon' icon='yes-alt'/>}
                        </figure>
                        <p className='layout-label'>Bottom</p>
                    </div>

                    <div className='product-parade-block-layout' onClick={ ()=> setAttributes({ contentPosition: 'top' }) }>
                        <figure className={`product-parade-block-layout-icon-area ${contentPosition == 'top' ? 'active' : ''}`}>
                            <img src={contentTopIcon} alt={__('content-top', 'product-parade-block')}/>
                            { contentPosition == 'top' && <Icon className='layout-yes-icon' icon='yes-alt'/>}
                        </figure>
                        <p className='layout-label'>Top</p>
                    </div>

                    <div className='product-parade-block-layout' onClick={ ()=> setAttributes({contentPosition: "left"}) }>
                        <figure className={`product-parade-block-layout-icon-area ${contentPosition == 'left' ? 'active' : ''}`}>
                            <img src={contentLeftIcon} alt={__('content-left', 'product-parade-block')}/>
                            { contentPosition == 'left' && <Icon className='layout-yes-icon' icon='yes-alt'/>}
                        </figure>
                        <p className='layout-label'>Left</p>
                    </div>

                    <div className='product-parade-block-layout' onClick={ ()=> setAttributes({contentPosition: "right"}) }>
                    <figure className={`product-parade-block-layout-icon-area ${contentPosition == 'right' ? 'active' : ''}`}>
                            <img src={contentRightIcon} alt={__('content-right', 'product-parade-block')}/>
                            { contentPosition == 'right' && <Icon className='layout-yes-icon' icon='yes-alt'/>}
                        </figure>
                        <p className='layout-label'>Right</p>
                    </div>

                </div>
            </PanelBody>
        <div className='product-parade-block-tabs-content'>        
            <RangeControl
                label={__('Post per page', 'product-parade-block')}
                value={ postPerPage }
                onChange={ ( value ) => setAttributes( { postPerPage: value } ) }
                min={ 2 }
                max={ 100 }
            />
            <SelectControl
                label={__('Orderby', 'product-parade-block')}
                value={ orderBy }
                onChange={ (value)=> setAttributes({ orderBy: value }) }
                options={ [
                    { value: '', label: 'Orderby', disabled: true },
                    { value: 'date', label: 'Date' },
                    { value: 'title', label: 'Name' },
                    { value: 'rating', label: 'Rating' },
                ] }
            />
            
            <div className='product-parade-block-sidebar-label-text'>{__('Order', 'product-parade-block')}</div>
            <div className='product-parade-block-button-group'>
                <Button className={`product-parade-block-sidebar-button ${order == "asc" ? 'active-button' : ''}`} onClick={()=> setAttributes({order: "asc"})}>Ascending</Button>
                <Button className={`product-parade-block-sidebar-button ${order == "desc" ? 'active-button' : ''}`} onClick={()=> setAttributes({order: "desc"})}>Descending</Button>
            </div>
            <ToggleControl
                label={__('Show On Sale Ribbon', 'product-parade-block')}
                help={
                    showOnSaleRibbon
                        ? 'Disable to hide on sale ribbon.'
                        : 'Enable to show on sale ribbon.'
                }
                checked={ showOnSaleRibbon }
                onChange={ (newValue) => {
                    setAttributes( { showOnSaleRibbon: newValue } );
                } }
            />
            <ToggleControl
                label={__('Show Average Ratings', 'product-parade-block')}
                help={
                    showAverageRatings
                        ? 'Disable to hide average ratings.'
                        : 'Enable to show average ratings.'
                }
                checked={ showAverageRatings }
                onChange={ (newValue) => {
                    setAttributes( { showAverageRatings: newValue } );
                } }
            />
        </div>
        </>
    );
}

export default GeneralTab;