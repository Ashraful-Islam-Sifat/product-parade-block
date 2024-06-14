<?php
/**
 * Plugin Name:       Example WooCommerce Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       example-woocommerce-block
 *
 * @package Wpdev
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}


// global $args;
// $args = array(
//   'post_type' => 'product',
//   'posts_per_page' => 5,
//   'orderby' => 'date',
//   'order' => 'DESC'
// );

// Render the block on the frontend
function example_woocommerce_block_render_callback($attributes) {
    // Fetch products using WP_Query or WooCommerce functions
    $postPerPage = $attributes['postPerPage'];
    $args = array(
        'post_type' => 'product',
        'posts_per_page' => $attributes['postPerPage'],
        'orderby' => 'date',
        'order' => 'DESC'
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

        // Fetch the product price
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

// Handle AJAX request to fetch product prices
function fetch_product_prices($attributes) {
  // Check nonce for security
  check_ajax_referer('example_woocommerce_block_nonce', 'nonce');

  // Fetch products using WP_Query or WooCommerce functions
  $args = array(
      'post_type' => 'product',
      'posts_per_page' => $attributes['postPerPage'],
      'orderby' => 'date',
      'order' => 'DESC'
  );
  $query = new WP_Query($args);

  $products = array();
  if ($query->have_posts()) {
      while ($query->have_posts()) {
          $query->the_post();
          global $product;

          $products[] = array(
              'id' => get_the_ID(),
              'title' => get_the_title(),
              'price' => $product->get_price_html(),
              'permalink' => get_the_permalink(),
              'thumbnail' => woocommerce_get_product_thumbnail()
          );
      }
      wp_reset_postdata();
  }

  wp_send_json_success($products);
}

add_action('wp_ajax_fetch_product_prices', 'fetch_product_prices');
add_action('wp_ajax_nopriv_fetch_product_prices', 'fetch_product_prices');

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

    // Localize script with nonce and AJAX URL
    wp_localize_script('example-woocommerce-block-editor', 'exampleWooCommerceBlock', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('example_woocommerce_block_nonce')
    ));
}

add_action('init', 'wpdev_example_woocommerce_block_block_init');
