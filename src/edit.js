import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    
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