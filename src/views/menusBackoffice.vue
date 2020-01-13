<template>
  <div class="bckMenus">
    <b-table bordered hover :items="this.menus" :fields="this.fields">
      <!-- <template v-slot:cell(typeUser)="row">
        <b-form-select :options="[{text:user},{text:admin}]" v-model="row.item.typeUser">
      </b-form-select>
      </template>-->
      <template v-slot:cell(options)="row"></template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [],
      fields: [
        { key: "id", lable: "id" },
        { key: "name", lable: "name", sortable: "true" },
        { key: "type", lable: "type", sortable: "true" },
        { key: "options" }
      ]
    };
  },
  created() {
    if (localStorage.getItem("foodMenus")) {
      this.$store.state.menus = JSON.parse(localStorage.getItem("foodMenus"));
    }
  },
  methods:{

  }
};
</script>>