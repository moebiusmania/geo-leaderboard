import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Header from "../Header.vue";

describe("Header", () => {
  it("renders properly", () => {
    const wrapper = mount(Header);

    // Create snapshot
    expect(wrapper.html()).toMatchSnapshot();
  });
});
