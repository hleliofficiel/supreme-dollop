<?php
/**
 * The main template file
 *
 * @package BebiHost
 */

get_header(); ?>

<main class="bebihost-main page-content" style="padding: 4rem 2rem; max-width: 1200px; margin: 0 auto; min-height: 60vh;">
    <div class="glass-panel">
        <?php
        if ( have_posts() ) :
            while ( have_posts() ) : the_post();
                ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <header class="entry-header" style="margin-bottom: 2rem;">
                        <?php the_title( '<h1 class="entry-title" style="color: var(--primary-color);">', '</h1>' ); ?>
                    </header>
                    <div class="entry-content" style="color: var(--text-muted); font-size: 1.125rem;">
                        <?php the_content(); ?>
                    </div>
                </article>
                <?php
            endwhile;
            the_posts_navigation();
        else :
            echo '<p style="color: var(--text-muted);">No content found. Please check back later.</p>';
        endif;
        ?>
    </div>
</main>

<?php get_footer(); ?>
