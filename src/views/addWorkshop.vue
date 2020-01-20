  <template>
  <div>
    <br />
    <h2>Adicionar Workshop</h2>
    <b-form v-on:submit.prevent="addWorkshop()">
      <b-form-label for="txtTitle" class="nameLabel">Titulo do Workshop:</b-form-label>
      <b-form-input
        type="text"
        class="form-control-center"
        placeholder="Insira o seu titulo"
        v-model="title"
      />

      <b-form-label for="txtVacancies" class="nameLabel">Imagem do Workshop:</b-form-label>
      <b-form-input
        type="url"
        class="form-control-center"
        id="txtVacancies"
        placeholder="Insira a imagem para o Workshop"
        v-model="img"
      />
      <b-img v-bind:src="this.img" fluid style="position:relative"></b-img>

      <b-form-label for="txtdate" class="nameLabel">Data do Workshop:</b-form-label>
      <b-form-input
        type="date"
        class="form-control-center"
        id="txtdate"
        placeholder="Insira a data"
        v-model="date"
      />

      <b-form-label for="txtPlace" class="nameLabel">Lugar do Workshop:</b-form-label>
      <b-form-input
        type="text"
        class="form-control-center"
        id="txtLugar"
        placeholder="Insira o lugar "
        v-model="place"
      />

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
        placeholder="Insira o numero maximo de vagas"
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
      <b-button type="submit" class="btnConf">Confirmar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Add",
  data: () => ({
    id: 0,
    title: "",
    img: "",
    date: "",
    place: "",
    teacher: "",
    vacancies: 0,
    description: ""
  }),
  created() {
    window.addEventListener("unload", this.saveStorage);
    if (localStorage.getItem("workshops")) {
      this.$store.state.workshops = JSON.parse(
        localStorage.getItem("workshops")
      );
    }
  },
  methods: {
    saveStorage() {
      localStorage.setItem(
        "workshops",
        JSON.stringify(this.$store.state.workshops)
      );
    },
    getLastIdWorkshops() {
      return this.$store.getters.getLastIdWorkshops;
    },
    addWorkshop() {
      this.$store.commit("ADD_WORKSHOP", {
        id: this.getLastIdWorkshops() + 1,
        title: this.title,
        img: this.img,
        date: this.date,
        place: this.place,
        teacher: this.teacher,
        vacancies: this.vacancies,
        description: this.description
      });
    }
  }
};
</script>

<style>
.form-control-center {
  width: 300px;
  
}
</style>