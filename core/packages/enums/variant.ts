export const Variant = {
  Contained: 'contained',
  Outlined: 'outlined',
  Text: 'text',
} as const;

export type Variant = typeof Variant[keyof typeof Variant];
