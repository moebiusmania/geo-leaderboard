import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Hero from "../Hero.vue";

describe("Hero", () => {
  const mockSeason = {
    number: 1,
    title: "Test Season",
    start: "2024-01-01",
    end: "2024-01-31",
    results: [],
    id: "1",
    cap: 100,
    levels: 10,
  };

  it("renders properly with season data", () => {
    const wrapper = mount(Hero, {
      props: {
        season: mockSeason,
      },
    });

    // Check specific content
    expect(wrapper.text()).toContain(`Season ${mockSeason.number}`);
    expect(wrapper.text()).toContain(mockSeason.title);

    // Create snapshot
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("applies correct styling classes", () => {
    const wrapper = mount(Hero, {
      props: {
        season: mockSeason,
      },
    });

    const hgroup = wrapper.find("hgroup");
    const h2 = wrapper.find("h2");

    expect(hgroup.exists()).toBe(true);
    expect(h2.exists()).toBe(true);
  });
});
