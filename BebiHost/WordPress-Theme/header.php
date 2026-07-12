<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'bebihost' ); ?></a>

    <header class="glass-panel main-header">
        <div class="site-branding logo" style="font-weight: 700; font-size: 1.5rem; color: var(--primary-color);">
            <?php
            if ( has_custom_logo() ) {
                the_custom_logo();
            } else {
                ?>
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" style="text-decoration: none; color: inherit;"><?php bloginfo( 'name' ); ?></a>
                <?php
            }
            ?>
        </div><!-- .site-branding -->

        <nav id="site-navigation" class="mega-menu">
            <?php
            wp_nav_menu( array(
                'theme_location' => 'menu-1',
                'menu_id'        => 'primary-menu',
                'container'      => false,
                'fallback_cb'    => false,
            ) );
            ?>
        </nav><!-- #site-navigation -->

        <div class="header-actions">
            <a href="/client-area" class="btn btn-outline">Client Login</a>
            <button class="theme-toggle" id="theme-toggle">🌓</button>
        </div>
    </header><!-- #masthead -->
