<template>
  <div>
    <b-form>
      <div class="form-group">
        <input type="search" v-model="searchTxt" id="filterTxt" placeholder="Escreve aqui..." />
      </div>
      <div class="form-group">
        <select v-model="selectE" id="sltFilter">
          <option
            v-for="typeE in eventType2"
            :key="typeE"
            @change="filterMenus()"
          >{{ typeE.descritivo }}</option>
        </select>
      </div>
    </b-form>
    <div class="container" id="cardsMenu">
      <div class="row">
        <div class="col-sm-4" v-for="menu in filterMenus" :key="menu.id_menu">
          <b-card
            :title="menu.name"
            :img-src="menu.img"
            img-alt="Image"
            img-top
            img-height="150px"
            tag="article"
            style="max-width: 15rem;min-width: 15rem; font-family: GeosansLight"
            class="mb-2"
            id="cards"
          >
            <b-card-text>{{ menu.descritivo }}</b-card-text>
            <b-button
              v-b-modal="menu.id_menu.toString()"
              id="cardBtn"
              @click="getAllComponents(menu.id_menu)"
            >Ver mais</b-button>
            <div>
              <b-modal
                :id="menu.id_menu.toString()"
                :title="menu.name + ' - ' + menu.descritivo"
                ok-only
                ok-title="cancel"
              >
                <div class="container">
                  <h4 id="titleModal">Complementos</h4>
                  <div class="row" style="margin: auto ;margin-top: 30px">
                    <div
                      class="col-sm-6"
                      align="center"
                      style=" margin: auto; margin-bottom: -15px"
                      v-for="component in components"
                      :key="component.id_menu"
                    >
                      <p  
                        id="components">-->{{component.descritivo }}</p>
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
import { mapGetters } from "vuex";
export default {
  name: "Menu",
  data: function() {
    return {
      menus: [],
      searchTxt: "",
      selectE: "Todos",
      eventType: [],
      eventType2: [],
      menus2: [],
      components: []
    };
  },
  created() {
    this.getAllMenus();

    this.getAllEventTypes();
  },
  computed: {
    ...mapGetters(["getMenus"]),
    ...mapGetters(["getComponentsMenus"]),
    ...mapGetters(["getEvenTypes"]),
    filterMenus() {
      return this.menus2.filter(menu => {
        let filterResult = true;
        let filterResultType = true;

        if (this.searchTxt !== "") {
          filterResult = menu.name.includes(this.searchTxt);
        }

        if (this.selectE !== "" && this.selectE != "Todos") {
          filterResultType = menu.tipo_reserva.includes(this.selectE);
        }
        return filterResultType && filterResult;
      });
    }
  },
  methods: {
    async getAllMenus() {
      try {
        await this.$store.dispatch("getMenus");
        this.menus2 = this.getMenus;
      } catch (err) {
        alert(err);
      }
    },
    async getAllComponents(id) {
      try {
        await this.$store.dispatch("getComponentsMenus", { id: id });
        this.components = this.getComponentsMenus;
      } catch (err) {
        alert(err);
      }
    },
    async getAllEventTypes() {
      try {
        await this.$store.dispatch("getEvenTypes");
        this.eventType2 = this.getEvenTypes;
      } catch (err) {
        alert(err);
      }
    }
  }
};
</script>

<style>
#cardsMenu {
  position: center;
}
#cards {
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
  background-color: #232323;
  font-family: GeosansLight;
  border: 2px solid #232323;
}
#cardBtn:hover {
  color: white;
  border: 2px solid;
  border-color: #daaa29;
  background-color: #232323;
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
  background-color: #232323;
}
#sltFilter {
  width: 200px;
  height: 28px;
  position: relative;
  font-family: GeosansLight;
  left: 100px;
  top: -20px;
}
.btn-primary {
  color: #fff;
  background-color: #232323;
  border-color: #daaa29;
}
.modal-title {
  font-size: 25px;
  margin-left: 100px;
  font-family: GeosansLight;
  font-weight: bold;
}
#components {
  font-family: GeosansLight;
  font-size: 16px;
}
.modal-footer {
  display: none;
}
.modal-body {
  height: 300px;
}
#titleModal {
  color: #daaa29;
  font-family: GeosansLight;
  margin-left: 140px;
}

.col-sm-4 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  margin-bottom: 50px;
}
</style>
