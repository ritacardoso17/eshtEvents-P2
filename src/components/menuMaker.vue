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
            id="cards"
          >
            <b-card-text>{{menu.ingredients}}</b-card-text>
            <p>{{menu.id}}</p>
            <b-button  v-b-modal="menu.id" id="cardBtn" >Ver mais</b-button>
            <div>
              <b-modal :id="menu.id" :title="menu.name" ok-only ok-title="cancel">
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
          id:"0",
          name: "coffeebreak A",
          type:"coffebreak",
          image: require("../assets/transferir.jpg"),
          ingredients: "no idea"
        },
        {
          id:"1",
          name: "coffeebreak B",
          type:"coffebreaak",
          image: require("../assets/transferir.jpg"),
          ingredients: "no idea"
        },
        {
          id:"2",
          name: "coffeebreak B",
          type:"coffebreak",
          image: require("../assets/transferir.jpg"),
          ingredients: "no idea"
        },
        {
          id:"3",
          name: "coffeebreak B",
          type:"coffebressak",
          image: require("../assets/transferir.jpg"),
          ingredients: "no idea"
        },
        {
          id:"4",
          name: "coffeebreak B",
          type:"coffebreak",
          image: require("../assets/transferir.jpg"),
          ingredients: "no idea"
        },
        {
          id:"5",
          name: "coffeebreak B",
          type:"coffebreak",
          image: require("../assets/transferir.jpg"),
          ingredients: "no idea"
        },
         {
          id:"6",
          name: "Porto de Honra A",
          type:"coffebreak",
          image: require("../assets/transferir.jpg"),
          ingredients: "no idea"
        },
        {
          id:"7",
          name: "Porto de Honra B",
          type:"coffebreak",
          image: require("../assets/transferir.jpg"),
          ingredients: "no idea"
        },
        {
          id:"8",
          name: "Porto de Honra B",

          type:"coffebreak",
          image: require("../assets/transferir.jpg"),
          ingredients: "no idea"
        },
        {
          id:"9",
          name: "Porto de Honra B",
          type:"coffebreak",
          image: require("../assets/transferir.jpg"),
          ingredients: "no idea"
        },
        {
          id:"10",
          name: "Porto de Honra B",
          type:"coffebreak",
          image: require("../assets/transferir.jpg"),
          ingredients: "no idea"
        },
        {
          id:"11",
          name: "Porto de Honra B",
          type:"coffebreak",
          image: require("../assets/transferir.jpg"),
          ingredients: "no idea"
        }
      ]
    };
  },
  created() {
     this.foodMenus = JSON.parse(localStorage.getItem("foodMenus"))
  },
  methods:{
    addMenu(){
      this.menus.push
    }
  }
  
};
</script>

<style>
#cardsMenu {
    position: center;
}
#cards{
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
  border-color: #DAAA29;
  background-color: #000;
}
</style>