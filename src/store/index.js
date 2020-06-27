import Vue from "vue";
import Vuex from "vuex";
/* import router from "vue-router";
 */
import VueSimpleAlert from "vue-simple-alert";
import apiService from "../eshtEventAPI/apiService";
Vue.use(VueSimpleAlert);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 0,
        name: "Admin",
        school: "",
        typeUser: "admin",
        email: "admin@email.com",
        password: "123",
        birth: "",
        contact: "",
        imgProfile: "../assets/star.png"
      }
    ],
    roomRents: [],
    userExist: false,
    loggedUser: [],
    token: [],
    rooms: [],
    workshops: [],
    foodMenus: [],
    eventType: [],
    reservations: [],
    uniforms: [],
    decorations: [],
    types: [],
    extras: [],
    componentMenus: [],
    components: [],
    schools: [],
    states: [],
    currentMenus: [],
    avatar: ""
  },

  mutations: {
    REMOVE_RESERVATION: (state, reservations) => {
      state.reservations = reservations;
      VueSimpleAlert.fire("Reserva Cancelada com Sucesso");
    },
    REMOVE_USER: (state, users) => {
      state.users = users;
      VueSimpleAlert.fire("Utilizador eliminado");
    },
    REMOVE_RENT: (state, roomRents) => {
      state.roomRents = roomRents;
      VueSimpleAlert.fire("Aluguer cancelado com sucesso");
    },
    REMOVE_MENU: (state, foodMenus) => {
      state.foodMenus = foodMenus;
      VueSimpleAlert.fire("Aluguer cancelado com sucesso");
    },
    REMOVE_WORKSHOP: (state, workshops) => {
      state.workshops = workshops;
      VueSimpleAlert.fire("Workshop Removido");
    },
    ADD_USER: (state, payload) => {
      if (payload.password != payload.confPass) {
        VueSimpleAlert.fire("Passwords diferentes");
      } else {
        VueSimpleAlert.fire("Conta criada");
        window.location = "./login";
      }
    },
    ADD_USER_WORKSHOP: () => {
      VueSimpleAlert.fire("Inscrito com sucesso no Workshop");
    },

    LOGIN: (state, data) => {
      state.loggedUser = data;
      state.avatar = state.loggedUser.user[0].foto_perfil;
      //state.token = data.token
      localStorage.setItem("loggedUser", JSON.stringify(state.loggedUser));
      localStorage.setItem("avatar", JSON.stringify(state.avatar));

      state.userExist = true;
      window.location = "./";
      if (!state.userExist) {
        alert("Conta não existe");
      } else {
        state.userExist === false;
      }
    },

    LOGOUT: state => {
      apiService.logout(state.loggedUser.token);
      state.loggedUser = [];
      state.token = [];
      localStorage.removeItem("loggedUser", JSON.stringify(state.loggedUser));
      localStorage.removeItem("avatar", JSON.stringify(state.avatar));
      location.href = "./";
      VueSimpleAlert.fire("Sessão Terminada com Sucesso");
    },
    CHANGE_TYPE: () => {
      VueSimpleAlert.fire("Tipo de utilizador mudado com sucesso");
    },
    CHANGE_STATE: () => {
      VueSimpleAlert.fire("Estado da reserva alterada");
    },

    ADD_WORKSHOP: (state, payload) => {
      if (!state.workshops.some(workshop => workshop.title === payload.title)) {
        alert("");
        state.workshops.push({
          id: payload.id,
          title: payload.title,
          img: payload.img,
          date: payload.date,
          place: payload.place,
          teacher: payload.teacher,
          vacancies: payload.vacancies,
          userEmail: [],
          description: payload.description
        });
        localStorage.setItem("workshops", JSON.stringify(state.workshops));
        VueSimpleAlert.fire("Workshop adicionado!").then(() => {});
      } else {
        VueSimpleAlert.fire("Workshop com nome igual a um workshop criado.");
      }
    },
    ADD_MENU: () => {
      VueSimpleAlert.fire("Menu adicionado!");
    },
    ADD_COMPONENT: (state, payload) => {
      if (
        !state.componentMenus.some(
          componentMenu => componentMenu.name === payload.name
        )
      ) {
        state.componentMenus.push({
          id: payload.id,
          name: payload.name,

          components: payload.components
        });
        localStorage.setItem(
          "componentMenus",
          JSON.stringify(state.componentMenus)
        );
        VueSimpleAlert.fire("Complemento Criado").then(() => {
          window.location = "./addMenuBackoffice";
        });
      }
    },
    ADD_RENT: (state, payload) => {
      if (
        payload.id_room == "" ||
        payload.date_required == "" ||
        payload.duration == "" ||
        payload.reason == ""
      ) {
        VueSimpleAlert.fire("Preencha todos os campos");
      } else {
        window.location = "./room";
        VueSimpleAlert.fire("Aluguer adicionado");
      }
    },
    ADD_RESERVATION: (state, payload) => {
      if (
        payload.n_people == "" ||
        payload.dateTime_event == "" ||
        payload.id_uniform == "" ||
        payload.id_evenType == "" ||
        payload.id_menu == "" ||
        payload.id_local == "" ||
        payload.id_decoration == ""
      ) {
        VueSimpleAlert.fire("Preencha todos os campos");
      } else {
        VueSimpleAlert.fire("Reserva adicionada");
        window.location = "./Events";
      }
    },
    SET_MENUS: (state, foodMenus) => {
      state.foodMenus = foodMenus;
    },
    SET_COMPONENTS_MENUS: (state, componentMenus) => {
      state.componentMenus = componentMenus;
    },
    SET_ALL_COMPONENTS: (state, components) => {
      state.components = components;
    },
    SET_EVENTYPES: (state, eventType) => {
      state.eventType = eventType;
    },
    SET_EVENTS: (state, reservations) => {
      state.reservations = reservations;
    },
    SET_RENTS: (state, roomRents) => {
      state.roomRents = roomRents;
    },
    EDIT_MENU: () => {
      VueSimpleAlert.fire("Dados atualizados");
    },
    EDIT_USER: () => {
      VueSimpleAlert.fire("Dados atualizados");
    },
    EDIT_WORKSHOP: () => {
      VueSimpleAlert.fire("Dados atualizados");
    },
    SET_SCHOOLS: (state, data) => {
      state.schools = data.message;
    },
    SET_USERS: (state, data) => {
      state.users = data.message;
    },
    SET_EXTRAS: (state, extras) => {
      state.extras = extras;
    },
    SET_ROOMS: (state, data) => {
      state.rooms = data.message;
    },
    SET_DECORATIONS: (state, decorations) => {
      state.decorations = decorations;
    },
    SET_UNIFORMS: (state, uniforms) => {
      state.uniforms = uniforms;
    },
    SET_WORKSHOPS: (state, workshops) => {
      state.workshops = workshops;
    },
    SET_STATES: (state, states) => {
      state.states = states;
    },
    SET_TYPEID: (state, data) => {
      state.currentMenus = data.message.rows;
    },
    SET_OPINIONRESERVS: () => {
      VueSimpleAlert.fire("Opinião Enviada!");
    },
    SET_OPINIONRENTS: () => {
      VueSimpleAlert.fire("Opinião Enviada!");
    }
  },
  getters: {
    getLastId(state) {
      return state.users.length ? state.users[state.users.length - 1].id : 0;
    },
    getLastIdWorkshops(state) {
      return state.workshops.length
        ? state.workshops[state.workshops.length - 1].id
        : 0;
    },
    getLastIdMenu(state) {
      return state.foodMenus.length
        ? state.foodMenus[state.foodMenus.length - 1].id
        : 0;
    },
    getLastIdEvents(state) {
      return state.reservations.length
        ? state.reservations[state.reservations.length - 1].id
        : 0;
    },
    getLastIdRooms(state) {
      return state.roomRents.length
        ? state.roomRents[state.roomRents.length - 1].id
        : 0;
    },
    getLastIdComponents(state) {
      return state.componentMenus.length
        ? state.componentMenus[state.componentMenus.length - 1].id
        : 0;
    },
    getTypeUser(state) {
      return state.loggedUser.user[0].id_tipoUser;
    },
    getUserName(state) {
      return state.loggedUser.user[0].nome;
    },
    getLoggedUserId(state) {
      return state.loggedUser.user[0].id_utilizador;
    },
    getMenus: state => state.foodMenus.message,
    getComponentsMenus: state => state.componentMenus.message,
    getAllComponents: state => state.components.message,
    getEvenTypes: state => state.eventType.message,
    getEvents: state => state.reservations.message,
    getRents: state => state.roomRents.message,
    getSchools: state => state.schools,
    getExtras: state => state.extras.message,
    getDecorations: state => state.decorations.message,
    getUniforms: state => state.uniforms.message,
    getWorkshops: state => state.workshops.message,
    getStates: state => state.states.message,
    getEventypesId: state => state.currentMenus,
    getRooms: state => state.rooms,
    getUsers: state => state.users
  },
  actions: {
    async removeReservation({ commit }, payload) {
      commit(
        "REMOVE_RESERVATION",
        await apiService.removeReservation(payload.id)
      );
    },
    async removeUser({ commit }, payload) {
      commit("REMOVE_USER", await apiService.removeUser(payload.id));
    },
    async removeRent({ commit }, payload) {
      commit("REMOVE_RENT", await apiService.removeRent(payload.id));
    },
    async removeMenu({ commit }, payload) {
      commit("REMOVE_MENU", await apiService.removeMenu(payload.id));
    },
    async removeWorkshop({ commit }, payload) {
      commit("REMOVE_WORKSHOP", await apiService.removeWorkshop(payload.id));
    },
    async getMenus({ commit }) {
      commit("SET_MENUS", await apiService.getMenus());
    },
    async getWorkshops({ commit }) {
      commit("SET_WORKSHOPS", await apiService.getWorkshops());
    },
    async getComponentsMenus({ commit }, payload) {
      commit(
        "SET_COMPONENTS_MENUS",
        await apiService.getComponentsMenus(payload.id)
      );
    },
    async getComponents({ commit }) {
      commit("SET_COMPONENTS_MENUS", await apiService.getComponents());
    },
    async getAllComponents({ commit }) {
      commit("SET_ALL_COMPONENTS", await apiService.getAllComponents());
    },
    async getRooms({ commit }) {
      commit("SET_ROOMS", await apiService.getRooms());
    },
    async getEvenTypes({ commit }) {
      commit("SET_EVENTYPES", await apiService.getEventypes());
    },
    async getUsersRents({ commit }, payload) {
      commit("SET_RENTS", await apiService.getUsersRents(payload.id));
    },

    async getUsersEvents({ commit }, payload) {
      commit("SET_EVENTS", await apiService.getUsersEvents(payload.id));
    },
    async getEvents({ commit }) {
      commit("SET_EVENTS", await apiService.getReservations());
    },
    async getRents({ commit }) {
      commit("SET_RENTS", await apiService.getRoomRents());
    },
    async getOpinionReservs({ commit }, payload) {
      commit(
        "SET_OPINIONRESERVS",
        await apiService.getOpinionReservs(payload.id, payload.opinion)
      );
    },
    async editMenu({ commit }, payload) {
      commit(
        "EDIT_MENU",
        await apiService.editMenu(
          payload.id,
          payload.id_componente,
          payload.id_tipo_reserva,
          payload.description,
          payload.img
        )
      );
    },
    async editUser({ commit }, payload) {
      commit(
        "EDIT_USER",
        await apiService.editUser(payload.pass, payload.oldPass, payload.img)
      );
    },
    async editWorkshop({ commit }, payload) {
      commit(
        "EDIT_WORKSHOP",
        await apiService.editWorkshop(
          payload.id,
          payload.title,
          payload.vacancies,
          payload.date,
          payload.teacher,
          payload.place,
          payload.img,
          payload.description
        )
      );
    },
    async editUserType({ commit }, payload) {
      commit("CHANGE_TYPE", await apiService.editUserType(payload.id));
    },
    async editUserTypeClient({ commit }, payload) {
      commit("CHANGE_TYPE", await apiService.editUserTypeClient(payload.id));
    },
    async updateStatus({ commit }, payload) {
      commit(
        "CHANGE_STATE",
        await apiService.updateStatus(payload.id, payload.tipoEstado)
      );
    },
    async updateStatusCancel({ commit }, payload) {
      commit(
        "CHANGE_STATE",
        await apiService.updateStatusCancel(payload.id, payload.tipoEstado)
      );
    },
    async updateStatusRents({ commit }, payload) {
      commit(
        "CHANGE_STATE",
        await apiService.updateStatusRents(payload.id, payload.tipoEstado)
      );
    },
    async updateStatusCancelRents({ commit }, payload) {
      commit(
        "CHANGE_STATE",
        await apiService.updateStatusCancelRents(payload.id, payload.tipoEstado)
      );
    },
    async getOpinionRents({ commit }, payload) {
      commit(
        "SET_OPINIONRENTS",
        await apiService.getOpinionRents(payload.id, payload.opinion)
      );
    },
    async addMenus({ commit }, payload) {
      commit(
        "ADD_MENU",
        await apiService.addMenus(
          payload.name,
          payload.img,
          payload.type,
          payload.components
        )
      );
    },
    async addUser({ commit }, payload) {
      commit(
        "ADD_USER",
        await apiService.addUser(
          payload.name,
          payload.school,
          payload.email,
          payload.password,
          payload.contact,
          payload.birth,
          payload.imgProfile
        )
      );
    },
    async addReservations({ commit }, payload) {
      commit(
        "ADD_RESERVATION",
        await apiService.addReservations(
          payload.id_extra,
          payload.n_people,
          payload.dateTime_reserv,
          payload.dateTime_event,
          payload.id_uniform,
          payload.id_evenType,
          payload.id_menu,
          payload.id_local,
          payload.id_decoration,
          payload.obs
        )
      );
    },
    async addRents({ commit }, payload) {
      commit(
        "ADD_RENT",
        await apiService.addRents(
          payload.id_room,
          payload.date_reserv,
          payload.date_required,
          payload.duration,
          payload.id_user,
          payload.reason
        )
      );
      alert(payload.date_required);
    },
    async addUserWorkshop({ commit }, payload) {
      commit(
        "ADD_USER_WORKSHOP",
        await apiService.addUserWorkshop(payload.id_workshop)
      );
    },
    async getSchools({ commit }) {
      commit("SET_SCHOOLS", await apiService.getSchools());
    },
    async getUsers({ commit }) {
      commit("SET_USERS", await apiService.getUsers());
    },
    async getExtras({ commit }) {
      commit("SET_EXTRAS", await apiService.getExtras());
    },
    async getDecorations({ commit }) {
      commit("SET_DECORATIONS", await apiService.getDecorations());
    },
    async getUniforms({ commit }) {
      commit("SET_UNIFORMS", await apiService.getUniforms());
    },
    async getStates({ commit }) {
      commit("SET_STATES", await apiService.getStates());
    },
    async getEventypesId({ commit }, payload) {
      commit("SET_TYPEID", await apiService.getEventypesId(payload.id));
    },
    async login({ commit }, payload) {
      commit("LOGIN", await apiService.login(payload.email, payload.password));
    }
  }
});
