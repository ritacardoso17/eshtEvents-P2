<template>
  <div>
    <b-table striped hover head-variant="dark" :items="this.tbEvents" :fields="this.fields">
      <template v-slot:cell(cancel)="row">
        <b-button class="btnCancel" size="sm" @click="cancelEvents(row.item.id)">Cancelar</b-button>
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
  data() {
    return {
      tbEvents: [],
      reservations: [],
      opinion: "",
      fields: [
        { key: "id_tipo_reserva", label: "Tipo", sortable: true },
        { key: "data_hora_evento", label: "Dia", sortable: true },
        { key: "data_hora_evento", label: "Hora" },
        { key: "id_estado", label: "Estado", sortable: true },
        { key: "cancel", label: "Cancelar" },
        { key: "opinions", label: "Opinião" }
      ]
    };
  },
  created() {
    // localStorage.setItem(
    //   "reservations",
    //   JSON.stringify(this.$store.state.reservations)
    // );

    // if (localStorage.getItem("reservations")) {
    //   this.tbEvents = JSON.parse(localStorage.getItem("reservations"));
    // }

    // alert("dsjhmzl," + this.tbEvents[0].id_utilizador);
    for (const i in this.tbEvents) {
          alert("apouajwnf,");
      if (this.tbEvents[i].id_utilizador === this.getUserId()) {
        this.tbEvents = this.tbEvents.filter(
          event => this.tbEvents[i].id_utilizador == event.id_utilizador
        );
      }
    }
    this.getPerfilE();
    this.loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    // this.reservations = JSON.parse(localStorage.getItem("reservations"));
  },

  destroyed() {},

  methods: {
    saveStorage() {
      localStorage.setItem(
        "reservations",
        JSON.stringify(this.$store.state.state)
      );
    },

    getUser() {
      return this.$store.state.loggedUser;
    },

    getReservations() {
      return this.$store.state.reservations;
    },

    getUserId() {
      return this.$store.getters.getLoggedUserId;
    },

    getLastIdEvents() {
      return this.$store.getters.getLastIdEvents;
    },

    cancelEvents(id) {
      for (let i in this.tbEvents) {
        if (this.tbEvents[i].id === id) {
          const index = this.tbEvents.findIndex(
            item => this.tbEvents[i].id === item.id
          );
          if (this.tbEvents[index].state != "Cancelado") {
            this.tbEvents[index].state = "Cancelado";
          } else {
            this.$bvToast.toast("Reserva já cancelada");
          }
          localStorage.setItem("reservations", JSON.stringify(this.tbEvents));
          this.$store.state.reservations = localStorage.setItem(
            "reservations",
            JSON.stringify(this.tbEvents)
          );
        }
      }
    },

    async getPerfilE() {
      try {
        await this.$store.dispatch("getEvents");
        this.tbEvents = this.getEvents;
      } catch (err) {
        alert(err);
      }
    },

    send(id) {
      let reservations = JSON.parse(localStorage.getItem("reservations"));
      for (let i in reservations) {
        if (reservations[i].id === id) {
          reservations[i].opinions = this.opinion;
        }
      }
      localStorage.setItem("reservations", JSON.stringify(reservations));
      this.$bvToast.toast("Opinião Enviada!");

      this.opinion = "";
    }
  },

  computed: {
    ...mapGetters(["getEvents"]),
    row() {
      return this.tbEvents.length;
    }
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