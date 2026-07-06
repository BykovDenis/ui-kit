import { styled } from '@dbykov-ui-kit/styles';

interface IDayOfWeek {
  color: string;
  fontFamily: string;
  fontSize: number;
}

const DayOfWeek =
  styled('li') <
  IDayOfWeek >
  `
    color: ${(props: IDayOfWeek) => props.color};
    font-family: ${(props: IDayOfWeek) => props.fontFamily};
    font-size: ${(props: IDayOfWeek) => props.fontSize}px;
`;

export default DayOfWeek;
