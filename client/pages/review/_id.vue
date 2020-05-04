<template>
  <main>
    <div class="reviewPage mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-8">
            <div class="a-spacing-top-medium">
              <h1 class="a-spacing-base">
                <b>Create Review</b>
              </h1>
              <div class="row">
                <div class="col-md-2 col-sm-3 col-3">
                  <img :src="imgUrl + '/' + product.photo" style="width: 80px" />
                </div>
                <div class="col-md-10 col-sm-9 col-9 m-auto">
                  <h4>
                    <b>{{ product.title }}</b>
                  </h4>
                </div>
              </div>
              <div class="a-spacing-top-medium"></div>
              <hr />
              <h2 class="a-spacing-base">Overall Rating</h2>
              <hr />
              <div class="a-row mb-4">
                  Rating: <input type="number" min="1" max="5" v-model="rating" />
              </div>
              <div class="headline a-spacing-large">
                <h2 class="a-spacing-base">Add a headline</h2>
                <input
                  v-model="headline"
                  type="text"
                  class="a-input-text"
                  style="width: 70%;"
                  placeholder="What's most important to know?"
                />
              </div>
              <div class="a-spacing-base">
                <h2 class="a-spacing-base">Write your review</h2>
                <textarea v-model="body"
                  placeholder="What do you like or dislike? What did you see this product for?"
                  style="height:6em; width: 100%;"
                ></textarea>
              </div>
            </div>
            <br />
            <br />
            <hr />
            
            <div class="a-row text-right a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span @click="onAddReview" class="a-button-text">Submit</span>
                </span>
              </span>
            </div>
          </div>
          <div class="col-sm-2"></div>
        </div>
        <div class="a-spacing-large pb-5"></div>
        <hr />
      </div>
    </div>
  </main>
</template>

<script>
export default {
    middleware: ['auth'],
    async asyncData({ $axios, params }) {
        try {
            let product = await $axios.$get(`/api/products/${params.id}`);
            return { product }
        } catch (error) {
            console.log(error);
        }
    },
    computed: {
        imgUrl: function () {
            return process.env.IMG_URL;
        }
    },
    data() {
        return {
            rating: 2,
            body: "",
            headline: ""
        }
    },
    methods: {
        async onAddReview() {
            try {
                let data = {
                    "headline": this.headline,
                    "body": this.body,
                    "rating": this.rating
                }
                let par_id = this.$route.params.id;
                
                let resp = await this.$axios.$post(`/api/reviews/${par_id}`, data);
                this.$router.push(`/products/${par_id}`);
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>
<style>
</style>
