<template>
  <div class="bckMenus">
    <br>
    <h1>Gestão dos Menus</h1>
    <br>
    <b-button
      class="btnAdd"
      size="sm"
      :to="{path: '/addMenu' }"
      v-bind:style="{display:size}"
    >Adicionar Menu</b-button>
    <br />
    <br />
    <!--GERA TABELA COM DADOS DOS MENUS-->
    <b-table bordered hover :items="this.menus" :fields="this.fields" v-bind:style="{display:size}">
      <template v-slot:cell(details)="row">
        <b-button
          variant="info"
          class="btnShow"
          size="sm"
          @click="row.toggleDetails"
          style="left:30px; margin:7px"
        >Mostrar Menu</b-button>
      </template>
      <template v-slot:cell(options)="row">
        <b-button
          variant="danger"
          class="btnRemove"
          size="sm"
          @click="removeMenu(row.item.id)"
        >Eliminar Menu</b-button>
        <b-button
          class="btnRemove"
          size="sm"
          @click="editMenu(row.item.id,row.item.name,row.item.componets,row.item.img,row.item.type)"
        >Editar Menu</b-button>
      </template>
      <!-- Mostar Detalhes do MENU -->
      <template v-slot:row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-center" style="margin-left:450px">
              <b>Componentes:</b>
              <div class="text-sm-center" v-for="component in row.item.components" :key="component">
                <li>{{component}}</li>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </template>
    </b-table>
    <!-- EDITAR MENU  -->
    <div class="container" v-bind:style="{display:size2}">
      <h2>Editar menu</h2>
      <b-form v-on:submit.prevent="saveMenu()">
        <div class="container">
          <div class="row">
            <div class="col">
              <!-- NOME -->
              <b-form-group id="input-group-1" label="Nome do Menu:" label-for="input-1"></b-form-group>
              <input type="text" v-model="name" style=" width: 300px;" />
              <br />

              <!-- TIPO EVENTO -->
              <b-form-group id="input-group-1" label="Tipo de Evento:" label-for="input-1"></b-form-group>
              <select v-model="type">
                <option v-for="typeE in eventType" :key="typeE" @click="typeEvent(typeE)">{{typeE}}</option>
              </select>
            </div>
            <div class="col">
              <!-- IMAGEM -->
              <b-form-label name="image" for="txtImage" class="nameLabel">Imagem do Menu:</b-form-label>
              <br />
              <input type="link" class="form-control-center" v-model="img" />
              <br />

              <b-img v-bind:src="this.img" fluid style="width:200px"></b-img>
            </div>

            <div class="col">
              <!-- COMPONENTES DO MENU -->
              <b-form-group id="input-group-1" label="Componenetes:" label-for="input-1"></b-form-group>
              <div align="left" v-for="component in components" :key="component.id">
                <input type="checkbox" :value="component.name" unchecked v-model="componentsE" />
                {{component.name}}
              </div>
            </div>
          </div>
        </div>

        <b-button  type="submit" class="btnConf">Confirmar</b-button>

        <b-button type="button" class="btnConf" @click="cancel()">Cancelar</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [],
      id: "",
      name: "",
      fields: [
        {
          key: "name",
          label: "Nome",
          sortable: "true"
        },
        {
          key: "type",
          label: "Tipo de evento",
          sortable: "true"
        },
        {
          key: "details",
          label: "Detalhes"
        },
        {
          key: "options",
          label: "Opções"
        }
      ],
      size: "",
      components: [],
      componentsE: [],
      eventType: [],
      size2: "none"
    };
  },
  created() {
    if (localStorage.getItem("foodMenus")) {
      this.$store.state.foodMenus = JSON.parse(
        localStorage.getItem("foodMenus")
      );
      this.menus = this.$store.state.foodMenus;
    }
    if (localStorage.getItem("foodMenus")) {
      this.$store.state.foodMenus = JSON.parse(
        localStorage.getItem("foodMenus")
      );
    }
    if (localStorage.getItem("componentMenus")) {
      this.components = JSON.parse(localStorage.getItem("componentMenus"));
    }
    localStorage.setItem(
      "componentMenus",
      JSON.stringify(this.$store.state.componentMenus)
    );

    if (localStorage.getItem("eventType")) {
      this.eventType = JSON.parse(localStorage.getItem("eventType"));
    }
    localStorage.setItem(
      "eventType",
      JSON.stringify(this.$store.state.eventType)
    );
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
    },
    editMenu(id, name, componentsE, img, type) {
      this.size = "none";
      this.size2 = "block";

      this.name = name;
      // this.componentsE = componentsE;
      this.img = img;
      this.type = type;
      this.id = id;
    },
    saveMenu() {
      for (let m in this.menus) {
        if (this.menus[m].id == this.id) {
          this.menus[m].name = this.name;
          this.menus[m].components = this.componentsE;
          this.menus[m].type = this.type;
          this.menus[m].img = this.img;

          localStorage.setItem("foodMenus", JSON.stringify(this.menus));
          alert("Menu Editado");
        }
      }
      this.size = "";
      this.size2 = "none";
      this.name = "";
      this.componentsE = [];
      this.img = "";
      this.type = [];
      this.id = "";
    },
    cancel() {
      this.size = "";
      this.size2 = "none";
      this.name = "";
      this.componentsE = [];
      this.img = "";
      this.type = [];
      this.id = "";
    }
  }
};
</script>>