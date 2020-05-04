<template>
  <div>
    <hr />
    <div class="reviewsMedley">
      <div class="row">
        <div class="col-lg-4 col-md-5 col-sm-12">
         
        
         
          <div class="a-row a-spacing-large">Share your thoughts with other customers</div>
          <div class="a-row">
            <span class="a-button-base writeReviewButton cm-cr-button-wide">
              <span class="a-button-inner">
                <nuxt-link :to="`/review/${product._id}`" class="a-button-text">Write a customer review</nuxt-link>
              </span>
            </span>
          </div>
          <div class="clearfix">
            <div class="float-left">
              <hr class="mt-4 a-spacing-large" />
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-7 col-sm-12">
          <div class="reviews-image-gallery">
            <h3>Customer reviews</h3>
            <div class="a-spacing-small a-spacing-top-small">
              <img class="img-fluid" width="22.5%" />
            </div>
          </div>
        
          <div class="cr-widget-focalreviews">
            <div class="card-padding">
              <div class="review-body" v-for="review in reviews" :key="review._id">
                <div class="genome-widget">
                  <a href="#">
                    <div class="profile-avatar">
                      <img
                        src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"
                      />
                    </div>
                    <div class="profile-content">
                      <span class="a-profile-name">{{ review.user.name }}</span>
                    </div>
                  </a>
                </div>
                <div class="a-row">
                  <a href="#">
                    <i v-for="i in review.rating" :key="i" class="fas fa-star"></i>
                  </a>
                  <span class="a-letter-space"></span>
                  <a href="#" class="review-title">{{ review.headline }}</a>
                </div>
                <span class="review-date">June 28, 2016</span>
              
                <div class="review-data">
                   <div
                    style="width: 1px !important; height: 15px !important; background-color: #ddd; display: inline-block; margin: 0px 5px -3px 5px;"
                  >
                  </div>
               </div>
                <div class="review-body">
                  <span>{{ review.body }}</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div class="col-lg-2 col-md-0 col-sm-0"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product", "reviews"]
}
</script>