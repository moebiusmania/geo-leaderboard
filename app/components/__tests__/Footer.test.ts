import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Footer from "../Footer.vue";

describe("Footer", () => {
  it("renders properly with current year", () => {
    const wrapper = mount(Footer);

    // Mock the current year for consistent snapshots
    const currentYear = new Date().getFullYear();
    expect(wrapper.text()).toContain(currentYear.toString());
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("contains GitHub link", () => {
    const wrapper = mount(Footer);
    const link = wrapper.find("a");

    expect(link.attributes("href")).toBe(
      "https://github.com/moebiusmania/geo-leaderboard"
    );
    expect(link.text()).toBe("GitHub");
  });
});
