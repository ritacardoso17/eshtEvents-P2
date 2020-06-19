/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import navbar from "@/components/NavBar.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

test("if logged in is false, do not show logout Button", () => {
  const wrapper = mount(navbar);
  expect(wrapper.find("#logout").isVisible()).toBe(false);
});

test("if logged in, show logout Button", () => {
  const wrapper = mount(navbar);
  expect(wrapper.find("#logout").isVisible()).toBe(true);
});
