import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      { id: 0, name: "Admin", school: "", typeUser: "admin", email: "admin@email.com", password: "123", birth: "", contact: "" }
    ],
    userExist: false,
    loggedUser: [],
    rooms:[],
    workshops:[],
    foodMenus:[],
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

          location.href = "/"
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
        }
      }
      if (!state.userExist) {
        alert("Conta não existe")
      }
      else {
        state.userExist === false
      }

    },
    LOGOUT:(state)=>{
      state.loggedUser.pop()
      localStorage.removeItem("loggedUser", JSON.stringify(this.state.loggedUser))
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
            typeUser:"admin",
            email: user.email,
            password: user.password,
            contact: user.contact,
            birth: user.birth
          })
        }

      }

    }
  },
  getters: {
    getTypeUser(state) {
      return state.loggedUser[0].typeUser
    },
    getLastId(state) {
      return state.users.length ? state.users[state.users.length - 1].id : 0

    }
  }
});
