<?php
/**
 * BebiHost functions and definitions
 *
 * @package BebiHost
 */

if ( ! defined( 'ABSPATH' ) ) {
    die; // Exit if accessed directly.
}

function bebihost_setup() {
    add_theme_support( 'automatic-feed-links' );
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    register_nav_menus( array(
        'menu-1' => esc_html__( 'Primary', 'bebihost' ),
        'footer-hosting' => esc_html__( 'Footer Hosting', 'bebihost' ),
        'footer-company' => esc_html__( 'Footer Company', 'bebihost' ),
    ) );
    add_theme_support( 'html5', array(
        'search-form', 'comment-form', 'comment-list', 'gallery', 'caption',
    ) );
    add_theme_support( 'custom-logo', array(
        'height'      => 250,
        'width'       => 250,
        'flex-width'  => true,
        'flex-height' => true,
    ) );
    add_theme_support( 'align-wide' );
    add_theme_support( 'wp-block-styles' );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'editor-styles' );
}
add_action( 'after_setup_theme', 'bebihost_setup' );

function bebihost_scripts() {
    // Load local CSS
    wp_enqueue_style( 'bebihost-style', get_stylesheet_uri(), array(), '1.0.0' );
    // Load local shared assets if copied into the theme
    if ( file_exists( get_template_directory() . '/assets/css/styles.css' ) ) {
        wp_enqueue_style( 'bebihost-main-style', get_template_directory_uri() . '/assets/css/styles.css', array(), '1.0.0' );
    }
    if ( file_exists( get_template_directory() . '/assets/js/main.js' ) ) {
        wp_enqueue_script( 'bebihost-main-js', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.0', true );
    }
}
add_action( 'wp_enqueue_scripts', 'bebihost_scripts' );
