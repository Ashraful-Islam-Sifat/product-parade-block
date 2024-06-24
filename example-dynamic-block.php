<?php
/**
 * Plugin Name:       Example WooCommerce Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Sifat
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       example-woocommerce-block
 *
 * @package Wpdev
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

// Render the block on the frontend
function example_woocommerce_block_render_callback($attributes) {
    $args = array(
        'post_type' => 'product',
        'posts_per_page' => $attributes['postPerPage'],
        'orderby' => $attributes['orderBy'],
        'order' => $attributes['order']
    );
    $query = new WP_Query($args);

    if (!$query->have_posts()) {
        return '<p>No products found</p>';
    }

    $content = '<div ' . get_block_wrapper_attributes() . '>';
    $content .= '<div class="example-woocommerce-block">';

    while ($query->have_posts()) {
        $query->the_post();
        global $product;

        $price_html = $product->get_price_html();

        $content .= '<div class="myProduct">';
        $content .= '<a href="' . get_the_permalink() . '">';
        $content .= woocommerce_get_product_thumbnail();
        $content .= '<h2>' . get_the_title() . '</h2>';
        $content .= '</a>';
        $content .= '<span class="price">' . $price_html . '</span>';
        $content .=  do_shortcode('[add_to_cart id="' . get_the_ID() . '" show_price="false" style="" class="add-to-cart"]' );
        $content .= '</div>';
    }

    $content .= '</div>';
    $content .= '</div>';

    wp_reset_postdata();

    return $content;
}

function fetch_product_data() {
	$args          = array(
		'post_type'      => 'product',
		'posts_per_page' => -1,
		'post_status'    => 'publish',
	);
	$products      = get_posts( $args );
	$products_data = array();

	foreach ( $products as $product ) {
		$product_id  = $product->ID;
		$product_item = wc_get_product( $product_id );

		$product_data[] = array(
			'id'    => $product_id,
			'price' => $product_item->get_price_html(),
			'rating' => $product_item->get_average_rating(),
			'onSale' => $product_item->is_on_sale() ? true : false,
		);
	}
	return $product_data;
}

function wpdev_example_woocommerce_block_block_init() {
    wp_register_style('blockCss', plugin_dir_url(__FILE__) . 'assets/block.css', [], '1.0', 'all');

    register_block_type(__DIR__ . '/build', array(
        'render_callback' => 'example_woocommerce_block_render_callback',
        'style' => array('blockCss', 'exampleSwiperStyles')
    ));

    // Enqueue script for block editor
    wp_enqueue_script(
        'example-woocommerce-block-editor',
        plugins_url('build/index.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor'),
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js'),
        true
    );

    // Localize script with product data
    wp_localize_script('example-woocommerce-block-editor', 'exampleWooCommerceBlock', array(
        'productsMeta' => fetch_product_data()
    ));
}

add_action('init', 'wpdev_example_woocommerce_block_block_init');
