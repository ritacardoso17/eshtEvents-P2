<template>
  <div>
    <b-table bordered fixed hover :items="this.reservations" :fields="this.fields">
      <template v-slot:cell(details)="row">
        <b-button class="btnDetails" size="sm" @click="row.toggleDetails">Mostrar Detalhes</b-button>
      </template>

      <template v-slot:cell(options)="row">
        <b-button
          variant="success"
          class="btnRemove"
          size="sm"
          @click="acceptReservation(row.item.id)"
          style="margin:5px"
        >Aceitar</b-button>
        <b-button
          variant="danger"
          class="btnChange"
          size="sm"
          @click="refuseReservation(row.item.id)"
        >Recusar</b-button>
      </template>

      <template v-slot:row-details="row">
        <b-card>
          <!-- TIPO DE EVENTO -->
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right">
              <b>Tipo de Evento:</b>
              {{ row.item.eventType }}
            </b-col>
            <b-col></b-col>
          </b-row>
          <!-- MENU -->
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right">
              <b>Menu:</b>
              {{ row.item.menu}}
            </b-col>
          </b-row>
          <!-- NUMERO DE PESSOAS -->
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right">
              <b>Numero de Pessoas:</b>
              {{ row.item.people }}
            </b-col>
            <b-col></b-col>
          </b-row>
          <!--UNIFORME -->
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right">
              <b>Uniforme:</b>
              {{ row.item.uniform }}
            </b-col>
            <b-col></b-col>
          </b-row>
          <!-- DECORAÇAO -->
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right">
              <b>Decoração:</b>
              {{ row.item.decor }}
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
      reservations: [],
      fields: [
        { key: "userName", label: "Nome do Utilizador" },
        { key: "day" + "time", label: "Dia e Hora" },
        { key: "place", label: "Local" },
        { key: "state", label: "Estado da Reserva", sortable: "true" },
        { key: "details", label: "Detalhes" },
        { key: "options", label: "Opções" }
      ]
    };
  },
  created() {
    if (localStorage.getItem("reservations")) {
      this.$store.state.reservations = JSON.parse(
        localStorage.getItem("reservations")
      );
      this.reservations = this.$store.state.reservations;
    }
  },
  methods: {
    acceptReservation(i) {
      alert(this.reservations[i].day);
    },
    refuseReservation(id) {
      for (let i in this.reservations) {
        if (this.reservations[i].id === id) {
          this.reservations = this.reservations.push(
            reservations => this.reservations[i].id !== reservations.id
          );
          localStorage.setItem(
            "reservations",
            JSON.stringify(this.reservations)
          );
          this.$store.state.reservations = JSON.parse(
            localStorage.getItem("reservations")
          );
          prompt("Tem a certeza que quer recusar esta reserva");
        }
      }
    }
  }
};
</script>
