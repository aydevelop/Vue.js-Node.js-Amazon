<template>
    <div class="registerPage">
        <div class="container">
            <div class="row mt-3">
                <div class="col-sm-4">
                </div>

                <form class="col-sm-4">
                    <!-- <div class="text-center">
                        <a href="#">
                            <img src="/img/logo-black.png" alt="">
                        </a>
                    </div> -->
                    <div class="a-box a-spacing-extra-large">
                        <div class="a-box-inner">
                            <h1 class="a-spacing-small">
                                Create account
                             </h1>   
                                <div class="a-row a-spacing-base">
                                    <label 
                                    class="a-form-label"
                                    for="ap_customer_name">
                                        Your name
                                    </label>
                                    <input v-model="name" type="text" id="ap_customer_name"
                                        class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                                    >
                                </div>

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
                                        <div class="a-alert-content">
                                            Password must be at least 6 characteres
                                        </div>        
                                    </div>
                                </div>

                                <div class="a-row a-spacing-extra-large mb-4">
                                    <span class="a-button-primary">
                                        <span class="a-button-inner">
                                            <span @click.prevent="onSignup" class="a-button-text">
                                                Create your account
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <hr>

                                <div class="a-row">
                                    <b>
                                        Already have an account?
                                        <nuxt-link to="/login" >
                                            Sign in
                                        </nuxt-link>
                                    </b>
                                </div>

                        </div>
                    </div>
                </form>

            </div>
        </div>
        <hr>
        {{
            isAuthenticated
        }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    layout: "none",
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser'])
    },
    methods: {
        async onSignup() {
            try {
                let data = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }

                await this.$axios.$post("/api/auth/signup", data);
                await this.$auth.loginWith("local", {
                    data: {
                        email: this.email,
                        password: this.password
                    }
                });
                
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style>
</style>
