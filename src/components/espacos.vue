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
      
    }
  },
  computed: {
    row() {
      return this.objects.length;
    }
  }
};
</script>