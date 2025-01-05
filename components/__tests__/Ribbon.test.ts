import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Ribbon from "../Ribbon.vue";

describe("Ribbon", () => {
  it("renders properly with level value", () => {
    const wrapper = mount(Ribbon, {
      props: {
        value: 3,
      },
    });

    // Check specific content
    expect(wrapper.text()).toContain("lvl");
    expect(wrapper.text()).toContain("3");

    // Create snapshot
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("applies correct styling classes", () => {
    const wrapper = mount(Ribbon, {
      props: {
        value: 1,
      },
    });

    const ribbon = wrapper.find(".ribbon");
    expect(ribbon.exists()).toBe(true);
    expect(ribbon.classes()).toContain("animate__animated");
    expect(ribbon.classes()).toContain("animate__jello");
  });
});
