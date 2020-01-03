<template>
  <div class="bckUsers">
    <b-table striped hover :items="this.items" :fields="this.fields"></b-table>
  </div>
</template>


<script>
export default {
  data() {
    return { items: [], fields:[{key:"id",lable:"ID"},{key:"name",lable:"Nome",sortable:"true"},{key:"",lable:""}]};
  },
  created(){
    this.items=JSON.parse(localStorage.getItem("users"))
    }
};
</script>

<style>
.table {
  position: sticky;
  color: black;
  top: 50px;
  left: 500px;
}
</style>