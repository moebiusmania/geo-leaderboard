import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Progress from "../Progress.vue";

describe("Progress", () => {
  const defaultProps = {
    levels: 5,
    current: 3,
    cap: 100,
    score: 75,
    progress: 75,
  };

  it("renders properly", () => {
    const wrapper = mount(Progress, {
      props: defaultProps,
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("renders correct number of circles", () => {
    const wrapper = mount(Progress, {
      props: defaultProps,
    });
    const circles = wrapper.findAll(".circle");
    expect(circles).toHaveLength(defaultProps.levels);
  });

  it("marks correct number of circles as active", () => {
    const wrapper = mount(Progress, {
      props: defaultProps,
    });
    const activeCircles = wrapper.findAll(".circle.active");
    expect(activeCircles).toHaveLength(defaultProps.current);
  });

  it("sets progress bar width correctly", () => {
    const wrapper = mount(Progress, {
      props: defaultProps,
    });
    const progressFill = wrapper.find(".progress-fill");
    expect(progressFill.attributes("style")).toBe("width: 75%;");
  });

  it("matches snapshot", () => {
    const wrapper = mount(Progress, {
      props: defaultProps,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("updates when props change", async () => {
    const wrapper = mount(Progress, {
      props: defaultProps,
    });

    await wrapper.setProps({
      current: 4,
      progress: 80,
    });

    const activeCircles = wrapper.findAll(".circle.active");
    expect(activeCircles).toHaveLength(4);

    const progressFill = wrapper.find(".progress-fill");
    expect(progressFill.attributes("style")).toBe("width: 80%;");
  });
});
