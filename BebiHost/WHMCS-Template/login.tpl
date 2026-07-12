<div class="login-container glass-panel" style="max-width: 500px; margin: 4rem auto; text-align: center;">
    <h2>{\$LANG.loginbutton}</h2>
    <p style="margin-bottom: 2rem;">{\$LANG.restrictedpagehalf}</p>

    {if \$incorrect}
        <div class="alert alert-danger" style="color: #ef4444; margin-bottom: 1rem;">
            {\$LANG.loginincorrect}
        </div>
    {/if}

    <form method="post" action="{\$systemurl}dologin.php" class="contact-form" style="display: flex; flex-direction: column; gap: 1rem; text-align: left;">
        <div>
            <label for="inputEmail">{\$LANG.clientareaemail}</label>
            <input type="email" name="username" id="inputEmail" placeholder="{\$LANG.enteremail}" required autofocus style="width: 100%; padding: 1rem; border-radius: 8px; border: var(--glass-border); background: var(--bg-color); color: var(--text-color);">
        </div>
        <div>
            <label for="inputPassword">{\$LANG.clientareapassword}</label>
            <input type="password" name="password" id="inputPassword" placeholder="{\$LANG.clientareapassword}" required style="width: 100%; padding: 1rem; border-radius: 8px; border: var(--glass-border); background: var(--bg-color); color: var(--text-color);">
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
            <label>
                <input type="checkbox" name="rememberme"> {\$LANG.loginrememberme}
            </label>
            <a href="pwreset.php">{\$LANG.forgotpw}</a>
        </div>
        <button type="submit" class="btn btn-primary" style="margin-top: 1rem;">{\$LANG.loginbutton}</button>
    </form>
</div>
