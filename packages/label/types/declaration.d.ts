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

declare module 'styled-components';

