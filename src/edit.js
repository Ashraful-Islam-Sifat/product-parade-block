import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    console.log(products);

    useEffect(() => {
        // Fetch product prices via AJAX
        fetch(exampleWooCommerceBlock.ajax_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            body: `action=fetch_product_prices&nonce=${exampleWooCommerceBlock.nonce}`,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                setProducts(data.data);
                setAttributes({ productPrices: data.data });
            } else {
                console.error('Failed to fetch product prices');
            }
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching product prices:', error);
            setLoading(false);
        });
    }, []);


    // return (
    //     <div {...blockProps}>
    //         <InspectorControls>
    //             <p>Settings can go here</p>
    //         </InspectorControls>
    //         <div className='example-woocommerce-block'>
    //             {products.map((product) => {
    //                 const featuredMedia = product._embedded && product._embedded['wp:featuredmedia'] && product._embedded['wp:featuredmedia'][0];
    //                 let price = 'N/A';

    //                 // Check if price is available in meta data
    //                 if (product.meta_data) {
    //                     const priceMeta = product.meta_data.find(meta => meta.key === '_price');
    //                     if (priceMeta) {
    //                         price = priceMeta.value;
    //                     }
    //                 }

    //                 return (
    //                     <div key={product.id} className="myProduct">
    //                             {featuredMedia && <img src={featuredMedia.source_url} alt={product.title.rendered} />}
    //                             <h2>{product.title.rendered}</h2>
    //                         <span className="price">{price}</span>
    //                         <button className='add_to_cart_button wp-element-button '>Add to cart</button>
    //                     </div>
    //                 );
    //             })}
    //         </div>
    //     </div>
    // );


    return (
        <div {...blockProps}>
            <div className="example-woocommerce-block">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    products.length > 0 ? (
                        products.map((product) => (
                            <div key={product.id} className="myProduct">
                                <div dangerouslySetInnerHTML={{ __html: product.thumbnail }}></div>
                                <h2>{product.title}</h2>
                                <span className="price" dangerouslySetInnerHTML={{ __html: product.price }}></span>
                                <button className='add_to_cart_button wp-element-button '>Add to cart</button>
                            </div>
                        ))
                    ) : (
                        <p>No products found</p>
                    )
                )}
            </div>
        </div>
    );
};