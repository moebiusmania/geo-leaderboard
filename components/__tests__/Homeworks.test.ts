import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Homeworks from "../Homeworks.vue";

describe("Homeworks", () => {
  const mockHomeworks = [
    "https://example.com/homework1",
    "https://example.com/homework2",
    "https://example.com/homework3",
  ];

  it("renders properly with homework list", () => {
    const wrapper = mount(Homeworks, {
      props: {
        data: mockHomeworks,
      },
    });

    // Create snapshot
    expect(wrapper.html()).toMatchSnapshot();
  });
});
