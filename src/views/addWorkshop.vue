<template>
  <div>
    <br />
    <h2 class="adminTitle">Adicionar Workshop</h2>
    <br />
    <div class="container" align="center" style="height: 600px">
      <b-form @submit.prevent="addWorkshop()">
        <div class="container">
          <div class="row">
            <div class="col">
              <b-form-label for="txtTitle" class="nameLabel">Título do Workshop:</b-form-label>
              <b-form-input
                type="text"
                class="form-control-center"
                placeholder="Insira o seu titulo"
                v-model="title"
              />
              <b-form-label for="txtdate" class="nameLabel">Data do Workshop:</b-form-label>
              <b-form-input
                type="date"
                class="form-control-center"
                id="txtdate"
                placeholder="Insira a data"
                v-model="date"
              />
              <b-form-label for="txtImage" class="nameLabel">Imagem do Workshop:</b-form-label>
              <b-form-input
                type="url"
                class="form-control-center"
                id="txtVacancies"
                placeholder="Insira a imagem para o Workshop"
                v-model="img"
              />
              <br />
              <b-img v-bind:src="this.img" fluid style="width:200px"></b-img>
              <br />
            </div>
            <div class="col">
              <b-form-label for="txtPlace" class="nameLabel">Lugar do Workshop:</b-form-label>
              <select v-model="place">
                <option v-for="l in schools" :value="l" :key="l.id_ipp">
                  {{
                  l.nome
                  }}
                </option>
              </select>
              <br />
              <b-form-label for="txtTeacher" class="nameLabel">Locutor do Workshop:</b-form-label>
              <b-form-input
                type="text"
                class="form-control-center"
                id="txtTeacher"
                placeholder="Insira o nome do locutor"
                v-model="teacher"
              />

              <b-form-label for="txtVacancies" class="nameLabel">Numero de Vagas do Workshop:</b-form-label>
              <b-form-input
                type="number"
                class="form-control-center"
                id="txtVacancies"
                style=" align-self: center;"
                placeholder="Insira o numero de vagas"
                min="0"
                v-model="vacancies"
              />

              <b-form-label for="txtDescription" class="nameLabel">Descrição:</b-form-label>
              <b-form-textarea
                type="text"
                class="form-control-center"
                id="txtDescription"
                style="resize:none;"
                placeholder="Insira uma descrição"
                v-model="description"
              ></b-form-textarea>
            </div>
          </div>
        </div>
        <b-button type="submit">Enviar</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      title: "",
      img: "",
      date: "",
      place: "",
      teacher: "",
      vacancies: 0,
      description: "",
      schools: []
    };
  },
  created() {
    this.getAllSchools();
  },
  computed: {
    ...mapGetters(["getSchools"])
  },
  methods: {
    async getAllSchools() {
      try {
        await this.$store.dispatch("getSchools");
        this.schools = this.getSchools;
      } catch (err) {
        alert(err);
      }
    },
    async addWorkshop() {
      try {
        await this.$store.dispatch("addWorkshops", {
          nome: this.title,
          description: this.description,
          n_vacancies: this.vacancies,
          date_hour: this.date,
          teacher: this.teacher,
          id_local: this.place.id_ipp,
          img: this.img
        });
      } catch (err) {
        alert(err);
      }
    }
  }
};
</script>

<style>
.form-group {
  width: 550px;
}
.btnConf {
  background-color: black;
  color: white;
  margin-top: 20px;
}
.btnConf:hover {
  border: 2px solid #daaa29;
  background-color: black;
}
.adminTitle {
  font-family: GeosansLight;
  color: black;
}
</style>
