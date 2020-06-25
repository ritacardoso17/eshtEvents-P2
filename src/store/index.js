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
    rooms: [
      //   {
      //   id: 0,
      //   name: "Restaurante Aplicação",
      //   img: require('../assets/restApp.jpg')
      // },
      // {
      //   id: 1,
      //   name: "Cozinha Aplicação",
      //   img: require('../assets/img_cozinha.jpg')
      // },
      // {
      //   id: 2,
      //   name: "Bar Aplicação",
      //   img: require('../assets/img_bar.jpg')
      // }
    ],
    workshops: [
      //   {
      //   id: 0,
      //   title: "Momentos entre amigas - VINHOS NO FEMININO",
      //   vacancies: 20,
      //   img: require('../assets/work1.jpg'),
      //   description: "A presença da Mulher na Enologia. Guia prático: Seleção de Vinhos. Dos Brancos aos Tintos: Prova de Estilos",
      //   date: "06/03/2020",
      //   place: "ESHT",
      //   teacher: "Américo Andrade",
      //   userEmail: []
      // },
      // {
      //   id: 1,
      //   title: "Páscoa Vínica",
      //   vacancies: 20,
      //   img: require('../assets/work2.jpg'),
      //   description: "Cocktails Vínicos. Serviço: Copos, Temperaturas. Prova de diferentes cocktails. Harmonização",
      //   date: "03/04/2020",
      //   place: "ESHT",
      //   teacher: "Américo Andrade",
      //   userEmail: []
      // },
      // {
      //   id: 2,
      //   title: "Vinhos e Conservas - As conservas estão na moda",
      //   vacancies: 20,
      //   img: require('../assets/work3.jpg'),
      //   description: "Tipologias de Conservas. Os Vinhos do Atlântico. Empratamento. Prova: Petiscos com Conservas e Vinhos",
      //   date: "08/05/2020",
      //   place: "Theatro",
      //   teacher: "Américo Andrade",
      //   userEmail: []
      // },
      // {
      //   id: 3,
      //   title: "Piquenique Vínico - Monverde Wine Experience",
      //   vacancies: 20,
      //   img: require('../assets/work4.jpg'),
      //   description: "Welcome drink. Passeio pela Vinha. Piquenique vínico",
      //   date: "06/06/2020",
      //   place: "Amarante",
      //   teacher: "Américo Andrade",
      //   userEmail: []
      // }
    ],
    foodMenus: [
      // {
      //     id: 1,
      //     img: require('../assets/transferir.jpg'),
      //     name: "Menu Base",
      //     type: "Coffee Break",
      //     components: ["Café Soluvel", "Leite", "Seleção de Chás", "Sumo de Laranja", "Água", "Triângulos Mistos"]
      //   },
      //   {
      //     id: 2,
      //     img: require('../assets/transferir.jpg'),
      //     name: "Menu Estudante",
      //     type: "Coffee Break",
      //     components: ["Café Soluvel", "Leite", "Seleção de Chás e Infusões", "Sumo de Laranja", "Água", "Pastelaria Seca e Variada", "Triângulos Mistos", "Fruta à peça"]
      //   },
      //   {
      //     id: 3,
      //     img: require('../assets/transferir.jpg'),
      //     name: "Menu Executivo",
      //     type: "Coffee Break",
      //     components: ["Café Soluvel", "Leite", "Seleção de Chás", "Sumo de Laranja", "Água Lisa", "Água Gaseificada", "Pastelaria Seca e Variada",
      //       "Triângulos Mistos", "Natinhas com Canela", "Queijadinhas", "Fruta à Peça"
      //     ]
      //   },
      //   {
      //     id: 4,
      //     img: require('../assets/transferir.jpg'),
      //     name: "Menu Supremo",
      //     type: "Coffee Break",
      //     components: ["Café Soluvel", "Leite", "Seleção de Chás", "Sumo de Laranja", "Sumo de Morango e Goiaba", "Água Lisa", "Água Gaseificada", "Pastelaria Seca e Variada",
      //       "Triângulos Mistos", "Compotas Variadas", "Queijo Fresco", "Natinhas com Canela", "Mini Croissants", "Iogurtes com Frescos e Secos", "Queijadinhas", "Fruta à Peça"
      //     ]
      //   },
      //   {
      //     id: 5,
      //     img: require('../assets/transferir.jpg'),
      //     name: "Menu Italiano",
      //     type: "Almoço",
      //     components: ["Salada de Tomate e Milho", "Creme de cenoura com Croutons aromatizados",
      //       "Fusilli com molho de ricotta e nozes", "Mousse de Frutos Vermelhos com Crocante de Chocolate"
      //     ]
      //   },
      //   {
      //     id: 6,
      //     img: require('../assets/transferir.jpg'),
      //     name: "Menu Mexicano",
      //     type: "Almoço",
      //     components: ["Salada de Tomate e Milho", "Creme de cenoura com Croutons aromatizados",
      //       "Fusilli com molho de ricotta e nozes", "Mousse de Frutos Vermelhos com Crocante de Chocolate"
      //     ]
      //   },
      //   {
      //     id: 7,
      //     img: require('../assets/transferir.jpg'),
      //     name: "Menu Português",
      //     type: "Almoço",
      //     components: ["Salada de Cenoura e Rucula", "Creme de Alheira com Crocante deCogumelos",
      //       "Carne de Porco à Alentejana", "Leite Creme à Portuguesa"
      //     ]
      //   },
      //   {
      //     id: 8,
      //     img: require('../assets/transferir.jpg'),
      //     name: "Menu Uva",
      //     type: "Porto de Honra",
      //     components: ["Porto Tawny Reserva", "Porto Tawny 10 anos", "Porto Vintage", "Snacks"]
      //   },
      //   {
      //     id: 9,
      //     img: require('../assets/transferir.jpg'),
      //     name: "Menu Videira",
      //     type: "Porto de Honra",
      //     components: ["Porto Colheita", "Porto Late Bottled Vintage", "Porto Ruby Reserva", "Snacks"]
      //   },
      //   {
      //     id: 10,
      //     img: require('../assets/transferir.jpg'),
      //     name: "Menu Solar",
      //     type: "Jantar",
      //     components: ["Salada de Tomate e Milho", "Creme de cenoura com Croutons aromatizados",
      //       "Fusilli com molho de ricotta e nozes", "Mousse de Frutos Vermelhos com Crocante de Chocolate"
      //     ]
      //   },
      //   {
      //     id: 11,
      //     img: require('../assets/transferir.jpg'),
      //     name: "Menu Estrelado",
      //     type: "Jantar",
      //     components: ["Salada de Cenoura e Rucula", "Creme de Alheira com Crocante deCogumelos",
      //       "Carne de Porco à Alentejana", "Leite Creme à Portuguesa"
      //     ]
      //   },
      //   {
      //     id: 12,
      //     img: require('../assets/transferir.jpg'),
      //     name: "Menu Noite",
      //     type: "Jantar",
      //     components: ["Salada de Tomate e Milho", "Creme de cenoura com Croutons aromatizados",
      //       "Fusilli com molho de ricotta e nozes", "Mousse de Frutos Vermelhos com Crocante de Chocolate"
      //     ]
      //   }
    ],
    eventType: [
      /* "Todos", "Coffee Break", "Almoço", "Jantar", "Porto de Honra" */
    ],
    reservations: [
      /* {
      id: 0,
      user: "João Alves",
      eventType: "Almoço",
      day: "06-04-2020",
      time: "19:45",
      people: "20",
      duration: "2",
      place: "esmad",
      extra: [],
      state: "Pendente"
    } */
    ],
    uniforms: [
      //   {
      //   id: 0,
      //   img: require('../assets/farda05.png'),
      //   name: "Farda Cozinha",
      // },
      // {
      //   id: 1,
      //   img: require('../assets/farda04.png'),
      //   name: "Farda Semi-formal",
      // },
      // {
      //   id: 2,
      //   img: require('../assets/farda03.png'),
      //   name: "Farda Formal",
      // },
      // {
      //   id: 3,
      //   img: require('../assets/farda02.png'),
      //   name: "Farda Casual",
      // },
    ],
    decorations: [
      //   {
      //   id: 0,
      //   img: require('../assets/deco1.jpg'),
      //   name: "Decoração A"
      // },
      // {
      //   id: 1,
      //   img: require('../assets/deco2.jpg'),
      //   name: "Decoração B"
      // },
      // {
      //   id: 2,
      //   img: require('../assets/deco3.jpg'),
      //   name: "Decoração C"
      // },
    ],
    types: [
      {
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
    extras: [
      //   {
      //   id: 0,
      //   name: "Musica Ambiente"
      // },
      // {
      //   id: 1,
      //   name: "Babysitting"
      // },
      // {
      //   id: 2,
      //   name: "Flores"
      // },
      // {
      //   id: 3,
      //   name: "Balões"
      // },
      // {
      //   id: 4,
      //   name: "Palhaços"
      // }
    ],
    componentMenus: [
      // {
      //   id: 1,
      //   name: "Leite"
      // },
      // {
      //   id: 2,
      //   name: "Cafe"
      // },
      // {
      //   id: 3,
      //   name: "Bolo de Laranja"
      // },
      // {
      //   id: 4,
      //   name: "Seleção de Chás e Infusões"
      // }, {
      //   id: 5,
      //   name: "Sumo de Laranja"
      // }, {
      //   id: 6,
      //   name: "Água"
      // },
      // {
      //   id: 7,
      //   name: "Pastelaria Seca e Variada"
      // },
      // {
      //   id: 8,
      //   name: "Triângulos Mistos"
      // },
      // {
      //   id: 9,
      //   name: "Fruta à peça"
      // }, {
      //   id: 10,
      //   name: "Água Gaseificada"
      // }, {
      //   id: 11,
      //   name: "Natinhas com Canela"
      // }, {
      //   id: 12,
      //   name: "Queijadinhas"
      // },
      // {
      //   id: 13,
      //   name: "Sumo de Morango e Goiaba"
      // },
      // {
      //   id: 14,
      //   name: "Iogurtes com Frescos e Secos"
      // }, {
      //   id: 15,
      //   name: "Mini Croissants"
      // }
    ],
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

    ADD_USER: (state, payload) => {
      if (payload.password !== payload.confPass) {
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
      // state.loggedUser.pop()
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
        VueSimpleAlert.fire("Workshop adicionado!").then(() => { });
      } else {
        VueSimpleAlert.fire("Workshop com nome igual a um workshop criado.");
      }
    },
    ADD_MENU: () => {

      VueSimpleAlert.fire("Menu adicionado!")

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
      // else{}
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
        // window.location = "./room"
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
      commit(
        "REMOVE_USER",
        await apiService.removeUser(payload.id)
      );
    },
    async removeRent({ commit }, payload) {
      commit("REMOVE_RENT", await apiService.removeRent(payload.id));
    },
    async removeMenu({ commit }, payload) {
      commit("REMOVE_MENU", await apiService.removeMenu(payload.id));
    },
    async getMenus({ commit }) {
      commit("SET_MENUS", await apiService.getMenus());
    },
    async getWorkshops({ commit }) {
      commit("SET_WORKSHOPS", await apiService.getWorkshops());
    },
    async getComponentsMenus({ commit },payload) {
      commit("SET_COMPONENTS_MENUS", await apiService.getComponentsMenus(payload.id));
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
    async getRents({ commit }, payload) {
      commit("SET_RENTS", await apiService.getUsersRents(payload.id));
    },
    async getEvents({ commit }, payload) {
      commit("SET_EVENTS", await apiService.getUsersEvents(payload.id));
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
        await apiService.editMenu(payload.id, payload.id_componente, payload.id_tipo_reserva, payload.description, payload.img)
      );
    },
    async editUser({ commit }, payload) {
      commit(
        "EDIT_USER",
        await apiService.editUser(payload.pass, payload.oldPass, payload.img)
      );
    },
    async editUserType({ commit }, payload) {
      commit(
        "CHANGE_TYPE",
        await apiService.editUserType(payload.id)
      );
    },
    async editUserTypeClient({ commit }, payload) {
      commit(
        "CHANGE_TYPE",
        await apiService.editUserTypeClient(payload.id)
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

          // payload.date_reserv,
          payload.date_required,
          payload.duration,
          payload.id_user,
          payload.reason
          // payload.opinion,
        )
      );
      alert(payload.date_required);
    },
    async addUserWorkshop({ commit }, payload) {
      commit(
        "ADD_USER_WORKSHOP",
        await apiService.addUserWorkshop(
          payload.id_workshop,
        )
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
