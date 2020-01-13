import Vue from "vue";
import Vuex from "vuex";
import router from "vue-router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      { id: 0, name: "Admin", school: "", typeUser: "admin", email: "admin@email.com", password: "123", birth: "", contact: "" }
    ],
    userExist: false,
    loggedUser: [],
    rooms: [
      { type: "./assets/imgInicial.jpg", day: "06-04-2020", time: "19:45", duration: "2" }
    ],
    workshops: [
      { id: 1, title: "A",vacancies:20, img: "https://picsum.photos/600/300/?image=25", description: "OLA PEPS BEM VINDO" },
      { id: 2, title: "B",vacancies:20, img: "https://picsum.photos/600/300/?image=25", description: "OLA PEPS BEM VINDO" },
      { id: 3, title: "C",vacancies:20, img: "https://picsum.photos/600/300/?image=25", description: "OLA PEPS BEM VINDO" }
    ],
    foodMenus: [  {
      id:"0",
      name: "coffeebreak A",
      type:"coffebreak",
      image: require("../assets/transferir.jpg"),
      ingredients: "no idea"
    },
    {
      id:"1",
      name: "coffeebreak B",
      type:"coffeebreaak",
      image: require("../assets/transferir.jpg"),
      ingredients: "no idea"
    },
    {
      id:"2",
      name: "coffeebreak B",
      type:"jantar",
      image: require("../assets/transferir.jpg"),
      ingredients: "no idea"
    },
    {
      id:"3",
      name: "coffeebreak B",
      type:"almoço",
      image: require("../assets/transferir.jpg"),
      ingredients: "no idea"
    },
    {
      id:"4",
      name: "coffeebreak B",
      type:"coffeebreak",
      image: require("../assets/transferir.jpg"),
      ingredients: "no idea"
    },
    {
      id:"5",
      name: "coffeebreak B",
      type:"coffeebreak",
      image: require("../assets/transferir.jpg"),
      ingredients: "no idea"
    },
     {
      id:"6",
      name: "Porto de Honra A",
      type:"coffeebreak",
      image: require("../assets/transferir.jpg"),
      ingredients: "no idea"
    },
    {
      id:"7",
      name: "Porto de Honra B",
      type:"coffeebreak",
      image: require("../assets/transferir.jpg"),
      ingredients: "no idea"
    },
    {
      id:"8",
      name: "Porto de Honra B",

      type:"coffeebreak",
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
      type:"portodehonra",
      image: require("../assets/transferir.jpg"),
      ingredients: "no idea"
    },
    {
      id:"11",
      name: "Porto de Honra B",
      type:"portodehonra",
      image: require("../assets/transferir.jpg"),
      ingredients: "no idea"
    }],
    eventType:[],
    reservations: [],
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
          router.push({ name: 'home' })
        }
      }
      if (!state.userExist) {
        alert("Conta não existe")
      }
      else {
        state.userExist === false
      }

    },
    LOGOUT: (state) => {
      // state.loggedUser.pop()
      localStorage.removeItem("loggedUser", JSON.stringify(state.loggedUser))
      alert("DONE")
      location.reload()
      
    },
    REMOVE_USER: (state, payload) => {
      state.users = state.users.filter((user) => payload.id !== user.id)
      localStorage.setItem("users", JSON.stringify(state.users))

    },
    CHANGE_TYPE: (state, payload) => {
      for (const user of state.users) {
        if (user.id == payload.id) {
          state.users.push({ typeUser: "admin"  })
          localStorage.setItem("users", JSON.stringify(state.users))
        }

      }
    },
    ADD_WORKSHOP: (state, payload) => {
      if (!state.workshops.some(workshop => workshop.title === payload.title)) {
        state.workshops.push({
          id: payload.id,
          title: payload.title,
          img:payload.img,
          date: payload.date,
          place: payload.place,
          teacher: payload.teacher,
          vacancies: payload.vacancies,
          description:payload.description
        });
         localStorage.setItem("workshops", JSON.stringify(state.workshops))
        alert("Workshop Criado")
      } else {
        alert("Workshop com nome igual a um workshop criado")

      }
    },
    RENT_ROOM: (state, payload) => {
      state.rooms.push({
        /* type: payload.type, */
        day: payload.day,
        time: payload.time,
        duration: payload.duration
      });
      localStorage.setItem("rooms", JSON.stringify(state.rooms))
      alert(state.rooms)
    },
    ADD_RESERVATION: (state, payload) => {
      state.reservations.push({
        day: payload.day,
        time: payload.time,
        people: payload.people,
        duration: payload.duration,
        place: payload.place,
        observation: payload.observation,
        extra: payload.extra
      });
      localStorage.setItem("reservations", JSON.stringify(state.reservations))
      alert(state.reservations)
    }

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
    getLoggedUser(state){
      return state.loggedUser[0].name
    }
  }
});
