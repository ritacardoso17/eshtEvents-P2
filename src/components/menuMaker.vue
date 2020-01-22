<template>
  <div>
    <b-form>
      <div class="form-group">
        <input type="search" v-model="searchTxt" id="filterTxt" placeholder="Escreve aqui..." />
        <b-button id="btnFilter">Pesquisar</b-button>
      </div>
      <div class="form-group">
        <select class="custom-select" id="sltFilter" v-model="filterSlt"> 
          <option value="todos" selected>Todos</option>
          <option value="coffee break">Coffee Break</option>
          <option value="almoço">Almoço</option>
          <option value="jantar">Jantar</option>
          <option value="porto de honra">Porto de Honra</option>
        </select>
      </div>
    </b-form>
    <div class="container" id="cardsMenu">
      <div class="row">
        <div class="col-sm-4" v-for="menu in filterMenus" :key="menu.id">
          <b-card
            :title="menu.name"
            :img-src="menu.img"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 15rem;"
            class="mb-2"
            id="cards"
          >
            <b-card-text>{{menu.type}}</b-card-text>
            <p>{{menu.id}}</p>
            <b-button v-b-modal="menu.id.toString()" id="cardBtn">Ver mais</b-button>
            <div>
              <b-modal :id="menu.id.toString()" :title="menu.name" ok-only ok-title="cancel">
                <b-img :src="menu.image" id="imgModal" />
                <p class="my-4">{{menu.ingredients}}</p>
              </b-modal>
            </div>
          </b-card>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data: function() {
    return {
      menus: [],
      searchTxt: ""
    };
  },
  created() {
    this.$store.state.foodMenus = JSON.parse(localStorage.getItem("foodMenus"));
    this.menus = this.$store.state.foodMenus;
  },
  computed: {
    filterMenus() {
      return this.menus.filter(
        menu => {
        let filterResult = true;

        if (this.searchTxt == "") {
          return filterResult;
        }
        if (menu.name.includes(this.searchTxt)) {
          filterResult = menu.name.includes(this.searchTxt);
          return filterResult;
        }
      });
    }
  }
};
</script>

<style>
#cardsMenu {
  position: center;
}
#cards {
  margin: 50px;
}
#cardBtn {
  position: relative;
  width: 90px;
  font-size: 12px;
  height: 30px;
  color: white;
  background-color: #000;
  font-family: GeosansLight;
  border: 2px solid black;
}
#cardBtn:hover {
  color: white;
  border: 2px solid;
  border-color: #daaa29;
  background-color: #000;
}
#imgModal {
  position: absolute;
}
#filterTxt {
  width: 200px;
  height: 28px;
  position: relative;
  left: -400px;
  top: 25px;
  font-family: GeosansLight;
}
#btnFilter {
  position: absolute;
  width: 80px;
  height: 30px;
  left: 340px;
  top: 584px;
  white-space: nowrap;
  padding: 4px;
  font-size: 70%;
  color: white;
  background-color: black;
  font-family: GeosansLight;
  border: 2px solid black;
}
#btnFilter:hover {
  color: white;
  border: 2px solid;
  border-color: #daaa29;
  background-color: black;
}
#sltFilter {
  width: 200px;
  height: 33px;
  position: relative;
  font-family: GeosansLight;
  left: -401px;
  top: 28px;
}
</style>