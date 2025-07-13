import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Rewards from "../Rewards.vue";

describe("Rewards", () => {
  const mockRewards = [
    { label: "Reward 1", img: "test1.jpg" },
    { label: "Reward 2", img: "test2.jpg" },
    { label: "Reward 3", img: "test3.jpg" },
    { label: "Reward 4", img: "test4.jpg" },
    { label: "Reward 5", img: "test5.jpg" },
  ];

  it("renders properly with rewards list", () => {
    const wrapper = mount(Rewards, {
      props: {
        data: mockRewards,
      },
    });

    // Check if all rewards are rendered
    const items = wrapper.findAll("li");
    expect(items.length).toBe(5);

    // Check if each reward has an image and text
    items.forEach((item, index) => {
      const img = item.find("img");
      const span = item.find("span");

      expect(img.exists()).toBe(true);
      expect(img.attributes("src")).toBe(mockRewards[index].img);
      expect(img.attributes("alt")).toBe(mockRewards[index].label);
      expect(span.exists()).toBe(true);
      expect(span.text()).toBe(`Lvl ${index + 1}: ${mockRewards[index].label}`);
    });

    // Create snapshot
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("applies correct animation delay styling", () => {
    const wrapper = mount(Rewards, {
      props: {
        data: mockRewards,
      },
    });
    const items = wrapper.findAll("li");

    items.forEach((item, index) => {
      expect(item.attributes("style")).toBe(
        `animation-delay: ${index * 0.1}s;`
      );
    });
  });
});
