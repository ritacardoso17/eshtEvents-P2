 <template>
  <div class="container">
    <div v-for="workshop in workshops" v-bind:key="workshop.id">
      <span v-if="workshop.id % 2 == 0">
        <b-card
          :title="workshop.name"
          :img-src="workshop.img"
          img-alt="Image"
          img-right
          tag="article"
          class="mb-2"
        >
          <b-card-text>{{workshop.description}}</b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
        </span>
        <span v-else>
        <b-card
          :title="workshop.name"
          :img-src="workshop.img"
          img-alt="Image"
          img-left
          tag="article"
          class="mb-2"
        >
          <b-card-text>{{workshop.description}}</b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { workshops: [] };
  },
  created() {
    localStorage.setItem(
      "workshops",
      JSON.stringify(this.$store.state.workshops)
    );
    if (localStorage.getItem("workshops")) {
      this.workshops = JSON.parse(localStorage.getItem("workshops"));
    }
  }
};
</script>