<template>
  <div>
    <b-table striped hover :items="this.tbEvents" :fields="this.fields">
      <template v-slot:cell(remove)="row">
        <b-button class="btnRemove" size="sm" @click="removeEvents(row.item.id)">Cancelar</b-button>
      </template>
      <template v-slot:cell(opinions)="row">
        <b-button id="opinions" v-b-modal.modalEvents>Opinião</b-button>
      </template>
    </b-table>

    <b-modal id="modalEvents" centered size="m" title="Sua opinião" hide-header-close hide-footer>
      <div class="form-group">
        <textarea
          name="Opinião"
          id="txtOpinion"
          cols="60"
          rows="5"
          placeholder="Escreva a sua opinião"
          v-model="opinions"
        ></textarea>
        <b-button @click="send">Enviar Opinião</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tbEvents: [],
      fields: [
        { key: "eventType", label: "Tipo", sortable: true },
        { key: "day", label: "Dia", sortable: true },
        { key: "time", label: "Hora" },
        { key: "state", label: "Estado", sortable: true },
        { key: "remove", label: "Remover" },
        { key: "opinions", label: "Opinião" }
      ]
    };
  },
  created() {
    localStorage.setItem(
      "reservations",
      JSON.stringify(this.$store.state.reservations)
    );

    if (localStorage.getItem("reservations")) {
      this.tbEvents = JSON.parse(localStorage.getItem("reservations"));
    }
    for (const i in this.tbEvents) {
      alert(this.tbEvents[i].userMail + this.getUserMail())
      if (this.tbEvents[i].userMail === this.getUserMail()) {
        this.tbEvents = this.tbEvents.filter( event => this.tbEvents[i].userMail != event.userMail )
      }
      else {
        alert("topitos")
      }
    }
    this.loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  },
  
  destroyed() {

  },

  methods: {
    saveStorage() {
      localStorage.setItem(
        "reservations",
        JSON.stringify(this.$store.state.opinions)
      );
    },

    getUser() {
      return this.$store.state.loggedUser;
    },

    getReservations() {
      return this.$store.state.reservations;
    },

    getUserMail() {
      return this.$store.getters.getLoggedUserEmail;
    },

    getLastIdEvents() {
      return this.$store.getters.getLastIdEvents;
    },

    removeEvents(id) {
      for (let i in this.tbEvents) {
        if (this.tbEvents[i].id === id) {
          this.tbEvents = this.tbEvents.filter(
            tbEvents => this.tbEvents[i].id !== tbEvents.id
          );
          localStorage.setItem("reservations", JSON.stringify(this.tbEvents));
          this.$store.state.tbEvents = JSON.parse(
            localStorage.getItem("reservations")
          );
          this.tbEvents = this.getReservations;
          alert("Removeu");
        }
      }
    },

    send() {
      localStorage.setItem("reservations", JSON.stringify(this.opinions))
      alert("Mandei uma opinião");
    }
  },

  computed: {
    row() {
      return this.tbEvents.length;
    }
  }
};
</script>
