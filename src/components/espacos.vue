<template>
  <div>
    <b-table striped hover :items="this.objects" :fields="this.fields">
      <template v-slot:cell(change)="row">
        <b-button class="btnRemove" size="sm" @click="editRoom()">Alterar</b-button>
      </template>
      <template v-slot:cell(rate)="row">
        <img src="../assets/star.png" id="star1" @click="editStars()" alt />
        <img src="../assets/star.png" id="star2" @click="editStars()" alt />
        <img src="../assets/star.png" id="star3" @click="editStars()" alt />
        <img src="../assets/star.png" id="star4" @click="editStars()" alt />
        <img src="../assets/star.png" id="star5" @click="editStars()" alt />
      </template>
    </b-table>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      objects: [],
      fields: [
        { key: "type", lable: "type", sortable: true },
        { key: "day", lable: "day", sortable: true },
        { key: "state", lable: "state", sortable: true },
        { key: "change" },
        { key: "rate" }
      ]
    };
  },
  created() {
    localStorage.setItem("rooms", JSON.stringify(this.$store.state.rooms));
    if (localStorage.getItem("rooms")) {
      this.objects = JSON.parse(localStorage.getItem("rooms"));
    }

    this.loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  },
  methods: {
    getUser() {
      return this.$store.state.loggedUser;
    },
    getRooms() {
      return this.$store.state.rooms;
    },
    editStars() {
      let star1 = document.addEventListener("click");
      let star2 = document.addEventListener("click");
      let star3 = document.addEventListener("click");
      let star4 = document.addEventListener("click");
      let star5 = document.addEventListener("click");
      if (star1) {
        /* src da primeira estrela mudar para preenchido */
      } else if (star2) {
        /* src da 1 e 2 estrelas mudar para preenchido */
      } else if (star3) {
        /* src da 1, 2 e 3 estrelas mudar para preenchido */
      } else if (star4) {
        /* src da 1, 2, 3 e 4 estrelas mudar para preenchido */
      } else if (star5) {
        /* src da 1, 2, 3, 4 e 5 estrelas mudar para preenchido */
      }
    }
  },
  computed: {
    row() {
      return this.objects.length;
    }
  }
};
</script>