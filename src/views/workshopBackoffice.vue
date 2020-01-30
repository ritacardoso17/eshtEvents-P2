<template>
  <div class="bckWorksjop">
    <br />
    <h2>Gestão dos workshops</h2>
    <br />
    <!--GERA TABELA COM DADOS DOS WORKSHOPS-->
    <b-table bordered fixed hover :items="this.workshops" :fields="this.fields">
      <template v-slot:cell(details)="row">
        <b-button
          variant="info"
          class="btnShow"
          size="sm"
          @click="row.toggleDetails"
          style="left:30px; margin:7px"
        >Mostrar Menu</b-button>
      </template>
      <!-- Mostar Detalhes do WORKSHOP -->
      <template v-slot:row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-center" style="margin-left:450px">
              <b>Local:</b>
              <div class="text-sm-center">
                <li>{{row.item.place}}</li>
              </div>
            </b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-center" style="margin-left:450px">
              <b>Locutor:</b>
              <div class="text-sm-center">
                <li>{{row.item.teacher}}</li>
              </div>
            </b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-center" style="margin-left:450px">
              <b>Descrição:</b>
              <div class="text-sm-center">
                <li>{{row.item.description}}</li>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </template>
      <template v-slot:cell(options)="row">
        <b-button
          class="btnRemove"
          variant="danger"
          size="sm"
          @click="removeWorkshop(row.item.id)"
          style="margin:10px;"
        >Eliminar Workshop</b-button>
        <b-button
          class="btnChange"
          size="sm"
          @click="editWorkshop(row.item.id,row.item.title,row.item.vacancies,row.item.place,row.item.date,row.item.teacher,row.item.description)"
        >Editar</b-button>
      </template>
    </b-table>

    <b-button tag="button" style="margin:10px;" class="btnAdd">Adicionar</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workshops: [],
      //ADICIONAR O NUMERO DE PARTICIPANTES, E VER DETALHES DO WORKSHOP(FIELDS)
      fields: [
        { key: "title", label: "Titulo", sortable: "true" },
        { key: "date", label: "Data", sortable: "true" },
        { key: "vacancies", label: "Vagas" },
        {
          key: "details",
          label: "Detalhes"
        },
        { key: "options", label: "Opções" }
      ]
    };
  },
  created() {
    if (localStorage.getItem("workshops")) {
      this.$store.state.workshops = JSON.parse(
        localStorage.getItem("workshops")
      );
      this.workshops = this.$store.state.workshops;
    }
  },
  methods: {
    removeWorkshop(id) {
      for (let i in this.workshops) {
        if (this.workshops[i].id === id) {
          this.workshops = this.workshops.filter(
            workshop => this.workshops[i].id !== workshop.id
          );

          localStorage.setItem("workshops", JSON.stringify(this.workshops));
          this.$store.state.workshops = localStorage.setItem(
            "workshops",
            JSON.stringify(this.workshops)
          );
        }
      }
    },
    editWorkshop(id, title, vacancies, place, date, teacher, description) {
      this.title = title;
      this.vacancies = vacancies;
      this.place = place;
      this.date = date;
      this.id = id;
      this.teacher = teacher;
      this.description = description;
    }
  }
};
</script>

