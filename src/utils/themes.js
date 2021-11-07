import { blue, neutral } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  disabled: neutral[400],
  primaryColor: blue[300],
  primaryActiveColor: blue[100],
  primaryHoverColor: blue[200],
  primaryFont,
  textColor: neutral[600],
  textColorInverted: neutral[100],
  textColorOnPrimary: neutral[100],
  textOnDisabled: neutral[300],
};
