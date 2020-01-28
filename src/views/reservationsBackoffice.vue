<template>
  <div>
    <br>
    <h2>Reservas de Eventos</h2>
    <br>
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
          style="margin:5px,"
          v-bind:style="{display:show}"
        >Aceitar</b-button>
        <b-button
          variant="danger"
          class="btnChange"
          size="sm"
          @click="refuseReservation(row.item.id)"
        >Recusar</b-button>
      </template>

      <template v-slot:row-details="row" >
        <b-card>
          <!-- TIPO DE EVENTO -->
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-left">
              <b>Tipo de Evento:</b>
              {{ row.item.eventType }}
            </b-col>
            <b-col></b-col>
          </b-row>
          <!-- MENU -->
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-left">
              <b>Menu:</b>
              {{ row.item.menu}}
            </b-col>
          </b-row>
          <!-- NUMERO DE PESSOAS -->
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-left">
              <b>Numero de Pessoas:</b>
              {{ row.item.people }}
            </b-col>
            <b-col></b-col>
          </b-row>
          <!--UNIFORME -->
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-left">
              <b>Uniforme:</b>
              {{ row.item.uniform }}
            </b-col>
            <b-col></b-col>
          </b-row>
          <!-- DECORAÇAO -->
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-left">
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
        { key: "day", label: "Dia" },
        { key: "location", label: "Local" },
        { key: "state", label: "Estado da Reserva", sortable: "true" },
        { key: "details", label: "Detalhes" },
        { key: "options", label: "Opções" }
      ],
      show: "inline"
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
    acceptReservation(id) {
      for (let i in this.reservations) {
        if (this.reservations[i].id === id) {
          const index = this.reservations.findIndex(
            reservation => this.reservations[i].id === reservation.id
          );
          if (
            this.reservations[index].state == "Pendente" &&
            this.reservations[i].date != this.reservations[index].date &&
            this.reservations[i].state == "Aceite"
          ) {
            this.reservations[index].state = "Aceite";
            // this.show = "none";
          } else {
            alert("Ja tem uma reserva para este dia.");
          }
          alert("Reserva aceite");
          localStorage.setItem(
            "reservations",
            JSON.stringify(this.reservations)
          );
          this.$store.state.reservations = localStorage.setItem(
            "reservations",
            JSON.stringify(this.reservations)
          );
        }
      }
    },
    refuseReservation(id) {
      for (let i in this.reservations) {
        if (this.reservations[i].id === id) {
          const index = this.reservations.findIndex(
            reservation => this.reservations[i].id === reservation.id
          );
          if (this.reservations[index].state == "Pendente") {
            this.reservations[index].state = "Recusado";
          } 
          alert("recusou esta reserva");
          localStorage.setItem(
            "reservations",
            JSON.stringify(this.reservations)
          );
          this.$store.state.reservations = localStorage.setItem(
            "reservations",
            JSON.stringify(this.reservations)
          );
        }
      }
    }
  }
};
</script>
