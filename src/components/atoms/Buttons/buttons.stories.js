import React from "react";

import { PrimaryButton, SecondaryButton, TertiaryButton } from "./Buttons.js";

export default {
  component: PrimaryButton,
  title: "Components/Buttons",
};

export const Primary = () => <PrimaryButton>Button text</PrimaryButton>;
export const PrimaryWarning = () => (
  <PrimaryButton modifiers={["warning"]}>Button text</PrimaryButton>
);
export const PrimaryError = () => (
  <PrimaryButton modifiers={["error"]}>Button text</PrimaryButton>
);
export const PrimarySuccess = () => (
  <PrimaryButton modifiers={["success"]}>Button text</PrimaryButton>
);
export const PrimaryLarge = () => (
  <PrimaryButton modifiers={["large"]}>Button text</PrimaryButton>
);
export const PrimaryLargeWarning = () => (
  <PrimaryButton modifiers={["large", "warning"]}>Button text</PrimaryButton>
);
export const PrimaryLargeError = () => (
  <PrimaryButton modifiers={["large", "error"]}>Button text</PrimaryButton>
);
export const PrimaryLargeSuccess = () => (
  <PrimaryButton modifiers={["large", "success"]}>Button text</PrimaryButton>
);
export const PrimarySmall = () => (
  <PrimaryButton modifiers={["small"]}>Button text</PrimaryButton>
);
export const PrimarySmallWarning = () => (
  <PrimaryButton modifiers={["small", "warning"]}>Button text</PrimaryButton>
);
export const PrimarySmallError = () => (
  <PrimaryButton modifiers={["small", "error"]}>Button text</PrimaryButton>
);
export const PrimarySmallSuccess = () => (
  <PrimaryButton modifiers={["small", "success"]}>Button text</PrimaryButton>
);
export const Secondary = () => <SecondaryButton>Button text</SecondaryButton>;
export const SecondaryWarning = () => (
  <SecondaryButton modifiers={["warning"]}>Button text</SecondaryButton>
);
export const SecondaryError = () => (
  <SecondaryButton modifiers={["error"]}>Button text</SecondaryButton>
);
export const SecondarySuccess = () => (
  <SecondaryButton modifiers={["success"]}>Button text</SecondaryButton>
);
export const SecondaryLarge = () => (
  <SecondaryButton modifiers={["large"]}>Button text</SecondaryButton>
);
export const SecondaryLargeWarning = () => (
  <SecondaryButton modifiers={["large", "warning"]}>
    Button text
  </SecondaryButton>
);
export const SecondaryLargeError = () => (
  <SecondaryButton modifiers={["large", "error"]}>Button text</SecondaryButton>
);
export const SecondaryLargeSuccess = () => (
  <SecondaryButton modifiers={["large", "success"]}>
    Button text
  </SecondaryButton>
);
export const SecondarySmall = () => (
  <SecondaryButton modifiers={["small"]}>Button text</SecondaryButton>
);
export const SecondarySmallWarning = () => (
  <SecondaryButton modifiers={["small", "warning"]}>
    Button text
  </SecondaryButton>
);
export const SecondarySmallError = () => (
  <SecondaryButton modifiers={["small", "error"]}>Button text</SecondaryButton>
);
export const SecondarySmallSuccess = () => (
  <SecondaryButton modifiers={["small", "success"]}>
    Button text
  </SecondaryButton>
);
export const Tertiary = () => <TertiaryButton>Button text</TertiaryButton>;
export const TertiaryWarning = () => (
  <TertiaryButton modifiers={["warning"]}>Button text</TertiaryButton>
);
export const TertiaryError = () => (
  <TertiaryButton modifiers={["error"]}>Button text</TertiaryButton>
);
export const TertiarySuccess = () => (
  <TertiaryButton modifiers={["success"]}>Button text</TertiaryButton>
);
export const TertiaryLarge = () => (
  <TertiaryButton modifiers={["large"]}>Button text</TertiaryButton>
);
export const TertiaryLargeWarning = () => (
  <TertiaryButton modifiers={["warning", "large"]}>Button text</TertiaryButton>
);
export const TertiaryLargeError = () => (
  <TertiaryButton modifiers={["large", "error"]}>Button text</TertiaryButton>
);
export const TertiaryLargeSuccess = () => (
  <TertiaryButton modifiers={["large", "success"]}>Button text</TertiaryButton>
);
export const TertiarySmall = () => (
  <TertiaryButton modifiers={["small"]}>Button text</TertiaryButton>
);
export const TertiarySmallWarning = () => (
  <TertiaryButton modifiers={["small", "warning"]}>Button text</TertiaryButton>
);
export const TertiarySmallError = () => (
  <TertiaryButton modifiers={["small", "error"]}>Button text</TertiaryButton>
);
export const TertiarySmallSuccess = () => (
  <TertiaryButton modifiers={["small", "success"]}>Button text</TertiaryButton>
);
