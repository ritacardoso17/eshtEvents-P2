
<template>
  <div id="workshop">
    <cardWorkshop />
    <router-view></router-view>
     </div>
</template>

<style>
</style>

<script>
import cardWorkshop from "@/components/cardWorkshop.vue";

export default {
     name: "Workshop",
  components: {
   cardWorkshop
  }
};
</script>

