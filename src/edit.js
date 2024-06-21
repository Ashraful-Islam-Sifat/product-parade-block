// import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
// import { useSelect } from '@wordpress/data';
// import { __ } from '@wordpress/i18n';
// import { useState, useEffect } from '@wordpress/element';
// import './editor.scss';

// export default function Edit({ attributes, setAttributes }) {
//     const blockProps = useBlockProps();
//     const [loading, setLoading] = useState(true);
//     const [products, setProducts] = useState([]);

//     console.log(products);

//     useEffect(() => {
//         // Fetch product prices via AJAX
//         fetch(exampleWooCommerceBlock.ajax_url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//             },
//             body: `action=fetch_product_prices&nonce=${exampleWooCommerceBlock.nonce}`,
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 setProducts(data.data);
//                 setAttributes({ productPrices: data.data });
//             } else {
//                 console.error('Failed to fetch product prices');
//             }
//             setLoading(false);
//         })
//         .catch(error => {
//             console.error('Error fetching product prices:', error);
//             setLoading(false);
//         });
//     }, []);


//     // return (
//     //     <div {...blockProps}>
//     //         <InspectorControls>
//     //             <p>Settings can go here</p>
//     //         </InspectorControls>
//     //         <div className='example-woocommerce-block'>
//     //             {products.map((product) => {
//     //                 const featuredMedia = product._embedded && product._embedded['wp:featuredmedia'] && product._embedded['wp:featuredmedia'][0];
//     //                 let price = 'N/A';

//     //                 // Check if price is available in meta data
//     //                 if (product.meta_data) {
//     //                     const priceMeta = product.meta_data.find(meta => meta.key === '_price');
//     //                     if (priceMeta) {
//     //                         price = priceMeta.value;
//     //                     }
//     //                 }

//     //                 return (
//     //                     <div key={product.id} className="myProduct">
//     //                             {featuredMedia && <img src={featuredMedia.source_url} alt={product.title.rendered} />}
//     //                             <h2>{product.title.rendered}</h2>
//     //                         <span className="price">{price}</span>
//     //                         <button className='add_to_cart_button wp-element-button '>Add to cart</button>
//     //                     </div>
//     //                 );
//     //             })}
//     //         </div>
//     //     </div>
//     // );


//     return (
//         <div {...blockProps}>
//             <div className="example-woocommerce-block">
//                 {loading ? (
//                     <p>Loading...</p>
//                 ) : (
//                     products.length > 0 ? (
//                         products.map((product) => (
//                             <div key={product.id} className="myProduct">
//                                 <div dangerouslySetInnerHTML={{ __html: product.thumbnail }}></div>
//                                 <h2>{product.title}</h2>
//                                 <span className="price" dangerouslySetInnerHTML={{ __html: product.price }}></span>
//                                 <button className='add_to_cart_button wp-element-button '>Add to cart</button>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No products found</p>
//                     )
//                 )}
//             </div>
//         </div>
//     );
// };

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import './editor.scss';
import { RangeControl, SelectControl, Button, TabPanel } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {

    const { postPerPage, orderBy, order } = attributes;
    
    const blockProps = useBlockProps();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [productIds, setProductIds] = useState([]);
    const [activeTab, setActiveTab] = useState('general');


    // Fetch product data using wp.data.select
    const productData = useSelect((select) => {
        return select('core').getEntityRecords('postType', 'product', {
            per_page: postPerPage,
            orderby: orderBy,
            order: order,
            _embed: true
        });
    }, [postPerPage, orderBy, order]);
    

    useEffect(() => {
        if (productData) {
            const ids = productData.map(product => product.id);
            setProductIds(ids);

            const productsWithMeta = productData.map(product => {
                const featuredMedia = product._embedded && product._embedded['wp:featuredmedia'] && product._embedded['wp:featuredmedia'][0];
                return {
                    id: product.id,
                    title: product.title.rendered,
                    thumbnail: featuredMedia ? featuredMedia.source_url : '',
                };
            });

            setProducts(productsWithMeta);
            setLoading(false);
        }
    }, [productData]);

    useEffect(() => {
        if (productIds.length > 0) {
            // Fetch product prices via AJAX
            fetch(exampleWooCommerceBlock.ajax_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
                body: `action=fetch_product_prices&nonce=${exampleWooCommerceBlock.nonce}&product_ids=${productIds.join(',')}`,
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    const updatedProducts = products.map(product => {
                        const productPrice = data.data.find(p => p.id === product.id);
                        return {
                            ...product,
                            price: productPrice ? productPrice.price : 'N/A',
                        };
                    });
                    setProducts(updatedProducts);
                    setAttributes({ productPrices: data.data });
                } else {
                    console.error('Failed to fetch product prices');
                }
            })
            .catch(error => {
                console.error('Error fetching product prices:', error);
            });
        }
    }, [productIds]);
    return (
        <div {...blockProps}>
            <InspectorControls>

            <TabPanel
            className="example-woocommerce-block-tab-panel"
            activeClass="example-woocommerce-block-active-tab"
            onSelect={(tabName) => setActiveTab(tabName)}
            activeTab={activeTab}
            tabs={[
                {
                    name: 'general',
                    title: 
                    <span className='example-woocommerce-block-tab-panel-title'>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={15}
                          fill="none"
                        >
                          <path
                            d="M10 10.15a2.613 2.613 0 0 0 2.505-1.87h1.832V6.785h-1.832a2.613 2.613 0 0 0-5.01 0H.803V8.28h6.692A2.613 2.613 0 0 0 10 10.15Zm0-3.74c.617 0 1.122.506 1.122 1.123 0 .616-.505 1.121-1.122 1.121a1.125 1.125 0 0 1-1.122-1.121c0-.617.505-1.122 1.122-1.122Z"
                          />
                          <path
                            d="M5.14 14.45a2.613 2.613 0 0 0 2.505-1.87h6.692v-1.496H7.645a2.613 2.613 0 0 0-5.01 0H.803v1.496h1.832a2.613 2.613 0 0 0 2.505 1.87Zm0-3.74c.617 0 1.121.505 1.121 1.122 0 .617-.504 1.122-1.121 1.122a1.125 1.125 0 0 1-1.122-1.122c0-.617.505-1.122 1.122-1.122ZM5.14 6.037a2.613 2.613 0 0 0 2.505-1.87h6.692V2.673H7.645a2.613 2.613 0 0 0-5.01 0H.803v1.496h1.832A2.613 2.613 0 0 0 5.14 6.037Zm0-3.739c.617 0 1.121.505 1.121 1.122 0 .617-.504 1.121-1.121 1.121A1.125 1.125 0 0 1 4.018 3.42c0-.617.505-1.122 1.122-1.122Z"
                          />
                        </svg>
                         {__('General', 'example-woocommerce-block')}
                    </span>,
                    className: 'general-tab'
                },
                {
                    name: 'styles',
                    title:  
                    <span className='example-woocommerce-block-tab-panel-title'>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={16}
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9.845 6.994c-.438 0-.876.17-1.21.504-.67.669-1.043 2.67-2.646 3.597 1.914.14 3.635.107 5.068-1.176.704-.631.669-1.752 0-2.421a1.707 1.707 0 0 0-1.21-.504h-.002Z"
                            clipRule="evenodd"
                          />
                          <path
                            d="M15.805 4.928v8.886c0 .184-.218.454-.402.454H1.627c-.184 0-.427-.27-.427-.454V6.947l2.892-.019c.605-.004.902-.22.909-.824l.055-2.84h8.187l1.294-1.348-9.885-.011L0 6.306v7.508c0 .899.728 1.655 1.627 1.655h13.776c.899 0 1.602-.756 1.602-1.655V3.634l-1.2 1.294Z"
                          />
                          <path
                            fillRule="evenodd"
                            d="M17.137 1.393 12 6.531l5.138-5.138Z"
                            clipRule="evenodd"
                          />
                          <path
                            fillRule="evenodd"
                            d="M12 7.393a.863.863 0 0 1-.61-1.472L16.528.784a.863.863 0 0 1 1.22 1.22L12.61 7.14a.86.86 0 0 1-.61.252Z"
                            clipRule="evenodd"
                          />
                        </svg>
                     {__('Styles', 'example-woocommerce-block')}
                </span>,
                    className: 'styles-tab',
                },
            ]}
        >
          { (tab) => (
              <>
                  {tab.name === 'general' && (
                      <div className='example-woocommerce-block-tabs-content'>
                        <RangeControl
                    label={__('Post per page', 'example-woocommerce-block')}
                    value={ postPerPage }
                    onChange={ ( value ) => setAttributes( { postPerPage: value } ) }
                    min={ 2 }
                    max={ 100 }
                />

                <SelectControl
                    label={__('Orderby', 'example-woocommerce-block')}
                    value={ orderBy }
                    onChange={ (value)=> setAttributes({ orderBy: value }) }
                    options={ [
                        { value: '', label: 'Orderby', disabled: true },
                        { value: 'date', label: 'Date' },
                        { value: 'title', label: 'Name' },
                        { value: 'rand', label: 'Random' },
                    ] }
                />

                {/* <SelectControl
                    label={__('Order', 'example-woocommerce-block')}
                    value={ order }
                    onChange={ (value)=> setAttributes({ order: value }) }
                    options={ [
                        { value: 'asc', label: 'Ascending' },
                        { value: 'desc', label: 'Descending' },
                    ] }
                /> */}
                
                <div className='example-woocommerce-block-sidebar-label-text'>Order</div>
                <div className='example-woocommerce-block-button-group'>
                    <Button className={`example-woocommerce-block-sidebar-button ${order == "asc" ? 'active-button' : ''}`} onClick={()=> setAttributes({order: "asc"})}>Ascending</Button>
                    <Button className={`example-woocommerce-block-sidebar-button ${order == "desc" ? 'active-button' : ''}`} onClick={()=> setAttributes({order: "desc"})}>Descending</Button>
                </div>
                      </div>
                  )}
                  {tab.name === 'styles' && (
                      <>
                      styles
                      </>
                  )}
              </>
          )}
        </TabPanel>

                
             
            </InspectorControls>
            <div className="example-woocommerce-block">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    products.length > 0 ? (
                        products.map((product) => (
                            <div key={product.id} className="myProduct">
                                {product.thumbnail && <img src={product.thumbnail} alt={product.title} />}
                                <h2>{product.title}</h2>
                                <span className="price" dangerouslySetInnerHTML={{ __html: product.price }}></span>
                                <button className='add_to_cart_button wp-element-button'>Add to cart</button>
                            </div>
                        ))
                    ) : (
                        <p>No products found</p>
                    )
                )}
            </div>
        </div>
    );
}
