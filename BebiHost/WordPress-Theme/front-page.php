<?php
/**
 * The front page template file
 *
 * @package BebiHost
 */

get_header(); ?>

<main class="bebihost-main">
    <section class="hero-section">
        <div class="hero-content">
            <h1><?php echo get_theme_mod( 'hero_title', 'Enterprise-Grade Hosting for Your Digital Business' ); ?></h1>
            <p><?php echo get_theme_mod( 'hero_subtitle', 'Lightning-fast servers, 99.99% uptime, and 24/7 expert support. Built with modern infrastructure to scale with you.' ); ?></p>
            <div class="hero-actions">
                <a href="<?php echo esc_url( get_theme_mod( 'hero_btn1_url', '/pricing' ) ); ?>" class="btn btn-primary"><?php echo get_theme_mod( 'hero_btn1_text', 'View Plans' ); ?></a>
                <a href="<?php echo esc_url( get_theme_mod( 'hero_btn2_url', '/features' ) ); ?>" class="btn btn-secondary"><?php echo get_theme_mod( 'hero_btn2_text', 'Explore Features' ); ?></a>
            </div>
        </div>
        <div class="hero-graphics">
            <div class="live-statistics glass-panel">
                <div class="stat"><h3 style="color:var(--primary-color);">99.99%</h3><p>Uptime Guarantee</p></div>
                <div class="stat"><h3 style="color:var(--primary-color);">10Gbps</h3><p>Network Speed</p></div>
                <div class="stat"><h3 style="color:var(--primary-color);">24/7</h3><p>Expert Support</p></div>
            </div>
        </div>
    </section>

    <section class="domain-search-section glass-panel">
        <h2>Find Your Perfect Domain</h2>
        <form action="<?php echo esc_url( home_url( '/' ) ); ?>" method="GET" class="domain-search-form">
            <input type="text" name="domain_search" placeholder="Enter your domain name..." required>
            <select name="tld">
                <option value=".com">.com</option>
                <option value=".net">.net</option>
                <option value=".org">.org</option>
                <option value=".io">.io</option>
            </select>
            <button type="submit" class="btn btn-primary">Search</button>
        </form>
    </section>

    <section class="pricing-section">
        <h2>Premium Hosting Plans</h2>
        <div class="pricing-tables">
            <!-- These would ideally be custom post types or blocks, hardcoded for structural parity with HTML template -->
            <div class="pricing-card glass-panel">
                <h3 style="color:var(--primary-color);">Shared Hosting</h3>
                <p class="price">$4.99<span>/mo</span></p>
                <ul>
                    <li>1 Website</li>
                    <li>50GB NVMe Storage</li>
                    <li>Unmetered Bandwidth</li>
                    <li>Free SSL Certificate</li>
                </ul>
                <a href="#" class="btn btn-outline">Get Started</a>
            </div>
            <div class="pricing-card glass-panel popular">
                <div class="badge">Most Popular</div>
                <h3 style="color:var(--primary-color);">VPS Hosting</h3>
                <p class="price">$19.99<span>/mo</span></p>
                <ul>
                    <li>4 CPU Cores</li>
                    <li>8GB RAM</li>
                    <li>100GB NVMe Storage</li>
                    <li>Root Access</li>
                </ul>
                <a href="#" class="btn btn-primary">Get Started</a>
            </div>
            <div class="pricing-card glass-panel">
                <h3 style="color:var(--primary-color);">Cloud Hosting</h3>
                <p class="price">$49.99<span>/mo</span></p>
                <ul>
                    <li>Dedicated Resources</li>
                    <li>Auto-Scaling</li>
                    <li>Daily Backups</li>
                    <li>Advanced Security</li>
                </ul>
                <a href="#" class="btn btn-outline">Get Started</a>
            </div>
        </div>
    </section>

    <section class="features-section">
        <h2>Why Choose BebiHost?</h2>
        <div class="feature-cards">
            <div class="feature-card glass-panel">
                <h3 style="color:var(--primary-color);">Global Data Centers</h3>
                <p>Strategically located servers worldwide ensuring low latency and fast load times for your audience.</p>
            </div>
            <div class="feature-card glass-panel">
                <h3 style="color:var(--primary-color);">Advanced Security</h3>
                <p>Proactive DDoS protection, malware scanning, and free SSL certificates included in all plans.</p>
            </div>
            <div class="feature-card glass-panel">
                <h3 style="color:var(--primary-color);">24/7/365 Support</h3>
                <p>Our team of experts is available around the clock via live chat, ticket, and phone.</p>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
