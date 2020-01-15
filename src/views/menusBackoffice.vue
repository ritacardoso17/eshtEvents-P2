<template>
  <div class="bckMenus">
    <b-button class="btnAdd" size="sm">Adicionar Menu</b-button>
    <br> <br>
    <b-table bordered hover :items="this.menus" :fields="this.fields">
      <!-- <template v-slot:cell(typeUser)="row">
        <b-form-select :options="[{text:user},{text:admin}]" v-model="row.item.typeUser">
      </b-form-select>
      </template>-->
      <template v-slot:cell(options)="row">
        <b-button class="btnRemove" size="sm" @click="removeMenu(row.item.id)">Eliminar Menu</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menus: [],
        fields: [{
            key: "id",
            lable: "id"
          },
          {
            key: "name",
            lable: "name",
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
        this.$store.state.foodMenus = JSON.parse(localStorage.getItem("foodMenus"));
        this.menus = this.$store.state.foodMenus
      }
    },
    methods: {
      removeMenu(id) {
        for (let i in this.menus) {
          if (this.menus[i].id === id) {
            this.menus = this.menus.filter(menus => this.menus[i].id !== menus.id)
            localStorage.setItem("foodMenus", JSON.stringify(this.menus))
            this.$store.state.menus = JSON.parse(localStorage.getItem("foodMenus"));
            this.menus = this.$store.state.foodMenus
          }
        }
      }
    },

  };
</script>>