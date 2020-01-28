<template>
  <div>
    <br />
    <h2>Adicionar Menu</h2>

    <b-form v-on:submit.prevent="addMenu()">
      <!-- NOME -->
      <b-form-group id="input-group-1" label="Nome do Menu:" label-for="input-1"></b-form-group>
      <input type="text" v-model="name" style=" width: 300px;" placeholder="Insira o titulo" />
      <br />
      <!-- IMAGEM -->
      <b-form-label name="image" for="txtImage" class="nameLabel">Imagem do Menu:</b-form-label>
      <br />
      <input type="link" class="form-control-center" placeholder="Insira uma imagem" v-model="img" />
      <b-img v-bind:src="this.img" fluid style="width:200px"></b-img>

      <!-- TIPO EVENTO -->
      <b-form-group id="input-group-1" label="Tipo de Evento:" label-for="input-1"></b-form-group>
      <select v-model="typeEE">
        <option v-for="typeE in eventType" :key="typeE" @click="typeEvent(typeE)">{{typeE}}</option>
      </select>

      <!-- COMPONENTES DO MENU -->
      <b-form-group id="input-group-1" label="Componenetes:" label-for="input-1"></b-form-group>
      <div v-for="component in components" :key="component.id">
        <input type="checkbox" :value="component.name" unchecked v-model="componentsNew" />
        {{component.name}}
      </div>

      <b-button type="submit" class="btnConf">Confirmar</b-button>
    </b-form>

    <br />
    <h2>Adicionar Complemento</h2>
    <b-form v-on:submit.prevent="addComponent()">
      <!-- NOME -->
      <b-form-group id="input-group-1" label="Nome do Componente:" label-for="input-1"></b-form-group>
       <b-table bordered fixed hover :items="this.components" :fields="this.fields" style="max-width:500px;">
      <template v-slot:cell(details)="row">
        <b-button class="btnDetails" size="sm" @click="row.toggleDetails">Mostrar Detalhes</b-button>
      </template>
       </b-table>
      <input type="text" v-model="nameComponent" style=" width: 300px;" placeholder="Insira o nome" />
      <br/>
      <b-button type="submit" class="btnConf">Confirmar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      id: this.getLastIdMenu() + 1,
      name: "",
      img: "",
      typeEE: "",
      componentsNew: [],

      nameComponent: "",
      components: [],
      eventType: []
    };
  },
  created() {
    window.addEventListener("unload", this.saveStorage);
    if (localStorage.getItem("foodMenus")) {
      this.$store.state.foodMenus = JSON.parse(
        localStorage.getItem("foodMenus")
      );
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
    }
  },
 
  methods: {
    saveStorage() {
      localStorage.setItem(
        "foodMenus",
        JSON.stringify(this.$store.state.foodMenus)
      );
    },
    getLastIdMenu() {
      return this.$store.getters.getLastIdMenu;
    },
    getLastIdComponent() {
      return this.$store.getters.getLastIdComponents;
    },
    addMenu() {
      this.$store.commit("ADD_MENU", {
        id: this.getLastIdMenu() + 1,
        name: this.name,
        img: this.img,
        type: this.typeEE,
        components: this.componentsNew
      });
    },
    typeEvent(tipo) {
      for (let e in this.eventType) {
        if (tipo == this.eventType[e]) {
          this.type = tipo;
          alert(tipo);
        }
      }
    },
    addComponent() {
      this.$store.commit("ADD_COMPONENT", {
        id: this.getLastIdComponent() + 1,
        name: this.nameComponent
      });
    }
  }
};
</script>