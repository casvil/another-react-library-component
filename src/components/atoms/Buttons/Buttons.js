import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

import { defaultTheme, typeScale } from "../../../utils";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;
  `,
  warning: () => `
    background-color: ${defaultTheme.status.warningColor};
    border: 2px solid ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted};
    
    &:focus {
      outline: 3px solid ${defaultTheme.status.warningHoverColor};
      outline-offset: 2px;
    } 
    
    &focus, &:hover {
      background-color: ${defaultTheme.status.warningHoverColor};
    }
    
    &:active {
      border: 2px solid ${defaultTheme.status.warningColor};
      background-color: ${defaultTheme.status.warningActiveColor};
    }
  `,
  error: () => `
    background-color: ${defaultTheme.status.errorActiveColor};
    border: 2px solid ${defaultTheme.status.errorActiveColor};
    color: ${defaultTheme.textColorInverted};
    
    &:focus {
      outline: 3px solid ${defaultTheme.status.errorHoverColor};
      outline-offset: 2px;
    } 
    
    &focus, &:hover {
      background-color: ${defaultTheme.status.errorHoverColor};
    }
    
    &:active {
      border: 2px solid ${defaultTheme.status.errorActiveColor};
      background-color: ${defaultTheme.status.errorActiveColor};
    }
  `,
  success: () => `
    background-color: ${defaultTheme.status.successActiveColor};
    border: 2px solid ${defaultTheme.status.successActiveColor};
    color: ${defaultTheme.textColorInverted};
    
    &:focus {
      outline: 2px solid ${defaultTheme.status.successHoverColor};
      outline-offset: 2px;
    } 
    
    &focus, &:hover {
      background-color: ${defaultTheme.status.successHoverColor};
    }
    
    &:active {
      border: 2px solid ${defaultTheme.status.successActiveColor};
      background-color: ${defaultTheme.status.successActiveColor};
    }
  `,
};

const TERTIARY_BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;
  `,
  warning: () => `
    color: ${defaultTheme.status.warningColor};

    &:focus {
      outline: 3px solid ${defaultTheme.status.warningHoverColor};
      outline-offset: 2px;
    } 

    &focus, &:hover {
      background-color: ${defaultTheme.status.warningHoverColor};
    }
  `,
  error: () => `
    color: ${defaultTheme.status.errorColor};
    
    &:focus {
      outline: 3px solid ${defaultTheme.status.errorHoverColor};
      outline-offset: 2px;
    } 

    &focus, &:hover {
      background-color: ${defaultTheme.status.errorHoverColor};
    }
  `,
  success: () => `
    color: ${defaultTheme.status.successColor};
    
    &:focus {
      outline: 2px solid ${defaultTheme.status.successHoverColor};
      outline-offset: 2px;
    } 

    &focus, &:hover {
      background-color: ${defaultTheme.status.successHoverColor};
    }
  `,
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:active {
    background-color: ${defaultTheme.primaryActiveColor};
    border-color: ${defaultTheme.primaryActiveColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${defaultTheme.primaryHoverColor};
    outline-offset: 2px;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: white;

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};

  &:disabled {
    background: none;
    border-color: ${defaultTheme.disabled};
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const TertiaryButton = styled(Button)`
  background: none;
  background-color: none;
  border: none;
  color: ${defaultTheme.primaryColor};

  &:disabled {
    background: none;
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(TERTIARY_BUTTON_MODIFIERS)};
`;
