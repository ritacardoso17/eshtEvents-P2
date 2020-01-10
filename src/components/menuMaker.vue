<template>
  <div>
    <div class="container" id="cardsMenu">
      <div class="row">
        <div class="col-sm-4" v-for="menu in this.menus" :key="menu.id">
          <b-card
            :title="menu.name"
            :img-src="menu.image"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 15rem;"
            class="mb-2"
          >
            <b-card-text>{{menu.ingredients}}</b-card-text>

            <b-button v-b-modal.modal-2 id="cardBtn" >Ver mais</b-button>
            <div>
              <b-modal id="modal-2" :title="menu.name">
                  <img src="" alt="">
                <p class="my-4">{{menu.ingredients}}</p>
              </b-modal>
            </div>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data: function() {
    return {
      menus: [
        {
          name: "coffeebreak A",
          image: require("../assets/transferir.jpg"),
          ingredients: "no idea"
        },
        {
          name: "coffeebreak B",
          image: require("../assets/transferir.jpg"),
          ingredients: "no idea"
        },
        {
          name: "coffeebreak B",
          image: require("../assets/transferir.jpg"),
          ingredients: "no idea"
        },
        {
          name: "coffeebreak B",
          image: require("../assets/transferir.jpg"),
          ingredients: "no idea"
        },
        {
          name: "coffeebreak B",
          image: require("../assets/transferir.jpg"),
          ingredients: "no idea"
        },
        {
          name: "coffeebreak B",
          image: require("../assets/transferir.jpg"),
          ingredients: "no idea"
        }
      ]
    };
  },
  created() {
    //   this.menus = JSON.parse(localStorage.getItem("foodMenus"))
  }
};
</script>

<style>
#cardsMenu {
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
  border-color: #DAAA29;
  background-color: #000;
}
</style>