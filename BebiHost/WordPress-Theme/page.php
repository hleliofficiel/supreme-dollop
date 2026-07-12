<?php
/**
 * The template for displaying all single pages
 *
 * @package BebiHost
 */

get_header(); ?>

<main class="bebihost-main page-content" style="padding: 4rem 2rem; max-width: 1200px; margin: 0 auto; min-height: 60vh;">
    <div class="glass-panel">
        <?php
        while ( have_posts() ) :
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header" style="margin-bottom: 2rem;">
                    <?php the_title( '<h1 class="entry-title" style="color: var(--primary-color);">', '</h1>' ); ?>
                </header>
                <div class="entry-content" style="color: var(--text-muted); font-size: 1.125rem;">
                    <?php
                    the_content();
                    wp_link_pages( array(
                        'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'bebihost' ),
                        'after'  => '</div>',
                    ) );
                    ?>
                </div>
            </article>
            <?php
            // If comments are open or we have at least one comment, load up the comment template.
            if ( comments_open() || get_comments_number() ) :
                comments_template();
            endif;
        endwhile; // End of the loop.
        ?>
    </div>
</main>

<?php get_footer(); ?>
