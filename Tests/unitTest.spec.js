/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";
import app from "@/App.vue";
import rents from "@/views/room.vue";

describe("App.vue", () => {
  it("has data", () => {
    const msg = "hey";
    const wrapper = shallowMount(app, {
      propsData: { msg }
    });
    expect(wrapper.props()).toBe(true);
  });
});

test("emit events when btnRent clicked", () => {
  const btnRent = wrapper.find("#btnRent");
  btnRent.trigger("click");
  expect(wrapper.emitted().pressed.length).toBe(1);
});
