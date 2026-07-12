<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="{\$charset}" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>{\$companyname} - {\$pagetitle}</title>

    {include file="\$template/includes/head.tpl"}

    <link href="{\$WEB_ROOT}/templates/{\$template}/assets/css/styles.css" rel="stylesheet">
</head>
<body data-phone-cc-input="{\$phoneNumberInputStyle}">

<header class="glass-panel main-header">
    <div class="logo">{\$companyname}</div>
    <nav class="mega-menu">
        <ul>
            <li><a href="{\$WEB_ROOT}/index.php">{\$LANG.hometitle}</a></li>
            <li><a href="{\$WEB_ROOT}/clientarea.php">{\$LANG.clientareatitle}</a></li>
            <li><a href="{\$WEB_ROOT}/submitticket.php">{\$LANG.navopenticket}</a></li>
        </ul>
    </nav>
    <div class="header-actions">
        {if \$loggedin}
            <a href="{\$WEB_ROOT}/logout.php" class="btn btn-outline">{\$LANG.logouttitle}</a>
        {else}
            <a href="{\$WEB_ROOT}/clientarea.php" class="btn btn-outline">{\$LANG.loginbutton}</a>
        {/if}
        <button class="theme-toggle" id="theme-toggle">🌓</button>
    </div>
</header>

<main class="page-content" style="padding: 4rem 2rem; max-width: 1400px; margin: 0 auto; min-height: 60vh;">
