/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import navbar from "@components/NavBar.vue";
import events from "@views/EventsReserv.vue";
import rents from "@views/RentRoom.vue";
import editProfile from "@views/EditProfile.vue";
import profile from "@views/Profile.vue";
import login from "@views/Login.vue";
import register from "@views/Register.vue";
import cardWorkshops from "@components/cardWorkshops.vue";
import tbEvents from "@components/eventos.vue";
import tbRents from "@components/espacos.vue";

// Eventos da navbar
describe("NavBar.vue", () => {
  it("renders", () => {
    const msg = "new message";
    const wrapper = shallowMount(navbar, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it("if logged in is false, do not show logout Button", () => {
    const wrapper = mount(navbar, {
      data() {
        return { loggedUser: 0 };
      }
    });
    expect(wrapper.find("#logout").isVisible()).toBe(false);
  });

  it("if logged in, show logout Button", () => {
    const wrapper = mount(navbar, {
      data() {
        return { loggedUser: 1 };
      }
    });
    expect(wrapper.find("#logout").isVisible()).toBe(true);
  });
});

// Eventos das reservas
describe("EventsReserv.vue", () => {
  test("if text is not null, add reservation", () => {
    expect(events.day()).toBe(0);
  });
});

// Eventos dos alugueres
describe("RentRoom.vue", () => {
  test("if text is not null, add reservation", () => {
    expect(rents.day()).toBe();
  });
});

// Eventos de alterar conta
describe("EditProfile.vue", () => {
  test("if text is not null, add reservation", () => {
    expect(editProfile.password()).toMatch(loggedUser.password);
  });

  test("if text is not null, add reservation", () => {
    expect(editProfile.password()).toMatch(newPassword);
  });

  test("if text is not null, add reservation", () => {
    expect(editProfile.newPassword()).toMatch(confirmPassword);
  });
});

// Eventos de alterar foto
describe("Profile.vue", () => {
  // test("if text is not null, add reservation", () => {
  //   expect(profile.password()).toMatch(loggedUser.password);
  // });
});

// Eventos de Login
describe("Login.vue", () => {
  test("if text is not null, add reservation", () => {
    expect(login.email()).toMatch(users.emailIpp);
  });

  // test("if text is not null, add reservation", () => {
  //   expect(login.password()).toMatch(newPassword);
  // });
});

// Eventos de Registo
describe("Register.vue", () => {
  test("if text is not null, add reservation", () => {
    expect(register.email()).toMatch(school);
  });
});

// Eventos de Workshops
describe("cardWorkshops.vue", () => {
  test("if text is not null, add reservation", () => {
    expect(cardWorkshops.email()).toMatch(school);
  });
});

// Eventos da tabela de eventos
describe("eventos.vue", () => {
  test("if text is not null, add reservation", () => {
    expect(tbEvents.email()).toMatch(school);
  });
});

// Eventos da tabela de espacos
describe("espacos.vue", () => {
  test("if text is not null, add reservation", () => {
    expect(tbRents.email()).toMatch(school);
  });
});
