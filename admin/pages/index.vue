<template>
  <main>
    <div class="a-spacing-large"></div>
    
    <div class="container-fluid browsing-history">
      <div class="row">
        <div class="col-sm-8 col-8">
          <h1 class="a-size-large a-spacing-none a-text-normal"></h1>
          <div class="a-spacing-large"></div>

          <a href="#" class="a-button-buy-again">Add a new product</a>
          <a href="#" class="a-button-buy-again margin-right-10">Add a new category</a>
          <a href="#" class="a-button-buy-again margin-right-10">Add a new owner</a>
        
        </div>
      </div>
    </div>

    <div class="a-spacing-large"></div>
    <div class="conteiner-fluid browsing-history">
      <div class="row ml-1">
        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 br bb">
          <div class="history-box">
            <a href="" class="a-link-normal">
              <img src="#" class="img-fluid">
            </a>
            <div class="a-spacing-top-base asin-title">
              <span class="a-text-normal" >
                <div class="p13n-sc-truncate">
                  Product title
                </div>
              </span>
            </div>
            <div class="a-row">
              <a href="">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </a>
              <span class="a-letter-space"></span>
              <span class="a-color-tertiary a-size-small asin-reviews">(4394)</span>
            </div>
            <div class="a-row">
              <span class="a-size-base a-color-price">
                  <span class="p13n-sc-price">$38</span>
              </span>
            </div>
            <div class="a-row">
              <a href="" class="a-button-history margin-right-10">Update</a>
              <a href="" class="a-button-history margin-right-10">Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <pre>
      {{ products }}
    </pre>
  </main>

</template>

<script>
export default {
  async asyncData ({ $axios }) {
    try{
      let resp = await $axios.$get("http://localhost:3001/api/products");
      return {
        products: resp
      };
      console.log("Resp: " + resp);
    } catch(err) {
      console.log("Error: " + err);
    }
  }
}
</script>

<style>
</style>
  