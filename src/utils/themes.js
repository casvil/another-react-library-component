import { blue, green, neutral, red, yellow } from "./colors";
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
  status: {
    warningColor: yellow[100],
    warningHoverColor: yellow[200],
    warningActiveColor: yellow[300],
    errorColor: red[100],
    errorHoverColor: red[200],
    errorActiveColor: red[300],
    successColor: green[100],
    successHoverColor: green[200],
    successActiveColor: green[300],
  },
};
