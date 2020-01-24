<template>
  <div>
    <b-table striped hover :items="this.tbEvents" :fields="this.fields">
      <template v-slot:cell(remove)="row">
        <b-button class="btnRemove" size="sm" @click="removeEvents(row.item.id)">Remover</b-button>
      </template>
      <template v-slot:cell(opinion)="row">
        <b-button id="opinion" v-b-modal.modalEvents>Opinião</b-button>
      </template>
    </b-table>

    <b-modal id="modalEvents" centered size="m" title="Sua opinião" hide-header-close>
      <div class="form-group">
        <textarea
          name="Opinião"
          id="txtOpinion"
          cols="60"
          rows="5"
          placeholder="Escreva a sua opinião"
        ></textarea>
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
        { key: "time", label: "Hora"},
        { key: "state", label: "Estado", sortable: true },
        { key: "remove", label: "Remover" },
        { key: "opinion", label: "Opinião" }
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

    this.loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  },
  methods: {
    getUser() {
      return this.$store.state.loggedUser;
    },
    getReservations() {
      return this.$store.state.reservations;
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
          this.tbEvents = this.$store.state.reservations;
          alert("Removeu");
        }
      }
    }
  },
  computed: {
    row() {
      return this.tbEvents.length;
    }
  }
};
</script>
