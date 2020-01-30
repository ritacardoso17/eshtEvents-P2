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
      imgProfile: "../assets/star.png"
    }],
    roomRents: [],
    userExist: false,
    loggedUser: [],
    rooms: [{
      id: 0,
      name: "Restaurante Aplicação",
      img: require('../assets/restApp.jpg')
    },
    {
      id: 1,
      name: "Cozinha Aplicação",
      img: require('../assets/img_cozinha.jpg')
    },
    {
      id: 2,
      name: "Bar Aplicação",
      img: require('../assets/img_bar.jpg')
    }
    ],
    workshops: [{
      id: 0,
      title: "ZENAS",
      vacancies: 20,
      img: require('../assets/CatePessoas.jpg'),
      description: "O Restaurante de Aplicação da Escola Superior de Hotelaria e Turismo é da responsabilidade do Politécnico do Porto, com capacidade para 50 pessoas sentadas. Durante estes últimos anos, o Restaurante tem acolhido diversos eventos, conseguindo sempre estar à altura das expectativas dos clientes.",
      date: "06/10/2020",
      place: "B204",
      teacher: "Américo Andrade"
    },
    {
      id: 1,
      title: "Workshop A",
      vacancies: 20,
      img: require('../assets/CatePessoas.jpg'),
      description: "O Restaurante de Aplicação da Escola Superior de Hotelaria e Turismo é da responsabilidade do Politécnico do Porto, com capacidade para 50 pessoas sentadas. Durante estes últimos anos, o Restaurante tem acolhido diversos eventos, conseguindo sempre estar à altura das expectativas dos clientes.",
      date: "06/04/2020",
      place: "B204",
      teacher: "Américo Andrade"
    },
    {
      id: 2,
      title: "Workshop B",
      vacancies: 20,
      img: require('../assets/CatePessoas.jpg'),
      description: "O Restaurante de Aplicação da Escola Superior de Hotelaria e Turismo é da responsabilidade do Politécnico do Porto, com capacidade para 50 pessoas sentadas. Durante estes últimos anos, o Restaurante tem acolhido diversos eventos, conseguindo sempre estar à altura das expectativas dos clientes.",
      date: "06/04/2020",
      place: "B204",
      teacher: "Américo Andrade"
    },
    {
      id: 3,
      title: "Workshop C",
      vacancies: 20,
      img: require('../assets/CatePessoas.jpg'),
      description: "O Restaurante de Aplicação da Escola Superior de Hotelaria e Turismo é da responsabilidade do Politécnico do Porto, com capacidade para 50 pessoas sentadas. Durante estes últimos anos, o Restaurante tem acolhido diversos eventos, conseguindo sempre estar à altura das expectativas dos clientes.",
      date: "06/03/2020",
      place: "B204",
      teacher: "Américo Andrade"
    }
    ],
    foodMenus: [{
      id: 1,
      img: require('../assets/transferir.jpg'),
      name: "Menu Base",
      type: "Coffee Break",
      components: ["Café Soluvel", "Leite", "Seleção de Chás", "Sumo de Laranja", "Água", "Triângulos Mistos"]
    },
    {
      id: 2,
      img: require('../assets/transferir.jpg'),
      name: "Menu Estudante",
      type: "Coffee Break",
      components: ["Café Soluvel", "Leite", "Seleção de Chás e Infusões", "Sumo de Laranja", "Água", "Pastelaria Seca e Variada", "Triângulos Mistos", "Fruta à peça"]

    },
    {
      id: 3,
      img: require('../assets/transferir.jpg'),
      name: "Menu Executivo",
      type: "Coffee Break",
      components: ["Café Soluvel", "Leite", "Seleção de Chás", "Sumo de Laranja", "Água Lisa", "Água Gaseificada", "Pastelaria Seca e Variada",
        "Triângulos Mistos", "Natinhas com Canela", "Queijadinhas", "Fruta à Peça"]

    },
    {
      id: 4,
      img: require('../assets/transferir.jpg'),
      name: "Menu Supremo",
      type: "Coffee Break",
      components: ["Café Soluvel", "Leite", "Seleção de Chás", "Sumo de Laranja", "Sumo de Morango e Goiaba", "Água Lisa", "Água Gaseificada", "Pastelaria Seca e Variada",
        "Triângulos Mistos", "Compotas Variadas", "Queijo Fresco", "Natinhas com Canela", "Mini Croissants", "Iogurtes com Frescos e Secos", "Queijadinhas", "Fruta à Peça"]
    },
    {
      id: 5,
      img: require('../assets/transferir.jpg'),
      name: "Menu Italiano",
      type: "Almoço",
      components: ["Salada de Tomate e Milho", "Creme de cenoura com Croutons aromatizados",
        "Fusilli com molho de ricotta e nozes", "Mousse de Frutos Vermelhos com Crocante de Chocolate"]
    },
    {
      id: 6,
      img: require('../assets/transferir.jpg'),
      name: "Menu Mexicano",
      type: "Almoço",
      components: ["Salada de Tomate e Milho", "Creme de cenoura com Croutons aromatizados",
        "Fusilli com molho de ricotta e nozes", "Mousse de Frutos Vermelhos com Crocante de Chocolate"]
    },
    {
      id: 7,
      img: require('../assets/transferir.jpg'),
      name: "Menu Português",
      type: "Almoço",
      components: ["Salada de Cenoura e Rucula", "Creme de Alheira com Crocante deCogumelos",
        "Carne de Porco à Alentejana", "Leite Creme à Portuguesa"]
    },
    {
      id: 8,
      img: require('../assets/transferir.jpg'),
      name: "Menu Uva",
      type: "Porto de Honra",
      components: ["Porto Tawny Reserva", "Porto Tawny 10 anos", "Porto Vintage", "Snacks"]
    },
    {
      id: 9,
      img: require('../assets/transferir.jpg'),
      name: "Menu Videira",
      type: "Porto de Honra",
      components: ["Porto Colheita", "Porto Late Bottled Vintage", "Porto Ruby Reserva", "Snacks"]
    },
    {
      id: 10,
      img: require('../assets/transferir.jpg'),
      name: "Menu Solar",
      type: "Jantar",
      components: ["Salada de Tomate e Milho", "Creme de cenoura com Croutons aromatizados",
        "Fusilli com molho de ricotta e nozes", "Mousse de Frutos Vermelhos com Crocante de Chocolate"]
    },
    {
      id: 11,
      img: require('../assets/transferir.jpg'),
      name: "Menu Estrelado",
      type: "Jantar",
      components: ["Salada de Cenoura e Rucula", "Creme de Alheira com Crocante deCogumelos",
        "Carne de Porco à Alentejana", "Leite Creme à Portuguesa"]
    },
    {
      id: 12,
      img: require('../assets/transferir.jpg'),
      name: "Menu Noite",
      type: "Jantar",
      components: ["Salada de Tomate e Milho", "Creme de cenoura com Croutons aromatizados",
        "Fusilli com molho de ricotta e nozes", "Mousse de Frutos Vermelhos com Crocante de Chocolate"]
    },
    ],
    eventType: ["Todos", "Coffee Break", "Almoço", "Jantar", "Porto de Honra"],
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
      img: require('../assets/farda05.png'),
      name: "Farda1",
    },
    {
      id: 1,
      img: require('../assets/deco1.jpg'),
      name: "Farda2",
    },
    {
      id: 2,
      img: require('../assets/deco1.jpg'),
      name: "Farda3",
    },
    {
      id: 3,
      img: require('../assets/deco1.jpg'),
      name: "Farda4",
    },
    ],
    decorations: [{
      id: 0,
      img:  require('../assets/deco1.jpg'),
      name: "decoration1"
    },
    {
      id: 1,
      img: require('../assets/deco1.jpg'),
      name: "decoration2"
    },
    {
      id: 2,
      img: require('../assets/deco1.jpg'),
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
      name: "Babysitting"
    },
    {
      id: 2,
      name: "Flores"
    },
    {
      id: 3,
      name: "Balões"
    },
    {
      id: 4,
      name: "Palhaços"
    }
    ],
    componentMenus: [{
      id: 1,
      name: "Leite"
    },
    {
      id: 2,
      name: "Cafe"
    },
    {
      id: 3,
      name: "Bolo de Laranja"
    },
    {
      id: 4,
      name: "Seleção de Chás e Infusões"
    }, {
      id: 5,
      name: "Sumo de Laranja"
    }, {
      id: 6, name: "Água"
    },
    { id: 7, name: "Pastelaria Seca e Variada" },
    { id: 8, name: "Triângulos Mistos" },
    {
      id: 9, name: "Fruta à peça"
    }, {
      id: 10, name: "Água Gaseificada"
    }, {
      id: 11, name: "Natinhas com Canela"
    }, { id: 12, name: "Queijadinhas" },
     { id: 13, name: "Sumo de Morango e Goiaba" }, 
     { id: 14, name: "Iogurtes com Frescos e Secos" },{
       id:15,name:"Mini Croissants"
     }
    ],
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
            imgProfile: payload.imgProfile,
            alerts:[]
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
      location.href = "./"
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
          img:payload.img,
          date: payload.date,
          place: payload.place,
          teacher: payload.teacher,
          vacancies: payload.vacancies,
          userEmail: payload.userEmail,
          description: payload.description
        });
        localStorage.setItem("workshops", JSON.stringify(state.workshops))
        alert("Workshop Criado")
      } else {
        alert("Workshop com nome igual a um workshop criado")

      }
    },
    ADD_MENU: (state, payload) => {
      if (!state.foodMenus.some(foodMenu => foodMenu.name === payload.name)) {
        state.foodMenus.push({
          id: payload.id,
          name: payload.name,
          img: payload.img,
          type: payload.type,
          components: payload.components
        });
        localStorage.setItem("foodMenus", JSON.stringify(state.foodMenus))
      } else {
        alert("Ja existe um menu com esse nome")
      }
    },
    ADD_COMPONENT: (state, payload) => {
      if (!state.componentMenus.some(componentMenu => componentMenu.name === payload.name)) {
        state.componentMenus.push({
          id: payload.id,
          name: payload.name,

          components: payload.components
        });
        localStorage.setItem("componentMenus", JSON.stringify(state.componentMenus))
        alert("Menu Criado")
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
        reason: payload.reason,
        opinions: ""
      });
      localStorage.setItem("roomRents", JSON.stringify(state.roomRents))
    },
    ADD_RESERVATION: (state, payload) => {
      state.reservations.push({
        id: payload.id,
        day: payload.day,
        time: payload.time,
        people: payload.people,
        duration: payload.duration,
        location: payload.location,
        obs: payload.obs,
        decor: payload.decor,
        extra: payload.extra,
        userName: payload.userName,
        userMail: payload.userMail,
        state: payload.state,
        eventType: payload.eventType,
        menu: payload.menu,
        uniform: payload.uniform,
        opinions: ""
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
    getLastIdMenu(state) {
      return state.foodMenus.length ? state.foodMenus[state.foodMenus.length - 1].id : 0
    },
    getLastIdEvents(state) {
      return state.reservations.length ? state.reservations[state.reservations.length - 1].id : 0
    },
    getLastIdRooms(state) {
      return state.roomRents.length ? state.roomRents[state.roomRents.length - 1].id : 0
    },
    getLastIdComponents(state) {
      return state.componentMenus.length ? state.componentMenus[state.componentMenus.length - 1].id : 0
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