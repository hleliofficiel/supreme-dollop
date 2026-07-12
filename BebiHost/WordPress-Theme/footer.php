    <footer class="site-footer">
        <div class="footer-columns">
            <div class="col">
                <h4><?php bloginfo( 'name' ); ?></h4>
                <p><?php echo get_bloginfo( 'description', 'display' ); ?></p>
            </div>
            <div class="col">
                <h4>Hosting</h4>
                <?php
                if ( has_nav_menu( 'footer-hosting' ) ) {
                    wp_nav_menu( array( 'theme_location' => 'footer-hosting', 'container' => false ) );
                } else {
                    echo '<ul><li><a href="#">Shared Hosting</a></li><li><a href="#">VPS Hosting</a></li><li><a href="#">Dedicated Servers</a></li></ul>';
                }
                ?>
            </div>
            <div class="col">
                <h4>Company</h4>
                <?php
                if ( has_nav_menu( 'footer-company' ) ) {
                    wp_nav_menu( array( 'theme_location' => 'footer-company', 'container' => false ) );
                } else {
                    echo '<ul><li><a href="#">About Us</a></li><li><a href="#">Contact</a></li><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms of Service</a></li></ul>';
                }
                ?>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>. All rights reserved.</p>
        </div>
    </footer>
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
