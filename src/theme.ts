import type { SandpackTheme } from "@codesandbox/sandpack-react";
import { sandpackDark } from "@codesandbox/sandpack-themes";

/**
 * Colors taken from https://www.nordtheme.com/docs/colors-and-palettes
 */
const nordColors = {
  nord0: "#2E3440",
  nord1: "#3B4252",
  nord2: "#434C5E",
  nord3: "#4C566A",
  /* create something between nord3 and nord4 because we need something for comments (nord3 is roughly readable, and nord4 is already in use for plain text) */
  nord3_bright: "#8d97ab",

  nord4: "#D8DEE9",
  nord5: "#E5E9F0",
  nord6: "#ECEFF4",

  nord7: "#8FBCBB",
  nord8: "#88C0D0",
  nord9: "#81A1C1",
  nord10: "#5E81AC",

  nord11: "#BF616A",
  nord12: "#D08770",
  nord13: "#EBCB8B",
  nord14: "#A3BE8C",
  nord15: "#B48EAD",
};

export const nord: SandpackTheme = {
  colors: {
    surface1: nordColors.nord0,
    surface2: nordColors.nord1,
    surface3: nordColors.nord2,
    clickable: nordColors.nord4,
    base: nordColors.nord15,
    disabled: nordColors.nord3,
    hover: nordColors.nord5,
    accent: nordColors.nord14,
    error: nordColors.nord11,
    errorSurface: nordColors.nord12,
  },
  syntax: {
    plain: {
      color: nordColors.nord4,
    },
    comment: {
      color: nordColors.nord3_bright,
      fontStyle: "italic",
    },
    keyword: {
      color: nordColors.nord10,
    },
    tag: {
      color: nordColors.nord7,
    },
    punctuation: {
      color: nordColors.nord9,
    },
    definition: {
      color: nordColors.nord8,
    },
    property: {
      color: nordColors.nord4,
    },
    static: {
      color: nordColors.nord10,
    },
    string: {
      color: nordColors.nord14,
    },
  },
  font: sandpackDark.font,
};
