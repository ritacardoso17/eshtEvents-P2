<template>
  <div class="bckMenus">
    <h1>Gestão dos Menus</h1>
    <b-button class="btnAdd" size="sm" :to="{path: '/addMenu' }">Adicionar Menu</b-button>
    <br />
    <br />
    <!--GERA TABELA COM DADOS DOS MENUS-->
    <b-table bordered hover :items="this.menus" :fields="this.fields">
      <template v-slot:cell(options)="row">
        <b-button
          variant="info"
          class="btnShow"
          size="sm"
          @click="row.toggleDetails"
          style="left:30px; margin:7px"
        >Mostrar Menu</b-button>
        <b-button
          variant="danger"
          class="btnRemove"
          size="sm"
          @click="removeMenu(row.item.id)"
        >Eliminar Menu</b-button>
      </template>
      <!-- Mostar Detalhes do MENU -->
      <template v-slot:row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-center" style="margin-left:450px">
              <b>Componentes:</b>
              <div  class="text-sm-center"  v-for="component in row.item.components" :key="component">
                <li>{{component}}</li>
              </div>
            </b-col>
          </b-row>

         

          <!-- <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button> -->
        </b-card>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [],
      fields: [
        {
          key: "name",
          lable: "nome",
          sortable: "true"
        },
        {
          key: "type",
          lable: "type",
          sortable: "true"
        },
        {
          key: "options"
        }
      ]
    };
  },
  created() {
    if (localStorage.getItem("foodMenus")) {
      this.$store.state.foodMenus = JSON.parse(
        localStorage.getItem("foodMenus")
      );
      this.menus = this.$store.state.foodMenus;
    }
  },
  methods: {
    removeMenu(id) {
      for (let i in this.menus) {
        if (this.menus[i].id === id) {
          this.menus = this.menus.filter(
            menus => this.menus[i].id !== menus.id
          );
          localStorage.setItem("foodMenus", JSON.stringify(this.menus));
          this.$store.state.menus = JSON.parse(
            localStorage.getItem("foodMenus")
          );
          alert("MENU REMOVIDO");
        }
      }
    }
  }
};
</script>>