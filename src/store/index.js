import Vue from "vue";
import Vuex from "vuex";
/* import router from "vue-router";
 */
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      { id: 0, name: "Admin", school: "", typeUser: "admin", email: "admin@email.com", password: "123", birth: "", contact: "" }
    ],
    userExist: false,
    loggedUser: [],
    rooms: [
      { id:0, user:"Rita", type: "./assets/imgInicial.jpg", day: "06-04-2020", time: "19:45", duration: "2", extras: ""}
    ],
    workshops: [
      {
        id: 1,
        title: "Workshop A",
        vacancies: 20,
        img: require('../assets/CatePessoas.jpg'),
        description: "O Restaurante de Aplicação da Escola Superior de Hotelaria e Turismo é da responsabilidade do Politécnico do Porto, com capacidade para 50 pessoas sentadas. Durante estes últimos anos, o Restaurante tem acolhido diversos eventos, conseguindo sempre estar à altura das expectativas dos clientes.",
        date: "6 de Abril de 2020",
        room: "B204",
        locutor: "Américo Andrade"
      },
      {
        id: 2,
        title: "Workshop B",
        vacancies: 20,
        img: require('../assets/CatePessoas.jpg'),
        description: "O Restaurante de Aplicação da Escola Superior de Hotelaria e Turismo é da responsabilidade do Politécnico do Porto, com capacidade para 50 pessoas sentadas. Durante estes últimos anos, o Restaurante tem acolhido diversos eventos, conseguindo sempre estar à altura das expectativas dos clientes.",
        date: "6 de Abril de 2020",
        room: "B204",
        locutor: "Américo Andrade"
      },
      {
        id: 3,
        title: "Workshop C",
        vacancies: 20,
        img: require('../assets/CatePessoas.jpg'),
        description: "O Restaurante de Aplicação da Escola Superior de Hotelaria e Turismo é da responsabilidade do Politécnico do Porto, com capacidade para 50 pessoas sentadas. Durante estes últimos anos, o Restaurante tem acolhido diversos eventos, conseguindo sempre estar à altura das expectativas dos clientes.",
        date: "6 de Abril de 2020",
        room: "B204",
        locutor: "Américo Andrade"
      }
    ],
    foodMenus: [
      {
        id: 1,
        img: require('../assets/transferir.jpg'),
        name: "Menu A",
        type: "coffeebreak"
      },
      {
        id: 2,
        img: require('../assets/transferir.jpg'),
        name: "Menu B",
        type: "coffeebreak"
      },
      {
        id: 3,
        img: require('../assets/transferir.jpg'),
        name: "Menu C",
        type: "coffeebreak"
      },
      {
        id: 4,
        img: require('../assets/transferir.jpg'),
        name: "Menu A",
        type: "coffeebreak"
      },
      {
        id: 5,
        img: require('../assets/transferir.jpg'),
        name: "Menu B",
        type: "coffeebreak"
      },
      {
        id: 6,
        img: require('../assets/transferir.jpg'),
        name: "Menu C",
        type: "coffeebreak"
      },
      {
        id: 7,
        img: require('../assets/transferir.jpg'),
        name: "Menu A",
        type: "coffeebreak"
      },
      {
        id: 8,
        img: require('../assets/transferir.jpg'),
        name: "Menu B",
        type: "coffeebreak"
      },
      {
        id: 9,
        img: require('../assets/transferir.jpg'),
        name: "Menu C",
        type: "coffeebreak"
      },
      {
        id: 10,
        img: require('../assets/transferir.jpg'),
        name: "Menu A",
        type: "coffeebreak"
      },
      {
        id: 11,
        img: require('../assets/transferir.jpg'),
        name: "Menu B",
        type: "jantar"
      },
      {
        id: 12,
        img: require('../assets/transferir.jpg'),
        name: "Menu C",
        type: "jantar"
      },
    ],
    eventType: [],
    reservations: [
      { id:0,user:"Rita", type: "", day: "06-04-2020", time: "19:45", people: "20", duration: "2", place: "Esmad", observation: "Gosto de musica pop.", extra: [],state:0 }
    ],
    extras:[{
      id:0,
      name: "fg"
    }
    ,
    {
      id:1,
      name: "fsssg"
    }]
  },


  mutations: {
    ADD_USER: (state, payload) => {
      //SE ENCONTRAR ALGUM EMAIL IGUAL AO QUE ESTA A TENTAR CRIAR
      if (!state.users.some(user => user.email === payload.email)) {
        if (payload.password !== payload.confPass) {
          alert("PASSWORDS DIFERENTES")
        } else {
          state.users.push({
            id: payload.id,
            name: payload.name,
            school: payload.school,
            typeUser: "user",
            email: payload.email,
            password: payload.password,
            contact: payload.contact,
            birth: payload.birth
          });
          localStorage.setItem("users", JSON.stringify(state.users))
          alert("REGISTADO")
          window.location = "./login"
        }
      } else {
        alert("EMAIL JA EXISTENTE")

      }
    },
    LOGIN: (state, payload) => {
      for (const user of state.users) {
        if (user.email == payload.email && user.password == payload.password) {
          state.loggedUser.push({
            id: user.id,
            name: user.name,
            school: user.school,
            typeUser: user.typeUser,
            email: user.email,
            password: user.password,
            contact: user.contact,
            birth: user.birth
          })
          localStorage.setItem("loggedUser", JSON.stringify(state.loggedUser))
          alert("USER LOGGADO")
          state.userExist = true
          window.location = "./"

        }
      }
      if (!state.userExist) {
        alert("Conta não existe")
      }
      else {
        state.userExist === false
      }

    },
    /* SET_LOGGED_USER: (state, payload) =>{
      $store.state.loggedUser() = payload.loggedUser
      localStorage.setItem("loggedUser", JSON.stringify(state.loggedUser))
    }, */
    LOGOUT: (state) => {
      // state.loggedUser.pop()
      localStorage.removeItem("loggedUser", JSON.stringify(state.loggedUser))
      window.location.reload()
      alert("Concluido")
    },
    REMOVE_USER: (state, payload) => {
      state.users = state.users.filter((user) => payload.id !== user.id)
      localStorage.setItem("users", JSON.stringify(state.users))

    },
    CHANGE_TYPE: (state, payload) => {
      for (const user of state.users) {
        if (user.id == payload.id) {
          state.users.push({
            id: user.id,
            name: user.name,
            school: user.school,
            typeUser: "admin",
            email: user.email,
            password: user.password,
            contact: user.contact,
            birth: user.birth
          })
        }

      }
    },
    ADD_WORKSHOP: (state, payload) => {
      if (!state.workshops.some(workshop => workshop.title === payload.title)) {
        state.workshops.push({
          id: payload.id,
          title: payload.title,
          date: payload.date,
          place: payload.place,
          teacher: payload.teacher,
          vacancies: payload.vacancies,
          description: payload.description
        });
        localStorage.setItem("workshops", JSON.stringify(state.workshops))
        alert("Workshop Criado")
      } else {
        alert("Workshop com nome igual a um workshop criado")

      }
    },
    RENT_ROOM: (state, payload) => {
      state.rooms.push({
        id: payload.id,
        type: payload.type,
        day: payload.day,
        time: payload.time,
        duration: payload.duration,
        user: state.loggedUser,
        state: 0,
      });
      localStorage.setItem("rooms", JSON.stringify(state.rooms))
      alert("state.rooms")
    },
    ADD_RESERVATION: (state, payload) => {
      state.reservations.push({
        id: payload.id,
        day: payload.day,
        time: payload.time,
        people: payload.people,
        duration: payload.duration,
        place: payload.place,
        observation: payload.observation,
        extra: payload.extra,
        user: state.user,
        state: 0,
        curMenu:payload.curMenu
      });
      localStorage.setItem("reservations", JSON.stringify(state.reservations))
      alert(state.reservations)
    },
  },
  getters: {
    getTypeUser(state) {
      return state.loggedUser[0].typeUser
    },
    getLastId(state) {
      return state.users.length ? state.users[state.users.length - 1].id : 0
    },
    getLastIdWorkshops(state) {
      return state.workshops.length ? state.workshops[state.workshops.length - 1].id : 0
    },
    getLastIdEvents(state) {
      return state.reservas.length ? state.reservas[state.reservas.length - 1].id : 0
    },
    getLastIdRooms(state) {
      return state.rooms.length ? state.rooms[state.rooms.length - 1].id : 0
    },
    getLoggedUserEmail(state) {
      return state.loggedUser[0].email
    },
    getLoggedUserPassword(state) {
      return state.loggedUser[0].password
    },
    getUser(state) {
      return state.loggedUser[0];
    },
  }
});
