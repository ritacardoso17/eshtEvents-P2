<template>
  <div>
    <b-table striped hover :items="this.objects" :fields="this.fields">
      <template v-slot:cell(change)="row">
        <b-button class="btnRemove" size="sm" @click="editRoom()">Alterar</b-button>
      </template>
      <template v-slot:cell(rate)="row">
        <img src="../assets/star.png" id="star1" @click="editStars()" alt />
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
    localStorage.setItem("reservations", JSON.stringify(this.$store.state.reservations));
    if (localStorage.getItem("reservations")) {
      this.objects = JSON.parse(localStorage.getItem("reservations"));
    }

    this.loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  },
  methods: {
    getUser() {
      return this.$store.state.loggedUser;
    },
    getReservations() {
      return this.$store.state.reservations;
    },

    editStars() {
      
    }
  },
  computed: {
    row() {
      return this.objects.length;
    }
  }
};
</script>

<style>
#star1{
  height: 30px
}
#star2{
  height: 30px
}
#star3{
  height: 30px
}
#star4{
  height: 30px
}
#star5{
  height: 30px
}
</style>