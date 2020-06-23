// import store from '../../src/store/index.js'
import { shallowMount } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import navbar from "@/components/NavBar.vue";
// import Menu from "@/components/menuMaker.vue";
import profile from "@/views/Profile.vue";
import eventos from "@/components/eventos.vue";
import espacos from "@/components/espacos.vue";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
let store = new Vuex.Store({
  state: {
    loggedUser: [],
    avatar: "",
    opinion: ""
  }
});

let mocked = new Vuex.Store({
  state: {
    loggedUser: {
      user: [
        {
          email: "9190335@esmad.ipp.pt",
          password: "123",
          id_tipoUser: 1,
          foto_perfil: "http://localhost:8080/img/cateringWelcome.4972b201.png",
          nome: "antonio",
          birthDate: "07-01-1999",
          phone: "915694177",
          school: "ESMAD",
          email_ipp: "9190335@esmad.ipp.pt",
          opinion: "Evento muito bom"
        }
      ]
    },
    avatar: "http://localhost:8080/img/cateringWelcome.4972b201.png"
  }
});

// Eventos da navbar
describe("NavBar.vue", () => {
  test("if logged in is false, do not show logout Button", () => {
    const wrapper = mount(navbar, {
      store: mocked
    });
    expect(wrapper.find("#logout").isVisible()).toBe(true);
  });

  test("if logged in, show logout Button", () => {
    const wrapper = mount(navbar, { store });
    expect(wrapper.find("#logout").exists()).toBe(false);
  });

  test("if logged in is false, do not show logout Button", () => {
    const wrapper = mount(navbar, {
      store: mocked
    });
    expect(wrapper.find("#loginBtn").exists()).toBe(false);
  });

  test("if logged in, show logout Button", () => {
    const wrapper = mount(navbar, { store });
    expect(wrapper.find("#loginBtn").isVisible()).toBe(true);
  });

  test("if logged in is false, do not show logout Button", () => {
    const wrapper = mount(navbar, {
      store: mocked
    });
    expect(wrapper.find("#photo").isVisible()).toBe(true);
  });

  test("if logged in, show logout Button", () => {
    const wrapper = mount(navbar, { store });
    expect(wrapper.find("#photo").exists()).toBe(false);
  });
});

// Filtros dos menus
// describe("menuMaker.vue", () => {
//   test("if logged in is false, do not show logout Button", () => {
//     const wrapper = Menu.computed.filterMenus();
//     const input = [
//       { id: 1, descritivo: "Menu A" },
//       { id: 2, descritivo: "Menu B" },
//       { id: 3, descritivo: "Menu C" }
//     ];
//     const output = [{ id: 3, descritivo: "Menu C" }];
//     expect(wrapper(input).toEqual(output));
//   });
// });

// Informação do utilizador
describe("Profile.vue", () => {
  test("if logged in is false, send to login", () => {
    const wrapper = shallowMount(profile, {store: mocked});
    expect(wrapper.find("#phone").text()).toEqual("Contacto: antonio");
  });

  test("if logged in is false, send to login", () => {
    const wrapper = shallowMount(profile, {store: mocked});
    expect(wrapper.find("#userName").text()).toEqual("antonio");
  });

  test("if logged in is false, send to login", () => {
    const wrapper = shallowMount(profile, {store: mocked});
    expect(wrapper.find("#birthDate").text()).toEqual("Data de Nascimento: antonio");
  });

  test("if logged in is false, send to login", () => {
    const wrapper = shallowMount(profile, {store: mocked});
    expect(wrapper.find("#ipp").text()).toEqual("Instituição: ESMAD");
  });

  test("if logged in is false, send to login", () => {
    const wrapper = shallowMount(profile, {store: mocked});
    expect(wrapper.find("#email").text()).toEqual("E-mail: 9190335@esmad.ipp.pt");
  });
});

// Verificar botão de opinião nos eventos
describe("eventos.vue", () => {
  test("if logged in is false, do not show logout Button", () => {
    const wrapper = mount(eventos, {
      store: mocked
    });
    expect(wrapper.find("#opinion").exists()).toBe(false);
  });

  test("if logged in is false, do not show logout Button", () => {
    const wrapper = mount(eventos, { store });
    expect(wrapper.find("#opinion").exists()).toBe(false);
  });
});

// Verificar botão de opinião nos alugueres
describe("espacos.vue", () => {
  test("if logged in is false, do not show logout Button", () => {
    const wrapper = mount(espacos, {
      store: mocked
    });
    expect(wrapper.find(".btnDetails").exists()).toBe(false);
  });

  test("if logged in is false, do not show logout Button", () => {
    const wrapper = mount(espacos, { store });
    expect(wrapper.find(".btnDetails").exists()).toBe(false);
  });
});
