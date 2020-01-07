<template>
  <div class="bckUsers">
    <b-table striped hover :items="this.items" :fields="this.fields">
       <!-- <template v-slot:cell(typeUser)="row">
        <b-form-select :options="[{text:user},{text:admin}]" v-model="row.item.typeUser">
      </b-form-select>
      </template> -->
      <template v-slot:cell(options)="row">
        <b-button class="lol" size="sm" @click="row.removeUser">
         Eliminar Utilizador
        </b-button>
        
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
       items: [], 
       fields:[{key:"id",lable:"id"},{key:"name",lable:"name",sortable:"true"},{key:"typeUser",lable:"typeUser"},{key:"options"}]
       };
  },
  created(){
    this.items=JSON.parse(localStorage.getItem("users"))
    }, 
    removeUser(){
      alert("dd")
    }
};
</script>

<style>
.b-table {
  position: sticky;
  color: black;
  top: 50px;
  left: 500px;
}
.lol{
  width: 210px;
  height: 70px;
}

</style>