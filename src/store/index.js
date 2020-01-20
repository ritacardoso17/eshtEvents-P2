import Vue from "vue";
import Vuex from "vuex";
/* import router from "vue-router";
 */
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [{
      id: 0,
      name: "Admin",
      school: "",
      typeUser: "admin",
      email: "admin@email.com",
      password: "123",
      birth: "",
      contact: "",
    }],
    roomRents:[],
    userExist: false,
    loggedUser: [],
    rooms: [{
        id: 0,
        name: "cozinha",
        img: require('../assets/imgInicial.jpg')
      },
      {
        id: 1,
        name: "bar",
        img: require('../assets/imgInicial.jpg')
      },
      {
        id: 2,
        name: "Novo restaurante",
        img: require('../assets/imgInicial.jpg')
      },
      {
        id: 3,
        name: "Restaurante de App",
        img: require('../assets/imgInicial.jpg')
      },
    ],
    workshops: [{
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
    foodMenus: [{
        id: 1,
        img: require('../assets/transferir.jpg'),
        name: "Menu L",
        type: "Coffee Break"
      },
      {
        id: 2,
        img: require('../assets/transferir.jpg'),
        name: "Menu K",
        type: "coffeebreak"
      },
      {
        id: 3,
        img: require('../assets/transferir.jpg'),
        name: "Menu J",
        type: "Coffee Break"
      },
      {
        id: 4,
        img: require('../assets/transferir.jpg'),
        name: "Menu I",
        type: "Coffee Break"
      },
      {
        id: 5,
        img: require('../assets/transferir.jpg'),
        name: "Menu H",
        type: "Coffee Break"
      },
      {
        id: 6,
        img: require('../assets/transferir.jpg'),
        name: "Menu G",
        type: "Coffee Break"
      },
      {
        id: 7,
        img: require('../assets/transferir.jpg'),
        name: "Menu F",
        type: "Coffee Break"
      },
      {
        id: 8,
        img: require('../assets/transferir.jpg'),
        name: "Menu E",
        type: "Coffee Break"
      },
      {
        id: 9,
        img: require('../assets/transferir.jpg'),
        name: "Menu D",
        type: "Coffee Break"
      },
      {
        id: 10,
        img: require('../assets/transferir.jpg'),
        name: "Menu A",
        type: "Coffee Break"
      },
      {
        id: 11,
        img: require('../assets/transferir.jpg'),
        name: "Menu B",
        type: "Jantar"
      },
      {
        id: 12,
        img: require('../assets/transferir.jpg'),
        name: "Menu C",
        type: "Jantar"
      },
    ],
    eventType: ["Coffee Break", "Almoço", "Jantar", "Porto de Honra"],
    reservations: [{
      id: 0,
      user: "Rita",
      type: "",
      day: "06-04-2020",
      time: "19:45",
      people: "20",
      duration: "2",
      place: "Esmad",
      extra: [],
      state: 0
    }],
    uniforms: [{
        id: 0,
        img: '../assets/transferir.jpg',
        name: "Farda1",
      },
      {
        id: 1,
        img: '../assets/transferir.jpg',
        name: "Farda2",
      },
      {
        id: 2,
        img: '../assets/transferir.jpg',
        name: "Farda3",
      },
      {
        id: 3,
        img: '../assets/transferir.jpg',
        name: "Farda4",
      },
    ],
    decorations: [{
        id: 0,
        img: '../assets/85e4697e7b00c5269eb7fd36f29c0e8b.jpg',
        name: "decoration1"
      },
      {
        id: 1,
        img: '../assets/85e4697e7b00c5269eb7fd36f29c0e8b.jpg',
        name: "decoration2"
      },
      {
        id: 2,
        img: '../assets/85e4697e7b00c5269eb7fd36f29c0e8b.jpg',
        name: "decoration3"
      },
    ],
    types: [{
        id: 0,
        img: "../assets/cozinha.jpg",
        name: "Bar"
      },
      {
        id: 1,
        img: "../assets/cozinha.jpg",
        name: "Restaurante"
      },
      {
        id: 2,
        img: "../assets/cozinha.jpg",
        name: "Cozinha"
      },
      {
        id: 3,
        img: "../assets/cozinha.jpg",
        name: "Novo Restaurante"
      }
    ],
    extras: [{
        id: 0,
        name: "Musica Ambiente"
      },
      {
        id: 1,
        name: "Babyssiting"
      },
      {
        id: 2,
        name: "flores"
      }
    ]
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
            birth: payload.birth,
            imgProfile: payload.imgProfile
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
            birth: user.birth,
            imgProfile: user.imgProfile
          })
          localStorage.setItem("loggedUser", JSON.stringify(state.loggedUser))
          alert("USER LOGGADO")
          state.userExist = true
          window.location = "./"

        }
      }
      if (!state.userExist) {
        alert("Conta não existe")
      } else {
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
      state.roomRents.push({
        id: payload.id,
          room: payload.room,
          day: payload.day,
          time: payload.time,
          duration: payload.duration,
          userName: payload.userName,
          userMail: payload.userMail,
        state: "Pendente",
      });
      localStorage.setItem("roomRents", JSON.stringify(state.roomRents))
    },
    ADD_RESERVATION: (state, payload) => {
      state.reservations.push({
        id: payload.id,
        day: payload.day,
        time: payload.time,
        people: payload.persons,
        duration: payload.duration,
        place: payload.location,
        obs: payload.obs,
        decor: payload.decor,
        extra: payload.extra,
        userName: payload.userName,
        userMail: payload.userMail,
        state: payload.state,
        eventType: payload.eventType,
        menu: payload.menu,
        uniform: payload.uniform
      });
      localStorage.setItem("reservations", JSON.stringify(state.reservations))

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
      return state.reservations.length ? state.reservations[state.reservations.length - 1].id : 0
    },
    getLastIdRooms(state) {
      return state.roomRents.length ? state.roomRents[state.roomRents.length - 1].id : 0
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