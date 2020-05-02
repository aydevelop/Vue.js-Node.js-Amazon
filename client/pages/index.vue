<template>
  <main class="listingPage">
    <div class="counter-fluid">
      <div class="row">
        <div class="col-xl-2 col-lg-3 md-4 col-sm-4">
          sidebar
        </div>
        <div class="col-xl-10 col-lg-9 md-8 col-sm-8">
          <FeaturedProduct />
          <hr>              
          <div>                          
            <div class="mainResults mt-4">
              <ul class="s-result-list">
                <li class="s-result-item celwidget" 
                :key="product._id"
                v-for="product in products">
                  <div class="s-item-container">

                    <div class="a-spacing-micro">
                      <div class="bestSeller">
                        <a href="#">Best Seller</a>
                      </div>
                    </div>

                    <div>
                      <div class="row">
                      <div class="col-sm-3 text-center">
                        <a href="#" class="text-left">
                          <img style="position: relative; left: 15px" :src="imgUrl + '/' + product.photo" class="img-fluid">
                        </a>
                      </div>

                      <div class="col-sm-9">
                      <div class="a-row a-spacing-small">
                        <a href="#" class="a-link-normal">
                          <h2 class="a-size-medium">
                            {{ product.title }}
                            <span class="a-letter-space"></span>
                            <span class="a-letter-space" ></span>
                            <span class="a-size-small a-color-secondary">
                              Sep 3, 2019
                            </span>
                          </h2>
                        </a>
                      </div>

                      <div v-if="product.owner" class="a-row a-spacing-small">
                        <span class="a-size-small a-color-secondary">
                          by
                        </span>
                        <span class="a-size-small a-color-secondary">
                          <a href="#"  class="a-link-normal a-text-normal">
                            {{ product.owner.name }}
                          </a>
                        </span>
                      </div>

                      <div class="a-row">
                        <span class="a-size-small">
                          Ships to USA
                        </span>
                      </div>

                      <div class="row">
                        <div class="col-sm-7">
                          <div class="a-row a-spacing-none">
                            <a href="#" class="a-link-normal a-text-normal">
                              Hardcover
                            </a>
                          </div>

                          <div class="a-row a-spacing-none">
                            <a href="#" class="a-link-normal a-text-normal" >
                              <span class="a-offscreen">
                                $999
                              </span>
                              <span class="a-color-base sx-zero-spacing">
                                <span class="sx-price sx-price-large">
                                  <sup class="sx-price-currency" >$</sup>
                                  <span class="xs-price-whole">
                                    5
                                  </span>
                                  <sup class="sx-price-fractional">
                                    00
                                  </sup>
                                </span>
                              </span>
                            </a>
                            <span class="a-letter-space"></span>
                            <span class="a-size-base-plus a-color-secondary a-text-strike" >
                              ${{ product.price }}
                            </span>
                          </div>

                          <div class="a-row a-spacing-none">
                            <span class="a-size-small a-color-secondary">
                              Free with Audible trial
                            </span>
                          </div>

                          <span class="a-size-small a-color-secondary">
                            Other Formats:
                            <span class="a-letter-space"></span>
                            <a href="#" class="a-size-small a-link-normal a-text-normal">
                              Audio CD
                            </a>
                          </span>
                        </div>

                        <div class="col-sm-5">
                          <div class="a-row a-spacing-mini">

                          </div>
                        </div>

                      </div>
                    </div>
                      </div>
                    </div>

                    

                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import FeaturedProduct from '~/components/FeaturedProduct.vue'

export default {
  components: {
    FeaturedProduct
  },

  async asyncData({ $axios }) {
    try {
      let resp = await $axios.$get("/products");
      return {
        products: resp
      }

    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    imgUrl: function () {
      return process.env.IMG_URL;
    }
  },

}
</script>

<style>
</style>
