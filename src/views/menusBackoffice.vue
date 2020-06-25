<template>
  <div class="bckMenus">
    <br />
    <h1 class="adminTitle">Gestão dos Menus</h1>
    <br />
    <b-button
      class="btnAdd"
      size="sm"
      :to="{ path: '/addMenu' }"
      v-bind:style="{ display: size }"
      >Adicionar Menu</b-button
    >
    <br />
    <br />
    <!--GERA TABELA COM DADOS DOS MENUS-->
    <b-table
      bordered
      hover
      :items="this.menus"
      :fields="this.fields"
      v-bind:style="{ display: size }"
    >
      <template v-slot:cell(details)="row">
        <b-button
          variant="info"
          class="btnShow"
          size="sm"
          @click="row.toggleDetails"
          style="left:30px; margin:7px"
          >Mostrar Menu</b-button
        >
      </template>
      <template v-slot:cell(options)="row">
        <b-button
          variant="danger"
          class="btnRemove"
          size="sm"
          @click="removeMenu(row.item.id_menu)"
          >Eliminar Menu</b-button
        >
        <b-button
          class="btnRemove"
          size="sm"
          @click="
            editMenu(
              row.item.id_menu,
              row.item.name,
              row.item.img,
              row.item.descritivo
            )
          "
          >Editar Menu</b-button
        >
      </template>
      <!-- Mostar Detalhes do MENU -->
      <template v-slot:row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-center" style="margin-left:450px">
              <b>Componentes:</b>
              <div
                class="text-sm-center"
                v-for="component in components"
                :key="component.id_menu"
              >
                <div v-if="component.id_menu === row.item.id_menu">
                  <li>{{ component.descritivo }}</li>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </template>
    </b-table>
    <!-- EDITAR MENU  -->
    <div class="container" v-bind:style="{ display: size2 }">
      <h2>Editar menu</h2>
      <b-form v-on:submit.prevent="saveMenu()">
        <div class="container">
          <div class="row">
            <div class="col">
              <!-- NOME -->
              <b-form-group
                id="input-group-1"
                label="Nome do Menu:"
                label-for="input-1"
              ></b-form-group>
              <input type="text" v-model="name" style=" width: 300px;" />
              <br />

              <!-- TIPO EVENTO -->
              <b-form-group
                id="input-group-1"
                label="Tipo de Evento:"
                label-for="input-1"
              ></b-form-group>
              <select v-model="type">
                <option
                  v-for="typeE in eventType"
                  :key="typeE.id_tipo_reserva"
                  @click="typeEvent(typeE)"
                  :value="typeE.id_tipo_reserva"
                  >{{ typeE.descritivo }}</option
                >
              </select>
            </div>
            <div class="col">
              <!-- IMAGEM -->
              <b-form-label name="image" for="txtImage" class="nameLabel"
                >Imagem do Menu:</b-form-label
              >
              <br />
              <input type="link" class="form-control-center" v-model="img" />
              <br />

              <b-img v-bind:src="this.img" fluid style="width:200px"></b-img>
            </div>
            <!-- COMPONENTES DO MENU -->
            <div class="col">
              <div
                v-for="component in componentsEdit"
                :key="component.id_componente"
              >
                <b-form-group>
                  <b-form-checkbox-group v-model="checkComp">
                    <b-form-checkbox :value="component.id_componente">{{
                      component.descritivo
                    }}</b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
              </div>
            </div>
          </div>
        </div>
        <br />
        <b-button type="submit" class="btnConf">Confirmar</b-button>

        <b-button type="button" class="btnConf" @click="cancel()"
          >Cancelar</b-button
        >
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      menus: [],

      fields: [
        {
          key: "name",
          label: "Nome",
          sortable: "true"
        },
        {
          key: "descritivo",
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
      size2: "none",
      id: "",
      name: "",
      img: "",
      type: "",
      components: [],
      componentsEdit: [],
      componentsE: [],
      eventType: [],
      checkComp: []
    };
  },
  created() {
    this.getAllMenus();
    this.getTableComponents();
    this.getAllEventTypes();
    this.getMyComponents();
  },
  computed: {
    ...mapGetters(["getMenus"]),
    ...mapGetters(["getComponentsMenus"]),
    ...mapGetters(["getEvenTypes"]),
    ...mapGetters(["getAllComponents"])
  },
  methods: {
    async getAllMenus() {
      try {
        await this.$store.dispatch("getMenus");
        this.menus = this.getMenus;
      } catch (err) {
        alert(err);
      }
    },
    async getTableComponents() {
      try {
        await this.$store.dispatch("getComponents");
        this.components = this.getComponentsMenus;
      } catch (err) {
        alert(err);
      }
    },
    async getMyComponents() {
      try {
        await this.$store.dispatch("getAllComponents");
        this.componentsEdit = this.getAllComponents;
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

    async removeMenu(id) {
      try {
        await this.$store.dispatch("removeMenu", { id: id });
        this.getAllMenus();
      } catch (err) {
        alert(err);
      }
    },
    editMenu(id, name, img, type) {
      this.size = "none";
      this.size2 = "block";

      this.name = name;
      this.img = img;
      this.type = type;
      this.id = id;
      alert(
        this.name +
          this.img +
          "APARTIR DAQUI" +
          this.type +
          "APARTIR DAQUI" +
          this.id
      );
    },
    async saveMenu() {
      try {
        await this.$store.dispatch("editMenu", {
          id: this.id,
          id_componente: this.checkComp,
          id_tipo_reserva: this.type,
          description: this.name,
          img: this.img
        });
        this.size = "";
        this.size2 = "none";
        this.name = "";
        this.checkComp = [];
        this.img = "";
        this.type = [];
        this.id = "";
      } catch (err) {
        alert(err);
      }
      this.getAllMenus();
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
</script>
<style>
.adminTitle {
  font-family: GeosansLight;
  color: black;
}
</style>
