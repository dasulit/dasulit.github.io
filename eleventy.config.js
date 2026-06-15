import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    widths: [800, 1200, 1600],
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
    },
  });
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("content/style.css");
  eleventyConfig.addPassthroughCopy("content/CNAME");

  return {
    dir: {
      input: "content",
      includes: "../_includes",
    },
  };
};
