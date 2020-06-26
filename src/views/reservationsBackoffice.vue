<template>
  <div>
    <br />
    <h2 class="adminTitle">Reservas de Eventos</h2>
    <br />

    <b-table bordered fixed hover :items="this.reservations" :fields="this.fields">
      <template v-slot:cell(details)="row">
        <b-button class="btnDetails" size="sm" @click="row.toggleDetails">Mostrar Detalhes</b-button>
      </template>

      <template v-slot:cell(options)="row">
        <b-button
          variant="success"
          class="btnRemove"
          size="sm"
          @click="acceptReservation(row.item.id_reserva, row.item.estado)"
          style="margin:5px,"
          v-bind:style="{ display: show }"
        >Aceitar</b-button>
        <b-button
          variant="danger"
          class="btnChange"
          size="sm"
          @click="refuseReservation(row.item.id_reserva, row.item.estado)"
        >Recusar</b-button>
      </template>

      <template v-slot:row-details="row">
        <b-card>
          <!-- TIPO DE EVENTO -->
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-left">
              <b>Tipo de Evento:</b>
              {{ row.item.estado }}
            </b-col>
            <b-col></b-col>
          </b-row>
          <!-- MENU -->
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-left">
              <b>Menu:</b>
              {{ row.item.menu }}
            </b-col>
          </b-row>
          <!-- NUMERO DE PESSOAS -->
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-left">
              <b>Numero de Pessoas:</b>
              {{ row.item.nr_pessoas }}
            </b-col>
            <b-col></b-col>
          </b-row>
          <!--UNIFORME -->
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-left">
              <b>Uniforme:</b>
              {{ row.item.farda }}
            </b-col>
            <b-col></b-col>
          </b-row>
          <!-- DECORAÇAO -->
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-left">
              <b>Decoração:</b>
              {{ row.item.decoracao }}
            </b-col>
            <b-col></b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-left">
              <div v-if="row.item.opiniao != 0">
                <b>Opinião:</b>
                {{ row.item.opiniao }}
              </div>
              <div v-else>
                <b>Opinião:O UTILIZADOR AINDA NAO DEU A SUA OPINIAO</b>
              </div>
            </b-col>
            <b-col></b-col>
          </b-row>
        </b-card>
      </template>
    </b-table>
  </div>
</template>

<script>
import VueSimpleAlert from "vue-simple-alert";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      reservations: [],
      fields: [
        { key: "username", label: "Nome do Utilizador" },
        { key: "data_hora_reserva", label: "Dia" },
        { key: "escola", label: "Local" },
        { key: "estado", label: "Estado da Reserva", sortable: "true" },
        { key: "details", label: "Detalhes" },
        { key: "options", label: "Opções" }
      ],
      show: "inline"
    };
  },
  created() {
    this.getAllEvents();
  },
  computed: {
    ...mapGetters(["getEvents"])
  },
  methods: {
    async getAllEvents() {
      try {
        await this.$store.dispatch("getEvents");
        this.reservations = this.getEvents;
      } catch (err) {
        alert(err);
      }
    },
    async acceptReservation(id, tipoEstado) {
      if (tipoEstado === "Pendente") {
        try {
          await this.$store.dispatch("updateStatus", {
            id: id,
            tipoEstado: tipoEstado
          });
          this.getAllEvents();
        } catch (err) {
          alert(err);
        }
      }
      else{
         VueSimpleAlert.fire("Não pode alterar o estado da reserva")     
      }
    },
    async refuseReservation(id, tipoEstado) {
      try {
        await this.$store.dispatch("updateStatusCancel", {
          id: id,
          tipoEstado: tipoEstado
        });
        this.getAllEvents();
      } catch (err) {
        alert(err);
      }
    }
  }
};
</script>
<style>
.adminTitle {
  font-family: GeosansLight;
  color: black;
}
</style>
