const ButtonType = {
  Button: 'button',
  Submit: 'submit',
  Reset: 'reset',
} as const;

export type TButtonType = (typeof ButtonType)[keyof typeof ButtonType];

export default ButtonType;
