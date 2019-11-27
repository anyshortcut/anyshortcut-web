<template>
    <div class="login-route">
        <img src="../assets/logo-white.svg" alt="" style="height: 32px;">
        <div>
            <h1>Sign in</h1>
            <div>Sign in with Google to manage your shortcut, subscription etc</div>
            <div class="button btn-google-sign-in" @click="onGoogleSignIn">Sign in with Google</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Login",
        methods: {
            onGoogleSignIn() {
                let width = 450, height = 600;
                let screenLeft = window.screenLeft ? window.screenLeft : screen.left,
                    screenTop = window.screenTop ? window.screenTop : screen.top,
                    innerWidth = window.innerWidth,
                    innerHeight = window.innerHeight,
                    left = parseInt(innerWidth / 2 - width / 2 + screenLeft),
                    top = parseInt(innerHeight / 2 - height / 2 + screenTop);
                let windowFeatures = `width=${width},height=${height},top=${top},left=${left},
        resizable=yes,scrollbars=yes,status=no,toolbar=no,menubar=no,location=no`;
                let authWindow = window.open('https://anyshortcut.com/oauth/google', 'Anyshortcut', windowFeatures);
                authWindow.focus && authWindow.focus();
            }
        },
        mounted() {
            window.addEventListener('message', event => {
                if (event.data.action === 'logged-in') {
                    this.$router.replace("/");
                }
            });
        }
    }
</script>
<style>
    .login-route {
        background: #507ce8 url(../assets/icons-background.svg) no-repeat;
        width: 100%;
        height: 100vh;
    }

    .btn-google-sign-in {
        letter-spacing: 1px;
        border: none;
        width: 320px;
        border-radius: 4px;
        margin: 30px auto;
        color: #777;
        text-transform: none;
        text-shadow: none;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
        padding: 10px 25px 10px 50px;
        background-size: 18px;
        background: #fff url(../assets/google-g.png) no-repeat 8% 50%;
        cursor: pointer;
    }

</style>