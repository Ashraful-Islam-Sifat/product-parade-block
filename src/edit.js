import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const products = useSelect((select) => {
        return select('core').getEntityRecords('postType', 'product', {
            per_page: -1,
            order: 'desc',
            orderby: 'date',
            _embed: true,
            context: 'view'
        });
    }, []);

    if (!products) {
        return <p>{__('Loading products...', 'example-woocommerce-block')}</p>;
    }

    if (products.length === 0) {
        return <p>{__('No products found', 'example-woocommerce-block')}</p>;
    }

    return (
        <div {...blockProps}>
            <InspectorControls>
                <p>Settings can go here</p>
            </InspectorControls>
            <div className='example-woocommerce-block'>
                {products.map((product) => {
                    const featuredMedia = product._embedded && product._embedded['wp:featuredmedia'] && product._embedded['wp:featuredmedia'][0];
                    let price = 'N/A';

                    // Check if price is available in meta data
                    if (product.meta_data) {
                        const priceMeta = product.meta_data.find(meta => meta.key === '_price');
                        if (priceMeta) {
                            price = priceMeta.value;
                        }
                    }

                    return (
                        <div key={product.id} className="myProduct">
                            <a href={product.link}>
                                {featuredMedia && <img src={featuredMedia.source_url} alt={product.title.rendered} />}
                                <h2>{product.title.rendered}</h2>
                            </a>
                            <span className="price">{price}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};