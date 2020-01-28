<template>
  <div>
    <b-form>
      <div class="form-group">
        <input type="search" v-model="searchTxt" id="filterTxt" placeholder="Escreve aqui..." />
      </div>
      <div class="form-group">
        <select v-model="selectE" id="sltFilter">
          <option v-for="typeE in eventType" :key="typeE" @change="filterMenus()">{{typeE}}</option>
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
            <b-button v-b-modal="menu.id.toString()" id="cardBtn">Ver mais</b-button>
            <div>
              <b-modal :id="menu.id.toString()" :title="menu.name" ok-only ok-title="cancel">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-6" v-for="component in menu.components" :key="component">
                      <p>{{component}}</p>
                    </div>
                  </div>
                </div>
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
      searchTxt: "",
      selectE: "Todos",
      eventType: []
    };
  },
  created() {
    this.$store.state.foodMenus = JSON.parse(localStorage.getItem("foodMenus"));
    this.menus = this.$store.state.foodMenus;

    if (localStorage.getItem("eventType")) {
      this.eventType = JSON.parse(localStorage.getItem("eventType"));
    }
    localStorage.setItem(
      "eventType",
      JSON.stringify(this.$store.state.eventType)
    );
  },
  computed: {
    filterMenus() {
      return this.menus.filter(menu => {
        let filterResult = true;
        let filterResultType = true;

        if (this.searchTxt !== "") {
          filterResult = menu.name.includes(this.searchTxt);
        }
        
        if (this.selectE !== "" && this.selectE !== "Todos") {
          filterResultType = menu.type.includes(this.selectE);
        }
        if(this.selectE === "Todos"){
           filterResult = menu
        }
        return filterResultType && filterResult;
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
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.14);
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.14);
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
  left: -120px;
  top: 25px;
  font-family: GeosansLight;
}

#btnFilter:hover {
  color: white;
  border: 2px solid;
  border-color: #daaa29;
  background-color: black;
}
#sltFilter {
  width: 200px;
  height: 28px;
  position: relative;
  font-family: GeosansLight;
  left: 100px;
  top: -20px;
}

</style>