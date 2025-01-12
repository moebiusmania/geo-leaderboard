import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Players from "../Players.vue";

describe("Players", () => {
  const mockSeason = {
    number: 1,
    title: "Test Season",
    levels: 5,
    cap: 1000,
    homeworks: [],
  };

  const mockPlayers = [
    {
      _type: "Entry",
      EntryId: "1",
      Name: "Test Player 1",
      Score: 750,
      Time: 1000,
      gender: "male",
    },
    {
      _type: "Entry",
      EntryId: "2",
      Name: "Test Player 2",
      Score: 250,
      Time: 1000,
      gender: "female",
    },
  ];

  it("renders properly with players data", () => {
    const wrapper = mount(Players, {
      props: {
        data: mockPlayers,
        season: mockSeason,
      },
    });

    // Check if all players are rendered
    const playerItems = wrapper.findAll("li");
    expect(playerItems).toHaveLength(2);

    // Check if player names are displayed
    expect(wrapper.text()).toContain("Test Player 1");
    expect(wrapper.text()).toContain("Test Player 2");

    // Check if scores are displayed
    expect(wrapper.text()).toContain("750");
    expect(wrapper.text()).toContain("250");

    // Create snapshot
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("calculates progress and levels correctly", () => {
    const wrapper = mount(Players, {
      props: {
        data: mockPlayers,
        season: mockSeason,
      },
    });

    // Test progress calculation (750/1000 * 100 = 75%)
    const firstPlayer = wrapper.findAll("li")[0];
    const progress = firstPlayer.findComponent({ name: "Progress" });
    expect(progress.props("progress")).toBe(75);

    // Test level calculation (75% in 5 levels should be level 4)
    const ribbon = firstPlayer.findComponent({ name: "Ribbon" });
    expect(ribbon.props("value")).toBe(4);
  });
});
