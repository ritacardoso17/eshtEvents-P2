<template>
  <div class="bckWorksjop">
    <br />
    <h2 v-bind:style="{display:size}">Gestão dos workshops</h2>
    <b-button
      tag="button"
      style="margin:10px;"
      v-bind:style="{display:size}"
       :to="{path: '/addWorkshop' }"
      class="btnAdd"
    >Adicionar</b-button>
    <!--GERA TABELA COM DADOS DOS WORKSHOPS-->
    <b-table
      bordered
      fixed
      hover
      :items="this.workshops"
      :fields="this.fields"
      v-bind:style="{display:size}"
    >
      <template v-slot:cell(details)="row">
        <b-button
          variant="info"
          class="btnShow"
          size="sm"
          @click="row.toggleDetails"
          style="left:30px; margin:7px"
        >Mostrar workshop</b-button>
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
          @click="editWorkshop(row.item.id,row.item.title,row.item.img,row.item.vacancies,row.item.place,row.item.date,row.item.teacher,row.item.description)"
        >Editar</b-button>
      </template>
    </b-table>
    <!-- EDITAR WORKSHOP  -->
    <div class="container" v-bind:style="{display:size2}">
      <h2>Editar Workshop</h2>
      <b-form v-on:submit.prevent="saveWorkshop()">
        <div class="container">
          <div class="row">
            <div class="col">
              <!-- NOME -->
              <b-form-group id="input-group-1" label="Titulo do Workshop:" label-for="input-1"></b-form-group>
              <input type="text" v-model="title" style=" width: 300px;" />
              <br />

              <!-- VAGAS -->
              <b-form-label for="txtVacancies" class="nameLabel">Numero de Vagas do Workshop:</b-form-label>
              <br />
              <input
                type="number"
                class="form-control-center"
                id="txtVacancies"
                style=" align-self: center;"
                placeholder="Insira o numero de vagas"
                min="0"
                v-model="vacancies"
              />
              <br />
              <!-- LOCUTOR -->
              <b-form-label for="txtTeacher" class="nameLabel">Locutor do Workshop:</b-form-label>
              <br />
              <input
                type="text"
                class="form-control-center"
                id="txtTeacher"
                placeholder="Insira o nome do locutor"
                v-model="teacher"
              />
            </div>

            <div class="col">
              <!-- IMAGEM -->
              <b-form-label name="image" for="txtImage" class="nameLabel">Imagem do Menu:</b-form-label>
              <br />
              <input type="link" class="form-control-center" v-model="img" />
              <br />
              <b-img v-bind:src="this.img" fluid style="width:200px"></b-img>
            </div>
            <!-- DATA -->
            <div class="col">
              <b-form-label for="txtdate" class="nameLabel">Data do Workshop:</b-form-label>
              <br />
              <input type="date" class="form-control-center" id="txtdate" v-model="date" />
              <!-- SITIO -->
              <br />
              <b-form-label for="txtPlace" class="nameLabel">Lugar do Workshop:</b-form-label>
              <br />
              <input
                type="text"
                class="form-control-center"
                id="txtLugar"
                placeholder="Insira o lugar "
                v-model="place"
              />
              <br />
              <!-- DESCRIÇAO -->
              <b-form-label for="txtDescription" class="nameLabel">Descrição:</b-form-label>
              <b-form-textarea
                type="text"
                class="form-control-center"
                id="txtDescription"
                placeholder="Insira uma descrição"
                style="resize:none;"
                v-model="description"
              ></b-form-textarea>
            </div>
          </div>
        </div>

        <b-button type="submit" class="btnConf">Confirmar</b-button>

        <b-button type="button" class="btnConf" @click="cancel()">Cancelar</b-button>
      </b-form>
    </div>
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
        { key: "details", label: "Detalhes" },
        { key: "options", label: "Opções" }
      ],

      size: "",
      size2: "none",

      id: "",
      title: "",
      img: "",
      date: "",
      teacher: "",
      place: "",
      vacancies: "",
      description: ""
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
    editWorkshop(id, title, img, vacancies, place, date, teacher, description) {
      this.size = "none";
      this.size2 = "block";

      this.title = title;
      this.vacancies = vacancies;
      this.img = img;
      this.place = place;
      this.date = date;
      this.id = id;
      this.teacher = teacher;
      this.description = description;
    },
    saveWorkshop() {
      for (let w in this.workshops) {
        if (this.workshops[w].id == this.id) {
          this.workshops[w].title = this.title;
          this.workshops[w].vacancies = this.vacancies;
          this.workshops[w].img = this.img;
          this.workshops[w].place = this.place;
          this.workshops[w].date = this.date;
          this.workshops[w].teacher = this.teacher;
          this.workshops[w].description = this.description;

          localStorage.setItem("workshops", JSON.stringify(this.workshops));
           this.$bvToast.toast('Workshop Editado')

        }
      }
      this.size = "";
      this.size2 = "none";

      this.title = "";
      this.vacancies = "";
      this.img = "";
      this.place = "";
      this.date = "";
      this.id = "";
      this.teacher = "";
      this.description = "";
    },
    cancel() {
    this.size = "";
      this.size2 = "none";

      this.title = "";
      this.vacancies = "";
      this.img = "";
      this.place = "";
      this.date = "";
      this.id = "";
      this.teacher = "";
      this.description = "";
    }
  }
};
</script>

