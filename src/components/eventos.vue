<template>
  <div id="table">
    <div v-if="this.reservations != ''">
      <b-table
        striped
        hover
        head-variant="dark"
        :items="this.reservations"
        :fields="this.fields"
      >
        <template v-slot:cell(cancel)="row">
          <b-button
            class="btnCancel"
            size="sm"
            @click="cancelEvents(row.item.id_reserva)"
            >Cancelar</b-button
          >
        </template>
        <template v-slot:cell(opinions)="row">
          <b-button
            v-if="
              row.item.estado == 'Aceite' &&
                row.item.opiniao == 'Ainda sem opinião'
            "
            class="btnDetails rounded-0"
            @click="row.toggleDetails"
            >Dar opinião</b-button
          >
          <p
            v-if="
              row.item.estado == 'Aceite' &&
                row.item.opiniao != 'Ainda sem opinião'
            "
          >
            Opinião Enviada
          </p>
          <p v-if="row.item.estado != 'Aceite'">Não pode dar opinião</p>
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
                <b-button id="opinion" @click="send(row.item.id_reserva)">
                  Enviar
                </b-button>
              </b-col>
              <b-col></b-col>
            </b-row>
          </b-card>
        </template>
      </b-table>
    </div>
    <div v-else>
      <p id="paragraph">Não realizou nenhuma reserva</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "eventos",
  data: function() {
    return {
      reservations: [],
      opinion: "",
      id: "",
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
    this.getAllEvents(this.id);
  },

  computed: {
    ...mapGetters(["getEvents"])
  },

  methods: {
    async getAllEvents(ID) {
      try {
        await this.$store.dispatch("getUsersEvents", { id: ID });
        this.reservations = this.getEvents;
      } catch (err) {
        alert(err);
      }
    },
    async removeReservation(ID) {
      try {
        await this.$store.dispatch("removeReservation", { id: ID });
        this.getAllEvents(this.id);
      } catch (err) {
        alert(err);
      }
    },

    getUserId() {
      return this.$store.getters.getLoggedUserId;
    },
    cancelEvents(idE) {
      for (let i in this.reservations) {
        if (this.reservations[i].id_reserva === idE) {
          this.removeReservation(idE);
        }
      }
    },
    async send(id) {
      try {
        await this.$store.dispatch("getOpinionReservs", {
          id: id,
          opinion: this.opinion
        });
        this.getAllEvents(this.id);
      } catch (err) {
        alert(err);
      }
    }
  }
};
</script>

<style lang="css" scoped>
#table {
  font-family: GeosansLight;
  color: black;
}
#paragraph {
  font-size: 30px;
}
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
