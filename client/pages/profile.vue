<template>
    <main>
        <div class="container-fluid c-section">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="a-spacing-top-medium"></div>
                    <h2>Profile page</h2>
                    <a href="#" @click="onLogout"><b>Logout</b></a>
                    <form>
                        <div class="a-spacing-top-medium">
                            <label>Name</label>
                            <input class="w-100 a-input-text" type="text" v-model="name" :placeholder="loggedInUser.name" >
                        </div>

                        <div class="a-spacing-top-medium">
                            <label>Email</label>
                            <input class="w-100 a-input-text" type="text" v-model="email" :placeholder="loggedInUser.email" >
                        </div>

                        <div class="a-spacing-top-medium">
                            <label>Password</label>
                            <input class="w-100 a-input-text" type="text" v-model="password" >
                        </div>

                        <hr>
                        <div @click="onUpdateProfile" class="a-spacing-top-large">
                            <span class="a-button-register">
                                <span class="a-button-inner">
                                    <span class="a-button-text">
                                        Update profile
                                    </span>
                                </span>
                            </span>
                        </div>
                    </form>
                    <br>
                </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
    </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    middleware: ['auth'],
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
        async onUpdateProfile() {
            let data = {
                name: this.name,
                email: this.email,
                password: this.password
            }

            try {                
                let response = await this.$axios.$put("/api/auth/user", data);
                this.name = "";
                this.email = "";
                this.password = "";
                await this.$auth.fetchUser();
            } catch (error) {
                console.log(error);
            }
        },
        async onLogout() {
            console.log("test");
            await this.$auth.logout();
        }
    }
}
</script>

<style>
</style>
