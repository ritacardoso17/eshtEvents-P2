<template>
  <div>
    <b-table bordered fixed hover :items="this.reservations" :fields="this.fields">
      <template v-slot:cell(options)="row">
        <b-button class="btnRemove" size="sm" @click="acceptReservation(row.item.id)">Aceitar</b-button>
        <b-button class="btnChange" size="sm" @click="refuseReservation(row.item.id)">Recusar</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reservations: this.$store.state.reservations,
      fields: [
        { key: "id", lable: "id" },
        { key: "user", lable: "user" },
        { key: "day", lable: "day" },
        { key: "place", lable: "place" },
        { key: "state", lable: "state", sortable: "true" },
        { key: "options" }
      ]
    };
  },
  created() {
    if (localStorage.getItem("reservations")) {
      this.$store.state.reservations = JSON.parse(localStorage.getItem("reservations"));
    }
  }, methods:{
    acceptReservation(){
      alert(this.reservations[0].day)
    },
    refuseReservation(){
       alert(this.reservations[0].day)
    }
  }
  };
</script>
