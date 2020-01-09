<template>
  <div class="bckUsers">
    <b-table striped hover :items="this.items" :fields="this.fields">
      <!-- <template v-slot:cell(typeUser)="row">
        <b-form-select :options="[{text:user},{text:admin}]" v-model="row.item.typeUser">
      </b-form-select>
      </template>-->
      <template v-slot:cell(options)="row">
        <b-button class="btnRemove" size="sm" @click="removeUser()">Eliminar Utilizador</b-button>
        <b-button class="btnChange" size="sm" @click="changeUser()">Mudar tipo de utilizador</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      fields: [
        { key: "id", lable: "id" },
        { key: "name", lable: "name", sortable: "true" },
        { key: "typeUser", lable: "typeUser" },
        { key: "options" }
      ]
    };
  },
  created() {
    localStorage.setItem("users", JSON.stringify(this.$store.state.users));
    if (localStorage.getItem("users")) {
      this.items = JSON.parse(localStorage.getItem("users"));
    }
  },
  //NAO FUNCIONA BEM YET
  methods: {
    removeUser() {
      this.$store.commit("REMOVE_USER", {
        id: this.items.id
      });
    },
    changeUser(){
      this.$store.commit("CHANGE_TYPE", {
        id: this.items.id
      });
    }
  }
};
</script>

<style>
.b-table {
  
  top: 50px;
  left: 500px;
}
.btnRemove {
  width: 210px;
  height: 70px;
  top:3px;

}
.btnChange {
  width: 210px;
  height: 70px;
  right: -12px;
  top:3px;
}
</style>