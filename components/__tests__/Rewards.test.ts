import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Rewards from "../Rewards.vue";

describe("Rewards", () => {
  it("renders properly with rewards list", () => {
    const wrapper = mount(Rewards);

    // Check if all rewards are rendered
    const items = wrapper.findAll("li");
    expect(items.length).toBe(5); // There are 5 rewards defined in the component

    // Check if each reward has an image and text
    items.forEach((item, index) => {
      const img = item.find("img");
      const span = item.find("span");

      expect(img.exists()).toBe(true);
      expect(span.exists()).toBe(true);
      expect(span.text()).toContain(`Lvl ${index + 1}`);
    });

    // Create snapshot
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("applies correct animation delay styling", () => {
    const wrapper = mount(Rewards);
    const items = wrapper.findAll("li");

    items.forEach((item, index) => {
      expect(item.attributes("style")).toBe(
        `animation-delay: ${index * 0.1}s;`
      );
    });
  });
});
