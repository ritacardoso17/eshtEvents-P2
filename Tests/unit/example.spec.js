/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

test("emit events when btnRent clicked", () => {
  const btnRent = wrapper.find("#btnRent");
  btnRent.trigger("click");
  expect(wrapper.emitted().pressed.length).toBe(1);
});
