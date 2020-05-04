<template>
    <div>
        <header class="">
            <header class="nav-opt-sprite nav-locate-us nav-lang-en nav-ssl nav-unrec">
                <div class="container-fluid dekstop-nav">
                    <div class="row">
                        <div class="col-sm-2">
                            <div class="logo-area">
                                <nuxt-link to="/">
                                    <img src="/img/logo.png" alt="Logo" class="img-fluid" >
                                </nuxt-link>
                            </div>
                        </div>

                        <div class="col-sm-6 pt-0">
                            <Search />
                        </div>
                        <div class="col-sm-4"></div>

                    </div>

                    <div class="row">
                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 pl-2">
                            <div class="nav-global-location">
                                <nuxt-link to="/address" class="nav-a nav-a-2">
                                    <div class="nav-sprice" id="nav-packard-glow-loc-icon">
                                    </div>
                                    <div class="glow-ingress-block">
                                        <span id="glow-ingress-line1" class="nav-line-1">
                                            <i class="fas fa-globe"></i> Deliver to <br><span class="pl-3">California</span>
                                        </span>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-5 col-md-4 col-sm-6 p-0">
                            <div class="nav-fill">
                                <div class="nav-shop">
                                    <nuxt-link to="/history" class="nav-a nav-a-2 nav-single-row-link">
                                        <span class="nav-line-2">
                                            Browsing History
                                            <span style="visability: visible" class="nav-icon nav-arrow">

                                            </span>
                                        </span>
                                    </nuxt-link>
                                </div>
                                <div class="nav-xshop-container">
                                    <div class="nav-xshop">
                                        <a href="#" class="nav-a">Today's deals</a>
                                        <a href="#" class="nav-a">Your amazon.com</a>
                                        <a href="#" class="nav-a">Gift cards</a>
                                        <a href="#" class="nav-a">Registery</a>
                                        <a href="#" class="nav-a">Sell</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-4 p-0">
                            <div class="nav-tools">
                                <a href="#" 
                                class="nav-a nav-a-2 icp-link-style-2"
                                id="icp-nav-flyout">
                                    <span class="icp-nav-link-inner">
                                        <span class="nav-line-1">
                                            <span class="icp-nav-globe-img-2"></span>
                                            <span class="icp-nav-language">EN</span>
                                        </span>
                                        
                                        <span class="ml-2 nav-line-2">                                            
                                            <span style="visability: visible"
                                            class="nav-icon nav-arrow">
                                            </span>
                                        </span>
                                    </span>
                                </a>
                                <template v-if="isAuthenticated">
                                    <nuxt-link to="/profile" id="nav-link-accountList"
                                    tabindex="0" class="nav-a nav-a-2">
                                       <span class="nav-line-1" >Hello</span>
                                       <span class="nav-line-2">
                                            {{ loggedInUser.name }}
                                            <span class="nav-icon nav-arrow" 
                                            style="visability: visible" ></span>
                                       </span>
                                    </nuxt-link>
                                </template>
                                <template v-else>
                                    <nuxt-link to="/signup" id="nav-link-accountList"
                                        tabindex="0" class="nav-a nav-a-2">
                                        <span class="nav-line-1" >Hello, Sign in</span>
                                        <span class="nav-line-2">
                                            Account &amp; Lists
                                            <span class="nav-icon nav-arrow" 
                                            style="visability: visible" ></span>
                                        </span>
                                    </nuxt-link>
                                </template>

                                <nuxt-link to="/orders" class="nav-a nav-a-2 nav-single-row-link">
                                    <span class="nav-line-1"></span>
                                    <span class="nav-line-2">Orders</span>
                                </nuxt-link>
                                <nuxt-link to="/cart" class="nav-a nav-a-2 nav-single-row-link">
                                    <span class="nav-line-1"></span>
                                    <span class="nav-line-2">
                                    <i class="fas fa-shopping-basket"></i> Cart (10)</span>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>


                </div>
            </header>
        </header>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Search from "~/components/Search";

export default {
    components: {
        Search
    },
    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser'])
    }
}
</script>

<style>
</style>
