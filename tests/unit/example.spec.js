import { shallowMount } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import navbar from "@/components/NavBar.vue";
import workshop from "@/components/cardWorkshop.vue";
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
  test("if logged in, do not show logout Button", () => {
    const wrapper = mount(navbar, {
      store: mocked
    });
    expect(wrapper.find("#logout").isVisible()).toBe(true);
  });

  test("if logged in is false, do not show logout Button", () => {
    const wrapper = mount(navbar, { store });
    expect(wrapper.find("#logout").exists()).toBe(false);
  });

  test("if logged in, do not show login Button", () => {
    const wrapper = mount(navbar, {
      store: mocked
    });
    expect(wrapper.find("#loginBtn").exists()).toBe(false);
  });

  test("if logged in is false, show login Button", () => {
    const wrapper = mount(navbar, { store });
    expect(wrapper.find("#loginBtn").isVisible()).toBe(true);
  });

  test("if logged in, show profile Button", () => {
    const wrapper = mount(navbar, {
      store: mocked
    });
    expect(wrapper.find("#photo").isVisible()).toBe(true);
  });

  test("if logged in is false, do not show profile Button", () => {
    const wrapper = mount(navbar, store);
    expect(wrapper.find("#photo").exists()).toBe(false);
  });
});

// Filtros dos workshops
describe("CardWorkshop.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = workshop.methods.orderDate(
      { data_hora: 100 },
      { data_hora: 5 }
    );
    expect(wrapper).toBe(1);
  });

  it("renders props.msg when passed", () => {
    const wrapper = workshop.methods.orderDate(
      { data_hora: 6 },
      { data_hora: 80 }
    );
    expect(wrapper).toBe(-1);
  });

  it("renders props.msg when passed", () => {
    const wrapper = workshop.methods.orderDate(
      { data_hora: 120 },
      { data_hora: 120 }
    );
    expect(wrapper).toBe(0);
  });

  it("renders props.msg when passed", () => {
    const wrapper = workshop.methods.orderName(
      { nome: "Sushi" },
      { nome: "Carne" }
    );
    expect(wrapper).toBe(1);
  });

  it("renders props.msg when passed", () => {
    const wrapper = workshop.methods.orderName(
      { nome: "carne" },
      { nome: "sushi" }
    );
    expect(wrapper).toBe(-1);
  });

  it("renders props.msg when passed", () => {
    const wrapper = workshop.methods.orderName(
      { nome: "carne" },
      { nome: "carne" }
    );
    expect(wrapper).toBe(0);
  });
});

// Informação do utilizador
describe("Profile.vue", () => {
  test("Check if phone number belongs to loggedUser", () => {
    const wrapper = shallowMount(profile, { store: mocked });
    expect(wrapper.find("#phone").text()).toEqual("Contacto: 915694177");
  });

  test("Check if userName belongs to loggedUser", () => {
    const wrapper = shallowMount(profile, { store: mocked });
    expect(wrapper.find("#userName").text()).toEqual("antonio");
  });

  test("Check if birthDate belongs to loggedUser", () => {
    const wrapper = shallowMount(profile, { store: mocked });
    expect(wrapper.find("#birthDate").text()).toEqual(
      "Data de Nascimento: antonio"
    );
  });

  test("Check if school belongs to loggedUser", () => {
    const wrapper = shallowMount(profile, { store: mocked });
    expect(wrapper.find("#ipp").text()).toEqual("Instituição: ESMAD");
  });

  test("Check if email belongs to loggedUser", () => {
    const wrapper = shallowMount(profile, { store: mocked });
    expect(wrapper.find("#email").text()).toEqual(
      "E-mail: 9190335@esmad.ipp.pt"
    );
  });
});

// Verificar botão de opinião nos eventos
describe("eventos.vue", () => {
  test("If opinion, do not show opinion button", () => {
    const wrapper = mount(eventos, {
      store: mocked
    });
    expect(wrapper.find("#opinion").exists()).toBe(false);
  });

  test("If opinion is false, show opinion button", () => {
    const wrapper = mount(eventos, { store });
    expect(wrapper.find("#opinion").exists()).toBe(true);
  });
});

// Verificar botão de opinião nos alugueres
describe("espacos.vue", () => {
  test("If opinion, do not show opinion button", () => {
    const wrapper = mount(espacos, {
      store: mocked
    });
    expect(wrapper.find(".btnDetails").exists()).toBe(false);
  });

  test("If opinion is false, show opinion button", () => {
    const wrapper = mount(espacos, { store });
    expect(wrapper.find(".btnDetails").exists()).toBe(true);
  });
});
