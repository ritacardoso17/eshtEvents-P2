<template>
  <div>
    <br />
    <h2 class="adminTitle">Adicionar Menu</h2>

    <b-form v-on:submit.prevent="addMenus()">
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
        <option
          v-for="typeE in eventType"
          v-bind:value="typeE.id_tipo_reserva"
          :key="typeE"
          @click="typeEvent(typeE)"
        >{{typeE.descritivo}}</option>
      </select>

      <!-- COMPONENTES DO MENU -->
      <b-form-group id="input-group-1" label="Componenetes:" label-for="input-1"></b-form-group>
      <div v-for="component in components" :key="component.id_menu.toString()">
        <input type="checkbox" :value="component.descritivo" unchecked v-model="componentsNew" />
        {{component.descritivo}}
      </div>

      <b-button type="submit" class="btnConf">Confirmar</b-button>
    </b-form>

    <br />
    <h2>Componentes</h2>
    <b-form v-on:submit.prevent="addComponent()">
      <!-- NOME -->
      <h2>Adicionar novo componente</h2>
      <b-form-group id="input-group-1" label="Nome do Componente:" label-for="input-1"></b-form-group>
      <input type="text" v-model="nameComponent" style=" width: 300px;" placeholder="Insira o nome" />
      <br />
      <b-button type="submit" class="btnConf">Confirmar</b-button>
    </b-form>
    <b-table
      bordered
      fixed
      hover
      :items="this.components"
      :fields="this.fields"
      style="max-width:500px;"
    >
      <template v-slot:cell(remove)="row">
        <b-button
          variant="danger"
          class="btnDetails"
          size="sm"
          @click="removeComponent(row.item.id)"
        >X</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      name: "",
      img: "",
      typeEE: "",
      componentsNew: [],

      nameComponent: "",
      components: [],
      eventType: [],

      fields: [
        {
          key: "descritivo",
          label: "Nome do componente",
          sortable: "true"
        },
        { key: "remove", label: "Remover" }
      ]
    };
  },
  created() {
    this.getAllEventTypes();
    this.getAllComponents();
  },
  computed: {
    ...mapGetters(["getEvenTypes"]),
    ...mapGetters(["getComponentsMenus"])
  },
  methods: {
    async addMenus() {
      try {
        await this.$store.dispatch("addMenus", {
          name: this.name,
          img: this.img,
          type: this.typeEE,
          components: this.componentsNew
        });
      } catch (err) {
        alert(err);
      }
    },
    async getAllEventTypes() {
      try {
        await this.$store.dispatch("getEvenTypes");
        this.eventType = this.getEvenTypes;
      } catch (err) {
        alert(err);
      }
    },
    async getAllComponents() {
      try {
        await this.$store.dispatch("getComponentsMenus");
        this.components = this.getComponentsMenus;
      } catch (err) {
        alert(err);
      }
    }
    // addComponent() {
    //   this.$store.commit("ADD_COMPONENT", {
    //     id: this.getLastIdComponent() + 1,
    //     name: this.nameComponent
    //   });
    // },
    // removeComponent(id) {
    //   for (let i in this.components) {
    //     if (this.components[i].id === id) {
    //       this.components = this.components.filter(
    //         component => this.components[i].id !== component.id
    //       );

    //       localStorage.setItem(
    //         "componentMenus",
    //         JSON.stringify(this.components)
    //       );
    //       this.$store.state.componentMenus = localStorage.setItem(
    //         "componentMenus",
    //         JSON.stringify(this.components)
    //       );
    //     }
    //   }
    // }
  }
};
</script>
<style>
.adminTitle {
  font-family: GeosansLight;
  color: black;
}
.toast-header {
  background-color: #b3ff66;
}
</style>