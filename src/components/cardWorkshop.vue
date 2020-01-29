<template>
  <div class="container">
    <b-button @click="orderByName()">Ordenar por nome</b-button>
    <b-button @click="orderByDate()">Ordenar por Data</b-button>

    <!-- DROPDOWN  -->
    <!-- <select v-model="selectE" id="sltFilter">
          <option @change="orderByName()">Ordenar por nome AZ</option>
          <option @change="orderByDate()">Ordenar por data mais</option>
    </select>-->
    <div v-for="workshop in workshops" v-bind:key="workshop.id">
      <!-- CARD WORKSHOPS À DIREITA -->
      <span v-if="workshop.id % 2 == 0">
        <div class="card-header" id="headerWork">
          {{workshop.title}}
          <hr id="lineCards" />
        </div>
        <b-card
          :img-src="workshop.img"
          img-alt="Image"
          img-right
          img-width="40%"
          tag="article"
          class="mb-2"
          id="workCard"
        >
          <b-card-text id="workDescrip">{{workshop.description}}</b-card-text>
          <b-card-text id="workInfo2">
            {{workshop.date}}
            <br />
            Sala: {{workshop.place}}
            <br />
            Locutor: {{workshop.teacher}}
            <br />
            Vagas: {{workshop.vacancies}}
          </b-card-text>
          <!-- 
            <b-button
              href="#"
              v-bind:style="{display: show}"
              id="workInscp"
              variant="primary"
              @click="sign(workshop.id)"
          >Inscrever-me</b-button>-->

          <b-button
            href="#"
            v-bind:style="{display: show2}"
            id="workInscp"
            variant="primary"
            @click="sign(workshop.id)"
          >Inscrever-me</b-button>

          <!-- por este b-button como router link para o login mas manter o v-bind  -->
        </b-card>
        <br />
        <br />
        <br />
      </span>
      <!-- CARD WORKSHOPS À ESQUERDA -->
      <span v-else>
        <div class="card-header" id="headerWork">
          {{workshop.title}}
          <hr id="lineCards" />
        </div>
        <b-card
          :img-src="workshop.img"
          img-alt="Image"
          img-left
          img-width="40%"
          tag="article"
          class="mb-2"
          id="workCard"
        >
          <b-card-text id="workDescrip">{{workshop.description}}</b-card-text>
          <b-card-text id="workInfo">
            {{workshop.date}}
            <br />
            Sala: {{workshop.place}}
            <br />
            Locutor: {{workshop.teacher}}
            <br />
            Vagas: {{workshop.vacancies}}
          </b-card-text>

          <!-- <b-button
            href="#"
            v-bind:style="{display: show}"
            id="workInscp2"
            variant="primary"
            @click="sign(workshop.id)"
          >Inscrever-me</b-button>-->
          <b-button
            href="#"
            v-bind:style="{display: show2}"
            id="workInscp2"
            variant="primary"
            @click="sign(workshop.id)"
          >{{signMethefuckUp}}</b-button>
        </b-card>
        <br />
        <br />
        <br />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workshops: [],
      show: "none",
      show2: "inline",
      signMethefuckUp: "Inscrever-me",
    };
  },
  created() {
    if (localStorage.getItem("workshops")) {
      //  this.workshops  = JSON.parse(localStorage.getItem("workshops"));
      //  this.workshops=this.$store.state.workshops
      this.$store.state.workshops = JSON.parse(
        localStorage.getItem("workshops")
      );
      this.workshops = this.$store.state.workshops;
    }
    if (!localStorage.getItem("loggedUser") != 0) {
      // this.show = "none";
      this.show2 = "inline";
      this.signMethefuckUp = "BORA FDS";
    } else if (localStorage.getItem("loggedUser") == 0) {
      // this.show = "inline";
      this.show2 = "none";
    }
  },
  methods: {
    getLoggedUser() {
      return this.$store.getters.getLoggedUser;
    },
    getUserEmail() {
      return this.$store.getters.getLoggedUserEmail;
    },

    sign(id) {
      //SEPARAR IF PARA POR ALERTS DIFERENTES!!!
      //COMO GUARDAR STORAGE??
      for (let i in this.workshops) {
        if (this.workshops[i].id === id) {
          if (
            this.workshops[i].vacancies > 0 &&
            this.workshops[i].userEmail != this.getUserEmail()
          ) {
            this.workshops[i].vacancies = this.workshops[i].vacancies - 1;
            this.workshops[i].userEmail = this.getUserEmail();
            //  this.show2 = "none";
            this.signMethefuckUp = "Já se inscreveu";
            
            localStorage.setItem("workshops", JSON.stringify(this.workshops));
            this.$store.getters.getLoggedUser = this.workshops;
          } else if (
            this.workshops[i].vacancies > 0 &&
            this.workshops[i].userEmail == this.getUserEmail()
          ) {
            alert("Não se pode inscrever mais do que uma vez!");
            // this.lolitos = "false";
          } else {
            alert("Não há mais vagas");
          }
        }
      }
    },
    orderName(a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      else return 0;
    },
    orderByName() {
      this.workshops = this.workshops.sort(this.orderName);
    },
    orderDate(date1, date2) {
      if (date1.date < date2.date) return -1;
      if (date1.date > date2.date) return 1;
      else return 0;
    },
    orderByDate() {
      this.workshops = this.workshops.sort(this.orderDate);
    }
  }
};
</script>

<style>
#workCard {
  margin: 0 auto;
  /* Added */
  float: none;
  /* Added */
  margin-bottom: 10px;
  /* Added */
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
  height: 15px;
  width: 1100px;
  position: relative;
  left: -20px;
  top: -20px;
}

#workDescrip {
  text-align: justify;
  font-family: GeosansLight;
  width: 450px;
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
  text-align: justify;
  position: absolute;
  font-family: GeosansLight;
  width: 450px;
  font-size: 100%;
  bottom: -10px;
  left: 180px;
}

#workInscp {
  position: relative;
  width: 100px;
  height: 30px;
  font-size: 90%;
  padding: 4px;
  color: white;
  border: 1px solid black;
  bottom: -100px;
  left: 270px;
  background-color: #232323;
  font-family: GeosansLight;
}

#workInscp:hover {
  color: white;
  border: 2px solid;
  border-color: #daaa29;
  background-color: #000;
}

#workInscp2 {
  position: relative;
  width: 100px;
  height: 30px;
  font-size: 90%;
  padding: 4px;
  color: white;
  border: 1px solid black;
  bottom: -100px;
  right: 270px;
  background-color: #232323;
  font-family: GeosansLight;
}

#workInscp2:hover {
  color: white;
  border: 2px solid;
  border-color: #daaa29;
  background-color: #000;
}
</style>