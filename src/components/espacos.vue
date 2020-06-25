<template>
  <div id="table">
    <div v-if="this.rents != ''">
      <b-table
        striped
        hover
        head-variant="dark"
        :items="this.rents"
        :fields="this.fields"
      >
        <template v-slot:cell(cancel)="row">
          <b-button
            class="btnCancel"
            size="sm"
            @click="cancelRooms(row.item.id_aluguer)"
            >Cancelar</b-button
          >
        </template>
        <template v-slot:cell(opinions)="row">
          <b-button
            v-if="row.item.opiniao == 'Ainda sem opinião'"
            class="btnDetails rounded-0"
            @click="row.toggleDetails"
            style="background-color:black; color:white; height:40px;"
            >Dar opinião</b-button
          >
          <p v-else>Opinião Enviada</p>
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
                <b-button @click="send(row.item.id_aluguer)">Enviar</b-button>
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
  data() {
    return {
      rents: [],
      id: "",
      opinion: "",
      fields: [
        { key: "tipo_espaco", label: "Espaço", sortable: true },
        { key: "data_hora_requirida", label: "Dia", sortable: true },
        { key: "data_hora_requirida", label: "Hora" },
        { key: "estado", label: "Estado", sortable: true },
        { key: "cancel", label: "Cancelar" },
        { key: "opinions", label: "Opinião" }
      ]
    };
  },
  created() {
    this.id = this.getUserId();
    this.getAllRents(this.id);
  },
  computed: {
    ...mapGetters(["getRents"])
  },
  methods: {
    getUserId() {
      return this.$store.getters.getLoggedUserId;
    },

    async removeRents(ID) {
      try {
        await this.$store.dispatch("removeRent", { id: ID });
        this.getAllRents(this.id);
      } catch (err) {
        alert(err);
      }
    },

    cancelRooms(idE) {
      alert(idE);
      for (let i in this.rents) {
        if (this.rents[i].id_aluguer === idE) {
          this.removeRents(idE);
        }
      }
    },
    async getAllRents(ID) {
      try {
        await this.$store.dispatch("getUsersRents", { id: ID });
        this.rents = this.getRents;
      } catch (err) {
        alert(err);
      }
    },
    async send(id) {
      try {
        await this.$store.dispatch("getOpinionRents", {
          id: id,
          opinion: this.opinion
        });
        this.getAllRents(this.id);
      } catch (err) {
        alert(err);
      }
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
#table {
  font-family: GeosansLight;
  color: black;
}
#paragraph {
  font-size: 30px;
}
</style>
