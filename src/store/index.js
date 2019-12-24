import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      { id: "0", name: "Admin", school: "",  typeUser:"admin", email: "admin@email.com", password: "123" }
    ],
    userExist: false,
    loggedUser: []
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
            typeUser:"user",
            email: payload.email,
            password: payload.password,
          });
          location.href = "App.vue"
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
            email: user.email,
            password: user.password
          })
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

    }
  },

  getters: {
    getLastId(state) {
      if (state.users.length) {
        return state.users[state.users.length - 1].id
      } else {
        return 0
      }
    }
  }
});
