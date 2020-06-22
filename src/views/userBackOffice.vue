<template>
  <div class="bckUsers">
    <br />
    <h2 class="adminTitle">Gestão de Utilizadores</h2>

    <b-table bordered hover :items="this.items" :fields="this.fields">
      <!-- <template v-slot:cell(typeUser)="row">
        <b-form-select :options="[{text:user},{text:admin}]" v-model="row.item.typeUser">
      </b-form-select>
      </template>-->
      <template v-slot:cell(details)="row">
        <b-button
          variant="info"
          class="btnDetails"
          size="sm"
          @click="row.toggleDetails"
          >Mostrar Detalhes</b-button
        >
      </template>
      <template v-slot:row-details="row">
        <b-card>
          <!-- Escola -->
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right">
              <b>Escola:</b>
              {{ row.item.escola }}
            </b-col>
            <b-col></b-col>
          </b-row>
          <!-- Menu -->
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right">
              <b>Email:</b>
              {{ row.item.email_ipp }}
            </b-col>
          </b-row>
          <!-- Contacto -->
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right">
              <b>Contacto:</b>
              {{ row.item.telemovel }}
            </b-col>
            <b-col></b-col>
          </b-row>
        </b-card>
      </template>
      <template v-slot:cell(options)="row">
        <b-button
          variant="danger"
          class="btnRemove"
          size="sm"
          @click="removeUser(row.item.id_utilizador)"
          style="margin:5px"
          >Eliminar Utilizador</b-button
        >
        <b-button
          class="btnChange"
          size="sm"
          @click="changeUser(row.item.id_utilizador, row.item.tipoUser)"
          >Mudar tipo de utilizador</b-button
        >
      </template>
    </b-table>
  </div>
</template>

<script>
import VueSimpleAlert from "vue-simple-alert";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      items: [],
      fields: [
        { key: "nome", label: "Nome utilizador", sortable: "true" },
        { key: "tipoUser", label: "Tipo de utilizador", sortable: "true" },
        { key: "details", label: "Detalhes" },
        { key: "options", label: "Opções" }
      ]
    };
  },
  created() {
    this.getAllUsers();
  },
  computed: {
    ...mapGetters(["getUsers"])
  },
  methods: {
    async getAllUsers() {
      try {
        await this.$store.dispatch("getUsers");
        this.items = this.getUsers;
      } catch (err) {
        alert(err);
      }
    },
    async removeUser(id) {
      if (id != this.$store.state.loggedUser.user[0].id_utilizador) {
        try {
          await this.$store.dispatch("removeUser", { id: id });
          this.getAllUsers();
        } catch (err) {
          alert(err);
        }
      } else {
        VueSimpleAlert.fire("Não pode eliminar o utilizador que esta loggado");
      }
    },
    async changeUser(id, tipoUser) {
      alert(tipoUser);
      if (tipoUser === "Administrador") {
        try {
          await this.$store.dispatch("editUserType", {
            id: id
          });
          this.getAllUsers();
        } catch (err) {
          alert(err);
        }
      } else {
        try {
          await this.$store.dispatch("editUserTypeClient", {
            id: id
          });
          this.getAllUsers();
        } catch (err) {
          alert(err);
        }
      }
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
  height: 40px;

  top: 3px;
}
.btnChange {
  width: 210px;
  height: 40px;
  right: -12px;
  top: 3px;
}
.adminTitle {
  font-family: GeosansLight;
  color: black;
}
</style>
