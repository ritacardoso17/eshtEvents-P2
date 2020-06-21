/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import navbar from "@components/NavBar.vue";

describe("NavBar.vue", () => {
  it("renders", () => {
    const msg = "new message";
    const wrapper = shallowMount(navbar, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg)
  });

  // it("if logged in is false, do not show logout Button", () => {
  //   const wrapper = mount(Login, {
  //     data() {
  //       return { loggedUser: 0 };
  //     }
  //   });
  //   expect(wrapper.find("#logout").isVisible()).toBe(false);
  // });

  // it("if logged in, show logout Button", () => {
  //   const wrapper = mount(Login, {
  //     data() {
  //       return { loggedUser: 1 };
  //     }
  //   });
  //   expect(wrapper.find("#logout").isVisible()).toBe(true);
  // });
});
