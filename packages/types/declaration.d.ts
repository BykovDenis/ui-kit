declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module 'rollup-plugin-svg' {
}

declare module "*.json" {
  const value: any;
  export default value;
}

declare module '*.svg' {
  const content: any
  export default content;
}

declare module 'styled-components';
