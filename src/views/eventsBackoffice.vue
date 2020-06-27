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
          <b-button class="btnDetails" size="sm" @click="row.toggleDetails">Mostrar Detalhes</b-button>
        </template>

        <template v-slot:cell(options)="row">
          <b-button
            variant="success"
            class="btnRemove"
            size="sm"
            @click="acceptReservation(row.item.id_aluguer,row.item.estado)"
            style="margin:5px,"
            v-bind:style="{ display: show }"
          >Aceitar</b-button>
          <b-button
            variant="danger"
            class="btnChange"
            size="sm"
            @click="refuseReservation(row.item.id_aluguer,row.item.estado)"
          >Recusar</b-button>
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
import VueSimpleAlert from "vue-simple-alert";
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
    async acceptReservation(id, tipoEstado) {
      if (tipoEstado == "Pendente") {
        try {
          await this.$store.dispatch("updateStatusRents", {
            id: id,
            tipoEstado: tipoEstado
          });
          this.getAllRents();
        } catch (err) {
          alert(err);
        }
      } else {
        VueSimpleAlert.fire("Não pode alterar o estado da reserva");
      }
    },
    async refuseReservation(id, tipoEstado) {
        try {
        await this.$store.dispatch("updateStatusCancelRents", {
          id: id,
          tipoEstado: tipoEstado
        });
        this.getAllRents();
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
