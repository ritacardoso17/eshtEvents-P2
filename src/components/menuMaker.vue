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
            <b-card-text>{{menu.type}}</b-card-text>
            <p>{{menu.id}}</p>
            <b-button v-b-modal="menu.id" id="cardBtn">Ver mais</b-button>
            <div>
              <b-modal :id="menu.id" :title="menu.name" ok-only ok-title="cancel">
                <b-img :src="menu.image" id="imgModal"/>
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
      menus: []
    };
  },
  created() {
    this.menus = JSON.parse(localStorage.getItem("foodMenus"));
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
#imgModal{
  position: absolute;
}
</style>