<template>
    <div class="login-route">
        <div>
            <img src="../../assets/logo-white.svg" alt="" style="height: 32px;">
            <div class="sign-in-form">
                <h1 class="heading">Sign in</h1>
                <div class="text" onclick="" data-v-sdfsddf23>Sign in with Google to manage your shortcut, subscription etc</div>
                <div class="button btn-google-sign-in" @click="onGoogleSignIn">Sign in with Google</div>
                <div>
                    <small>
                        By signing in, I agree to <a href="" target="_blank">Terms of Service</a> and <a href="">Privacy Policy</a>
                    </small>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Cookies from "js-cookie";

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
                    Cookies.set("loginAt", Date.now(), {expires: 365});
                    this.$router.replace(this.$route.query.redirect || "/");
                }
            });
        }
    }
</script>
<style scoped>

    .login-route {
        background: #507ce8 url(../../assets/icons-background.svg) no-repeat;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn-google-sign-in {
        letter-spacing: 1px;
        border: none;
        width: 280px;
        border-radius: 4px;
        margin: 30px auto;
        color: #777;
        text-transform: none;
        text-shadow: none;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
        padding: 10px 25px 10px 50px;
        background: #fff url(../../assets/google-g.png) no-repeat 16% 50%;
        background-size: 18px;
        cursor: pointer;
    }

    .btn-google-sign-in:hover {
        color: #000000;
    }

    .sign-in-form {
        background-color: #FFFFFF;
        padding: 2rem 1.4rem;
        border-radius: 14px;
        margin: 3rem;
    }

    .heading {
        font-size: 36px;
        font-weight: 600;
        margin: 0;
        line-height: 60px;
    }

    .text {
        font-size: 17px;
        width: 80%;
        margin: auto;
    }


    a {
        text-decoration: none;
        color: #3273dc;
    }

    a:hover {
        color: #4a4a4a;
    }
</style>