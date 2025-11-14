export const ListItemType = {
  Button: 'button',
  Text: 'text',
} as const;

export type ListItemType = typeof ListItemType[keyof typeof ListItemType];
