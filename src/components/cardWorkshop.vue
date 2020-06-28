<template>
  <div class="container">
    <b-button class="filterName" @click="orderByName()">Ver por nome</b-button>
    <b-button class="filterDate" @click="orderByDate()">Ver por mais recente</b-button>
    <br />
    <br />
    <br />
    <div class="row" v-for="workshop in workshops" v-bind:key="workshop.id_workshop">
      <b-card
        :header="workshop.name"
        header-text-variant="white"
        header-tag="header"
        no-body
        class="overflow-hidden"
        style="max-width: 1000px; max-height:300px; margin-bottom:50px; font-family:GeosansLight; color: black"
        align="left"
      >
        <b-row no-gutters>
          <hr class="yay-line" />
          <b-col md="6">
            <b-card-img :src="workshop.img" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body style="margin-left: 10px;">
              <b-card-text>
                Data: {{ workshop.data_hora }}
                <br />
                Locutor:{{ workshop.locutor }}
                <br />
                Vagas:{{ workshop.nr_vagas }}
              </b-card-text>
              <b-card-text>{{ workshop.info }}</b-card-text>
              <button
                @click="sign(workshop.id_workshop)"
                type="button"
                class="btn"
                id="sign"
              >Inscrever</button>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>

    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VueSimpleAlert from "vue-simple-alert";
export default {
  name: "workshop",
  data() {
    return {
      workshops: [],
      show: "none",
      show2: "inline",
      signMe: "Inscrever-me"
    };
  },
  created() {
    this.getAllWorkshops();
    if (this.getLoggedUser() !== "") {
      this.show2 = "inline";
    } else {
      this.signMe = "nao podes pah";
    }
  },
  computed: {
    ...mapGetters(["getWorkshops"])
  },
  methods: {
    getLoggedUser() {
      return this.$store.getters.getLoggedUserId;
    },
    getUserEmail() {
      return this.$store.getters.getLoggedUserEmail;
    },

    async sign(id) {
      try {
        await this.$store.dispatch("addUserWorkshop", {
          id_workshop: id
        });
        this.getAllWorkshops();
      } catch (err) {
        VueSimpleAlert.fire("Já inscrito no Workshop");
      }
    },
    orderName(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      else return 0;
    },
    orderByName() {
      this.workshops = this.workshops.sort(this.orderName);
    },
    orderDate(date1, date2) {
      if (date1.data_hora < date2.data_hora) return -1;
      if (date1.data_hora > date2.data_hora) return 1;
      else return 0;
    },
    orderByDate() {
      this.workshops = this.workshops.sort(this.orderDate);
    },

    //get workshops
    async getAllWorkshops() {
      try {
        await this.$store.dispatch("getWorkshops");
        this.workshops = this.getWorkshops;
      } catch (err) {
        alert(err);
      }
    }
  }
};
</script>

<style>
#sign {
  background-color: black;
  color: white;
  font-family: GeosansLight;
  background-color: #232323;
  border: 2px solid #232323;
  border-radius: 0px;
  margin-top: 4%;
  margin-left: 75%;
}

.card-header {
  background-color: #232323;
  font-size: 150%;
}

.yay-line {
  background-color: #daaa29;
  position: relative;
  height: 10px;
  width: 100%;
  margin-top: -10px;
  margin-bottom: -90px;
}

.filterName {
  font-family: GeosansLight;
  background-color: #232323;
  border: 2px solid #232323;
  border-radius: 0px;
  right: 43%;
  position: absolute;
}

.filterName:hover,
.filterDate:hover,
#sign:hover {
  border: 2px solid #daaa29;
  background-color: black;
}

.filterDate {
  font-family: GeosansLight;
  background-color: #232323;
  border-color: #232323;
  left: 42%;
  border-radius: 0px;
  position: absolute;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
