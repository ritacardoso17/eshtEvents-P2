<template>
  <div class="container">
    <b-button class="filterName" @click="orderByName()">Ver por nome</b-button>
    <b-button class="filterDate" @click="orderByDate()"
      >Ver por mais recente</b-button
    >
    <br />
    <br />
    <br />
    <div
      class="row"
      v-for="workshop in workshops"
      v-bind:key="workshop.id_workshop"
    >
      <!-- CARD WORKSHOPS À DIREITA -->
      <span v-if="workshop.id_workshop % 2 == 0">
        <div class="card-header" id="headerWork">
          {{ workshop.nome }}
          <hr id="lineCards" />
        </div>
        <div class="card-header" id="lineCards"></div>

        <b-card
          :img-src="workshop.img"
          img-alt="Image"
          img-right
          img-width="30%"
          tag="article"
          class="mb-2"
          id="workCard"
        >
          <b-card-text id="workDescrip">{{ workshop.descritivo }}</b-card-text>
          <b-card-text id="workInfo2">
            {{ workshop.data_hora }}
            <br />
            <!-- Preço: {{workshop.preco}} -->
            <br />
            Sala: {{ workshop.local }}
            <br />
            Locutor: {{ workshop.teacher }}
            <br />
            Vagas: {{ workshop.nr_vagas }}
          </b-card-text>

          <b-button
            href="#"
            v-bind:style="{ display: show2 }"
            id="workInscp2"
            variant="primary"
            @click="sign(workshop.id_workshop)"
            >{{ signMe }}</b-button
          >

          <!-- por este b-button como router link para o login mas manter o v-bind  -->
        </b-card>
        <br />
        <br />
        <br />
      </span>
      <!-- CARD WORKSHOPS À ESQUERDA -->
      <span v-else>
        <div class="card-header" id="headerWork">{{ workshop.title }}</div>
        <div class="card-header" id="lineCards"></div>

        <b-card
          :img-src="workshop.img"
          img-alt="Image"
          img-left
          img-width="30%"
          tag="article"
          class="mb-2"
          id="workCard"
        >
          <b-card-text id="workDescrip2">{{ workshop.descritivo }}</b-card-text>
          <b-card-text id="workInfo">
            {{ workshop.data_hora }}
            <br />
            <!-- Preço: {{workshop.preco}} -->
            <br />
            Sala: {{ workshop.local }}
            <br />
            Locutor: {{ workshop.teacher }}
            <br />
            Vagas: {{ workshop.nr_vagas }}
          </b-card-text>

          <b-button
            href="#"
            v-bind:style="{ display: show2 }"
            id="workInscp"
            variant="primary"
            @click="sign(workshop.id_workshop)"
            >{{ signMe }}</b-button
          >
        </b-card>
        <br />
        <br />
        <br />
      </span>
    </div>
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
      alert(id);
      try {
        await this.$store.dispatch("addUserWorkshop", {
          id_workshop: id
        });
      } catch (err) {
        VueSimpleAlert.fire("Já inscrito no Workshop");
      }
    },
    orderName(a, b) {
      if (a.nome < b.nome) return -1;
      if (a.nome > b.nome) return 1;
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
.card-maker {
  max-width: 70vw;
}

#workCard {
  margin: 0 auto;
  float: none;
  margin-bottom: 10px;
  box-shadow: 2px 2px #f5f5f0;
  padding: 10px;
}

#headerWork {
  background-color: #000;
  color: white;
  height: 50px;
  text-align: end;
  font-size: 150%;
  font-family: GeosansLight;
}
#lineCards {
  background-color: #daaa29;
  position: relative;
}
#workDescrip {
  text-align: right;
  font-family: GeosansLight;
  width: 250px;
  right: 32%;
  top: 2%;
  position: absolute;
}
#workDescrip2 {
  text-align: justify;
  font-family: GeosansLight;
  width: 250px;
  position: absolute;
}
#workInfo {
  text-align: justify;
  position: absolute;
  font-family: GeosansLight;
  width: 450px;
  font-size: 100%;
  bottom: -10px;
}
#workInfo2 {
  text-align: right;
  position: absolute;
  font-family: GeosansLight;
  width: 450px;
  font-size: 100%;
  bottom: -5%;
  right: 32%;
}
#workInscp {
  position: absolute;
  width: 100px;
  height: 30px;
  font-size: 90%;
  padding: 4px;
  color: white;
  top: 80%;
  left: 85%;
  border: 1px solid black;
  background-color: black;
  font-family: GeosansLight;
}

#workInscp:hover {
  color: white;
  border: 2px solid;
  border-color: #daaa29;
  background-color: #000;
}

#workInscp2 {
  position: absolute;
  width: 100px;
  height: 30px;
  font-size: 90%;
  padding: 4px;
  color: white;
  top: 80%;
  right: 85%;
  border: 1px solid black;
  background-color: black;
  font-family: GeosansLight;
}

#workInscp2:hover {
  color: white;
  border: 2px solid;
  border-color: #daaa29;
  background-color: #000;
}

@media screen and (max-width: 600px) {
  #workInscp2 {
    position: relative;
    width: 100px;
    height: 30px;
    font-size: 90%;
    padding: 4px;
    color: white;
    border: 1px solid black;
    background-color: black;
    font-family: GeosansLight;
  }

  #workInscp {
    position: relative;
    width: 100px;
    height: 30px;
    font-size: 90%;
    padding: 4px;
    color: white;
    border: 1px solid black;
    background-color: black;
    font-family: GeosansLight;
  }
}

.filterName {
  font-family: GeosansLight;
  background-color: black;
  border-color: black;
  right: 43%;
  position: absolute;
}
.filterName:hover {
  border: 2px solid #daaa29;
  background-color: black;
}
.filterDate {
  font-family: GeosansLight;
  background-color: black;
  border-color: black;
  left: 42%;
  position: absolute;
}
.filterDate:hover {
  border: 2px solid #daaa29;
  background-color: black;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
