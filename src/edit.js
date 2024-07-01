import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { useState, useEffect, RawHTML } from '@wordpress/element';
import './editor.scss';
import dynamicCss from './dynamicCss';
import TabsContent from './components/tabsContents';

export default function Edit({ attributes, setAttributes }) {

    const { postPerPage, orderBy, order, showOnSaleRibbon, showAverageRatings, contentPosition, onSaleLabelText, ribbonPosition } = attributes;
    
    const blockProps = useBlockProps();
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        setAttributes({frontendCss: JSON.stringify(dynamicCss(attributes))})
    },[attributes]);

    // Fetch product data using wp.data.select
    const products = useSelect((select) => {
        return select('core').getEntityRecords('postType', 'product', {
            per_page: postPerPage,
            orderby: orderBy,
            order: order,
            _embed: true
        });
    }, [postPerPage, orderBy, order]);

    useEffect(() => {
        if (products === null) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [products]);

    return (
        <div {...blockProps}>
            <InspectorControls>
                <TabsContent attributes={attributes} setAttributes={setAttributes}/>            
            </InspectorControls>
            <style>{dynamicCss(attributes)}</style>
            
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    products && products.length > 0 ? (
                        products.map((product) => {
                            const featuredMedia = product._embedded && product._embedded['wp:featuredmedia'] && product._embedded['wp:featuredmedia'][0];
                            return (
                                <div key={product.id} className={`ppb-product content-position-${contentPosition}`}>
                                    {featuredMedia && <img src={featuredMedia.source_url} alt={product.title.rendered} />}
                                    <div className='product-contents'>
                                        <h2 className='product-name'>{product.title.rendered}</h2>
                                        {exampleWooCommerceBlock.productsMeta.map( ( v, i) =>{
									    				if( v.id === product.id){
									    					return (
                                                                <>
                                                                <span className='price' dangerouslySetInnerHTML={{ __html: v.price }}></span>
									    						{showAverageRatings &&
                                                                (
                                                                <>
                                                                <div className="product-parade-block-rating-area">
                                                                    <div className='empty-icons'>
                                                                        <i class="far fa-star"></i>
                                                                        <i class="far fa-star"></i>
                                                                        <i class="far fa-star"></i>
                                                                        <i class="far fa-star"></i>
                                                                        <i class="far fa-star"></i>
                                                                    </div>
                                                                    <div style={{ width: `${(v.rating / 5) * 100}%` }} className="filled-icons">
                                                                        <i class="fas fa-star"></i>
                                                                        <i class="fas fa-star"></i>
                                                                        <i class="fas fa-star"></i>
                                                                        <i class="fas fa-star"></i>
                                                                        <i class="fas fa-star"></i>
                                                                    </div>
                                                                </div>
                                                                </>
                                                                )}
                                                                {/* {v.add_to_cart} */}
                                                                {(v.onSale && showOnSaleRibbon) && (
                                                                    <div className={`on-sale-label position-${ribbonPosition}`}>
                                                                        <RichText
                                                                            value={ onSaleLabelText }
                                                                            onChange={ (value)=> setAttributes({ onSaleLabelText: value }) }
                                                                            placeholder={ __('On Sale!', 'product-parade-block') }
                                                                        />
                                                                    </div>
                                                                )}
                                                                </>
									    					);
									    				}
									    			})}
                                        {/* The button will be dynamic */}
                                        <button className='add_to_cart_button wp-element-button'>Add to cart</button>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>No products found</p>
                    )
                )}

        </div>
    );
}