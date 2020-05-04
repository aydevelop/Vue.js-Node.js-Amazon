<template>
    <div class="registerPage">
        <div class="container">
            <div class="row mt-3">
                <div class="col-sm-4">
                </div>

                <form class="col-sm-4">
                    <div class="text-center mb-4">
                        <nuxt-link to="/">
                            <img src="/img/logo-black.png" alt="">
                        </nuxt-link>
                    </div>
                    <div class="a-box a-spacing-extra-large">
                        <div class="a-box-inner">
                            <h1 class="a-spacing-small">
                                Sign in
                             </h1>  
                                <div class="a-row a-spacing-base">
                                    <label 
                                    class="a-form-label"
                                    for="ap_customer_email">
                                        Your email
                                    </label>
                                    <input v-model="email" type="email" id="ap_customer_email"
                                        class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                                    >
                                </div>

                                <div class="a-row a-spacing-base">
                                    <label 
                                    class="a-form-label"
                                    for="ap_customer_password">
                                        Your password
                                    </label>
                                    <input v-model="password" type="password" id="ap_customer_password"
                                        class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                                    >
                                    <div class="a-alert-container">
                                    </div>
                                </div>

                                <div class="a-row a-spacing-extra-large mb-4">
                                    <span class="a-button-primary">
                                        <span class="a-button-inner">
                                            <span @click.prevent="onLogin" class="a-button-text">
                                                Continue
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <hr>

                                <div class="a-row">
                                    <b>
                                        Don't have an account?
                                        <nuxt-link to="/signup" >
                                            Register
                                        </nuxt-link>
                                    </b>
                                </div>

                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    middleware: ['auth'],
    auth: "guest",
    layout: "none",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser'])
    },
    methods: {
        async onLogin() {
            try {

                await this.$auth.loginWith("local", {
                    data: {
                        email: this.email,
                        password: this.password
                    }
                });
                
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style>
</style>
