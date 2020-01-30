<template>
  <div>
    <b-table striped hover head-variant="dark" :items="this.tbRooms" :fields="this.fields">
      <template v-slot:cell(cancel)="row">
        <b-button class="btnCancel" size="sm" @click="cancelRooms(row.item.id)">Cancelar</b-button>
      </template>
      <template v-slot:cell(opinions)="row">
        <b-button
          class="btnDetails rounded-0"
          @click="row.toggleDetails"
          style="background-color:black; color:white; height:40px;"
        >Dar opinião</b-button>
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
export default {
  data() {
    return {
      tbRooms: [],
      opinion: "",
      fields: [
        { key: "room", label: "Espaço", sortable: true },
        { key: "day", label: "Dia", sortable: true },
        { key: "time", label: "Hora" },
        { key: "state", label: "Estado", sortable: true },
        { key: "cancel", label: "Cancelar" },
        { key: "opinions", label: "Opinião" }
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
         
           this.$bvToast.toast('Removeu o espaço');
        }
      }
    },

    cancelRooms(id) {
      for (let i in this.tbRooms) {
        if (this.tbRooms[i].id === id) {
          const index = this.tbRooms.findIndex(
            item => this.tbRooms[i].id === item.id
          );
          if (this.tbRooms[index].state != "Cancelado") {
            this.tbRooms[index].state = "Cancelado";
          } else {
             this.$bvToast.toast('Reserva já cancelada');
          }
          localStorage.setItem("roomRents", JSON.stringify(this.tbRooms));
          this.$store.state.roomRents = localStorage.setItem(
            "roomRents",
            JSON.stringify(this.tbRooms)
          );
        }
      }
    },

    send(id) {
      let rentRooms = JSON.parse(localStorage.getItem("roomRents"));
      for (let i in rentRooms) {
        if (rentRooms[i].id === id) {
          rentRooms[i].opinions = this.opinion;
        }
      }
      localStorage.setItem("roomRents", JSON.stringify(rentRooms));
       this.$bvToast.toast('Opinião Enviada!');
      this.opinion = "";
    }
  },
  computed: {
    row() {
      return this.tbRooms.length;
    }
  }
};
</script>

<style>
.btnCancel {
  background-color: black;
  color: white;
  height: 40px;
}
</style>