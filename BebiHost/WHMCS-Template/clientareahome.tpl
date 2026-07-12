<div class="glass-panel client-area-dashboard">
    <h1>{\$LANG.clientareatitle}</h1>
    <div class="dashboard-stats" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
        <div class="stat-card glass-panel" style="padding: 1.5rem;">
            <h3 style="color: var(--text-muted); font-size: 1rem;">{\$LANG.navservices}</h3>
            <p style="font-size: 2.5rem; font-weight: 700; color: var(--primary-color);">{\$clientsstats.productsnumactive}</p>
        </div>
        <div class="stat-card glass-panel" style="padding: 1.5rem;">
            <h3 style="color: var(--text-muted); font-size: 1rem;">{\$LANG.navdomains}</h3>
            <p style="font-size: 2.5rem; font-weight: 700; color: var(--primary-color);">{\$clientsstats.numactivedomains}</p>
        </div>
        <div class="stat-card glass-panel" style="padding: 1.5rem;">
            <h3 style="color: var(--text-muted); font-size: 1rem;">{\$LANG.navinvoices}</h3>
            <p style="font-size: 2.5rem; font-weight: 700; color: #ef4444;">{\$clientsstats.numunpaidinvoices}</p>
        </div>
        <div class="stat-card glass-panel" style="padding: 1.5rem;">
            <h3 style="color: var(--text-muted); font-size: 1rem;">{\$LANG.navtickets}</h3>
            <p style="font-size: 2.5rem; font-weight: 700; color: var(--secondary-color);">{\$clientsstats.numactivetickets}</p>
        </div>
    </div>

    <div class="dashboard-recent" style="margin-top: 3rem;">
        <h2>{\$LANG.recenttickets}</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
            <thead>
                <tr style="border-bottom: 1px solid var(--glass-border);">
                    <th style="padding: 1rem; text-align: left;">{\$LANG.supportticketssubject}</th>
                    <th style="padding: 1rem; text-align: left;">{\$LANG.supportticketsstatus}</th>
                    <th style="padding: 1rem; text-align: left;">{\$LANG.supportticketsticketlastupdated}</th>
                </tr>
            </thead>
            <tbody>
                {foreach from=\$tickets item=ticket}
                    <tr style="border-bottom: 1px solid var(--glass-border);">
                        <td style="padding: 1rem;"><a href="viewticket.php?tid={\$ticket.tid}&amp;c={\$ticket.c}">#{\$ticket.tid} - {\$ticket.subject}</a></td>
                        <td style="padding: 1rem;">{\$ticket.status}</td>
                        <td style="padding: 1rem;">{\$ticket.lastreply}</td>
                    </tr>
                {foreachelse}
                    <tr>
                        <td colspan="3" style="padding: 1rem; text-align: center;">{\$LANG.norecordsfound}</td>
                    </tr>
                {/foreach}
            </tbody>
        </table>
    </div>
</div>
