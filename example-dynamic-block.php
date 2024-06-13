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

// Render the block on the frontend
function example_woocommerce_block_render_callback($attributes) {
  // Fetch products using WP_Query or WooCommerce functions
  $args = array(
      'post_type' => 'product',
      'posts_per_page' => 999,
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

function wpdev_example_woocommerce_block_block_init() {
  wp_register_style('blockCss', plugin_dir_url(__FILE__) . 'assets/block.css', [], '1.0', 'all');

  register_block_type(__DIR__ . '/build', array(
      'render_callback' => 'example_woocommerce_block_render_callback',
      'style' => array('blockCss', 'exampleSwiperStyles')
  ));
}
add_action('init', 'wpdev_example_woocommerce_block_block_init');
