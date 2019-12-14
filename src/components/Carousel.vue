<template>
  <div class="hello">
    <div class="container" width="300px">
      <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="6000"
      controls
      indicators
      background="white"
      img-width="1300"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->


      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide  img-blank img-alt="Blank image">
        <b-img src="../assets/catering-table-display.jpg" fluid alt="Responsive image" class="imgCarousel" />
        <p>
        </p>
      </b-carousel-slide>
    </b-carousel>
    </div>
   
  </div>
</template>

<script>
export default {
  
};
</script>

<script>
  export default {
name: "Carousel",
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>
.imgCarousel{
  width: 70%;
  height: auto;
  position: absolute;
  right: 120px;
  top: -320px;
  background-color: white;
  border: 3px solid;
  border-color: #F7CA18;
}
</style>