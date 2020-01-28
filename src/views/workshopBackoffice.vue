<template>
  <div class="bckWorksjop">
    <br>
    <h2>Gestão dos workshops</h2>
<br>

    <b-table  style="max-width:900px; position:center;" bordered fixed hover :items="this.workshops" :fields="this.fields">
      <template v-slot:cell(options)="row">
        <b-button class="btnRemove" variant="danger" size="sm" @click="removeWorkshop(row.item.id)" style="margin:10px;" >Eliminar Workshop</b-button>
        <b-button class="btnChange" size="sm" @click="editWorkshop(row.item.id)">Editar</b-button>
      </template>
    </b-table>
     <b-button tag="button" style="margin:10px;"  class="btnAdd" 
     
     
     > Adicionar </b-button>
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
        { key: "vacancies", label: "Vagas" },
        { key: "options",label:"Opções" }
      ]
    };
  },
  created() {
    if (localStorage.getItem("workshops")) {
      this.$store.state.workshops = JSON.parse(localStorage.getItem("workshops"));
      this.workshops =  this.$store.state.workshops
    }
  },
  methods: {
    removeWorkshop(id) {
      for (let i in this.workshops) {
        if (this.workshops[i].id === id) {
          this.workshops = this.workshops.filter( workshop => this.workshops[i].id !== workshop.id);
         
          localStorage.setItem("workshops", JSON.stringify(this.workshops));
          this.$store.state.workshops = localStorage.setItem("workshops", JSON.stringify(this.workshops));
        }
      }
    },
    editWorkshop() {
      //O QUE EDITAR??
    },
   
  }
};
</script>

