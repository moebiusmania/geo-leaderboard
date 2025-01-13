import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Homeworks from "../Homeworks.vue";

describe("Homeworks", () => {
  const mockHomeworks = [
    {
      label: "Homework 1",
      url: "https://example.com/homework1",
    },
    {
      label: "Homework 2",
      url: "https://example.com/homework2",
    },
    {
      label: "Homework 3",
      url: "https://example.com/homework3",
    },
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
