<template>
  <div class="hello">
  <b-img src="../assets/catering-table-display.jpg" class="imgCarousel" />
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
  width: 1000px;
  height: auto;
  position: relative;
  background-color: white;
  border: 1px solid;
  border-color: #F7CA18;
}
/*
#hey{
  font-family: Champagne
}

#ho{
  font-family: GeosansLight
}

#lets{
  font-family: Channel 
}*/
</style>