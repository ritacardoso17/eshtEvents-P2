<template>
  <div>
    <b-table striped hover head-variant="dark" :items="this.reservations" :fields="this.fields">
      <template v-slot:cell(cancel)="row">
        <b-button class="btnCancel" size="sm" @click="cancelEvents(row.item.id_reserva)">Cancelar</b-button>
      </template>
      <template v-slot:cell(opinions)="row">
        <b-button class="btnDetails rounded-0" @click="row.toggleDetails">Dar opinião</b-button>
      </template>
      <template v-slot:row-details="row">
        <b-card>
          <!-- Escola -->
          <b-row class="mb-2">
            <b-col class="text-sm-right">
              <textarea
                name="Opinião"
                id="txtOpinion"
                cols="60"
                rows="5"
                placeholder="Escreva a sua opinião"
                v-model="opinion"
              ></textarea>
              <b-button @click="send(row.item.id)">Enviar</b-button>
            </b-col>
            <b-col></b-col>
          </b-row>
        </b-card>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      reservations: [],
      opinion: "",
      fields: [
        { key: "tipoReserva", label: "Tipo", sortable: true },
        { key: "data_hora_evento", label: "Dia", sortable: true },
        { key: "data_hora_evento", label: "Hora" },
        { key: "estado", label: "Estado", sortable: true },
        { key: "cancel", label: "Cancelar" },
        { key: "opinions", label: "Opinião" }
      ]
    };
  },
  created() {
    this.id = this.getUserId();
    this.getAllEvents(this.getUserId());
    // this.loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    // this.reservations = JSON.parse(localStorage.getItem("reservations"));
  },

  computed: {
    ...mapGetters(["getEvents"])
  },

  methods: {
    async getAllEvents(ID) {
      try {
        await this.$store.dispatch("getEvents", { id: ID });
        this.reservations = this.getEvents;
      } catch (err) {
        alert(err);
      }
    },
    async removeReservation(ID) {
      try {
        await this.$store.dispatch("removeReservation", { id: ID });
      } catch (err) {
        alert(err);
      }
    },
    // saveStorage() {
    //   localStorage.setItem(
    //     "reservations",
    //     JSON.stringify(this.$store.state.state)
    //   );
    // },

    // getUser() {
    //   return this.$store.state.loggedUser;
    // },

    // getReservations() {
    //   return this.$store.state.reservations;
    // },

    getUserId() {
      return this.$store.getters.getLoggedUserId;
    },

    // getLastIdEvents() {
    //   return this.$store.getters.getLastIdEvents;
    // },

    cancelEvents(idE) {
     
      for (let i in this.reservations) {
        if (this.reservations[i].id_reserva === idE) {
          this.removeReservation(idE);
           alert(idE)
        }
      }
    },
    send(id) {
     
      let reservations = JSON.parse(localStorage.getItem("reservations"));
       alert(id)
      for (let i in reservations) {
        if (reservations[i].id === id) {
          
          reservations[i].opinions = this.opinion;
        }
      }
      localStorage.setItem("reservations", JSON.stringify(reservations));
      this.$bvToast.toast("Opinião Enviada!");

      this.opinion = "";
    }
    //
  }
};
</script>

<style lang="scss" scoped>
.btnDetails {
  background-color: black;
  color: white;
  height: 2vw;
}

.btnCancel {
  background-color: black;
  color: white;
  height: 2vw;
}
</style>