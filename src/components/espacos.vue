<template>
  <div>
    <b-table striped hover :items="this.tbRooms" :fields="this.fields">
      <template v-slot:cell(remove)="row">
        <b-button class="btnRemove" size="sm" @click="removeRooms(row.item.id)">Cancelar</b-button>
      </template>
      <template v-slot:cell(opinion)="row">
        <b-button id="opinion" v-b-modal.modalRooms>Opinião</b-button>
      </template>
    </b-table>

    <b-modal id="modalRooms" centered size="m" title="Sua opinião" hide-header-close hide-footer>
      <div class="form-group">
        <textarea
          name="Opinião"
          id="txtOpinion"
          cols="60"
          rows="5"
          v-model="opinions"
          placeholder="Escreva a sua opinião"
        ></textarea>
        <b-button @click="sendOpinion()">Enviar Opinião</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tbRooms: [],
      fields: [
        { key: "room", label: "Espaço", sortable: true },
        { key: "day", label: "Dia", sortable: true },
        { key: "time", label: "Hora" },
        { key: "state", label: "Estado", sortable: true },
        { key: "remove", label: "Remover" },
        { key: "opinion", label: "Opinião" }
      ]
    };
  },
  created() {
    localStorage.setItem(
      "roomRents",
      JSON.stringify(this.$store.state.roomRents)
    );
    if (localStorage.getItem("roomRents")) {
      this.tbRooms = JSON.parse(localStorage.getItem("roomRents"));
    }

    for (const i in this.tbRooms) {
      if (this.tbRooms[i].userMail === this.getUserMail()) {
        this.tbRooms = this.tbRooms.filter(
          event => this.tbRooms[i].userMail == event.userMail
        );
      }
    }

    this.loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  },
  methods: {
    saveStorage() {
      localStorage.setItem(
        "roomRents",
        JSON.stringify(this.$store.state.opinions)
      );
    },

    getUser() {
      return this.$store.getters.getUser;
    },

    getUserMail() {
      return this.$store.getters.getLoggedUserEmail;
    },

    getRooms() {
      return this.$store.state.roomRents;
    },
    
    getLastIdRooms() {
      return this.$store.getters.getLastIdRooms;
    },

    removeRooms(id) {
      for (let i in this.tbRooms) {
        if (this.tbRooms[i].id === id) {
          this.tbRooms = this.tbRooms.filter(
            tbRooms => this.tbRooms[i].id !== tbRooms.id
          );
          localStorage.setItem("roomRents", JSON.stringify(this.tbRooms));
          this.tbRooms = this.getRooms;
          alert("Removeu");
        }
      }
    },

    sendOpinion() {
      for (const i in this.getRooms) {
        alert("Alert 1");
        if (this.getRooms[i].id === this.id) {
          this.getRooms = this.getRooms.filter(
            getRooms => this.getRooms[i].id == getRooms.id
          );

          localStorage.setItem("roomRents", JSON.stringify(this.getRooms));
          this.opinions = this.getRooms;
          alert("Alert 2");
        }
      }
      alert("Mandei uma opinião");
    }
  },
  computed: {
    row() {
      return this.tbRooms.length;
    }
  }
};
</script>