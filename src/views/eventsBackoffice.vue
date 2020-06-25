<template>
  <div>
    <br />
    <h2 class="adminTitle">Reservas de Espaços</h2>
    <br />
    <div v-if="this.rooms == 0">
      <h5>Nao existe reserva de espaços</h5>
    </div>
    <div v-else>
      <b-table bordered fixed hover :items="this.rooms" :fields="this.fields">
        <template v-slot:cell(details)="row">
          <b-button class="btnDetails" size="sm" @click="row.toggleDetails"
            >Mostrar Detalhes</b-button
          >
        </template>

        <template v-slot:cell(options)="row">
          <b-button
            variant="success"
            class="btnRemove"
            size="sm"
            @click="acceptReservation(row.item.id)"
            style="margin:5px,"
            v-bind:style="{ display: show }"
            >Aceitar</b-button
          >
          <b-button
            variant="danger"
            class="btnChange"
            size="sm"
            @click="refuseReservation(row.item.id)"
            >Recusar</b-button
          >
        </template>

        <template v-slot:row-details="row">
          <b-card>
            <!-- TIPO DE EVENTO -->
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-left">
                <b>Lugar:</b>
                {{ row.item.espaco }}
              </b-col>
              <b-col></b-col>
            </b-row>
            <!-- MENU -->
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-left">
                <b>Duração:</b>
                {{ row.item.duracao }}
              </b-col>
            </b-row>
            <!-- NUMERO DE PESSOAS -->
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-left">
                <b>Razão:</b>
                {{ row.item.motivo }}
              </b-col>
              <b-col></b-col>
            </b-row>
            <!-- MENU -->
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-left">
                <b>Opinião:</b>
                {{ row.item.opiniao }}
              </b-col>
            </b-row>
          </b-card>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      rooms: [],
      fields: [
        { key: "user", label: "Nome do Utilizador" },
        { key: "data_hora_requirida", label: "Dia" },
        { key: "estado", label: "Estado da Reserva", sortable: "true" },
        { key: "details", label: "Detalhes" },
        { key: "options", label: "Opções" }
      ],
      show: "inline"
    };
  },
  created() {
    this.getAllRents();
  },
  computed: {
    ...mapGetters(["getRents"])
  },
  methods: {
    async getAllRents() {
      try {
        await this.$store.dispatch("getRents");
        this.rooms = this.getRents;
      } catch (err) {
        alert(err);
      }
    },
    // acceptReservation(id) {
    //   for (let i in this.rooms) {
    //     if (this.rooms[i].id === id) {
    //       const index = this.rooms.findIndex(
    //         room => this.rooms[i].id === room.id
    //       );
    //       if (this.rooms[index].state == "Pendente") {
    //         this.rooms[index].state = "Aceite";
    //         // this.show = "none";
    //       } else {
    //         this.$bvToast.toast("Ja tem uma reserva para este dia.");
    //       }
    //       this.$bvToast.toast("Aceitou esta reserva");

    //       localStorage.setItem("roomRents", JSON.stringify(this.rooms));
    //       this.$store.state.roomRents = localStorage.setItem(
    //         "roomRents",
    //         JSON.stringify(this.rooms)
    //       );
    //     }
    //   }
    // },
    // refuseReservation(id) {
    //   for (let i in this.reservations) {
    //     if (this.reservations[i].id === id) {
    //       const index = this.reservations.findIndex(
    //         reservation => this.reservations[i].id === reservation.id
    //       );
    //       if (this.reservations[index].state == "Pendente") {
    //         this.reservations[index].state = "Recusado";
    //       }
    //       this.$bvToast.toast("Recusou esta reserva");
    //       localStorage.setItem(
    //         "reservations",
    //         JSON.stringify(this.reservations)
    //       );
    //       this.$store.state.reservations = localStorage.setItem(
    //         "reservations",
    //         JSON.stringify(this.reservations)
    //       );
    //     }
    //   }
    // }
  }
};
</script>

<style>
.adminTitle {
  font-family: GeosansLight;
  color: black;
}
</style>
