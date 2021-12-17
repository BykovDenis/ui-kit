import React from 'react';

import ThemeContext from '../../styles/src/themes';
import CheckboxStyled from './checkbox';
import FormControl from './form-control';
import ICheckbox from './icheckbox';
import Label from './label';

const Checkbox: React.FunctionComponent<ICheckbox> = (props: ICheckbox) => {
  return props.ReactThemeContext ? (
    <props.ReactThemeContext.Consumer>
      {(theme: any) => (
        <FormControl>
          <CheckboxStyled
            {...props}
            id={props.id}
            disabled={props?.disabled}
            color={theme?.palette?.baseFontColor}
            backgroundColor={theme?.palette?.secondary?.main}
          />
          {props?.label && (
            <Label {...props} htmlFor={props.id} color={theme?.palette?.baseFontColor}>
              {props?.label}
            </Label>
          )}
        </FormControl>
      )}
    </props.ReactThemeContext.Consumer>
  ) : (
    <ThemeContext.Consumer>
      {(theme: any) => (
        <FormControl>
          <CheckboxStyled
            {...props}
            id={props.id}
            disabled={props?.disabled}
            theme={{
              color: props.color ?? theme.palette.baseFontColor,
              backgroundColor: props.backgroundColor ?? theme.palette.secondary.main,
            }}
          />
          {props?.label && (
            <Label
              {...props}
              htmlFor={props.id}
              color={props.color || theme.palette.baseFontColor}
              backgroundColor={props.backgroundColor || theme.palette.secondary.main}
            >
              {props?.label}
            </Label>
          )}
        </FormControl>
      )}
    </ThemeContext.Consumer>
  );
};

export default Checkbox;

// export default React.memo((props: any) =>
//   props.ReactThemeContext ? (
//     <props.ReactThemeContext.Consumer>
//       {(theme: any) => (
//         <Button
//           {...props}
//           width={props.width}
//           height={props.height}
//           type={props.type}
//           onClick={props?.onClick}
//           disabled={props?.disabled}

//           backgroundImage={props?.backgroundImage}
//           className={props?.className}
//           theme={theme}
//           dataset={props?.dataset}
//         >
//           {props.children}
//         </Button>
//       )}
//     </props.ReactThemeContext.Consumer>
//   ) : (
//     <ThemeContext.Consumer>
//       {(theme: any) => (
//         <Button
//           {...props}
//           variant={props?.variant ?? CONTAINED}
//           width={props?.width}
//           height={props?.height}
//           type={props.type}

//           theme={theme}
//           onClick={props?.onClick}
//           disabled={props?.disabled}
//           fontSize={props?.fontSize}
//           className={props?.className}
//         >
//           {props?.children}
//         </Button>
//       )}
//     </ThemeContext.Consumer>
//   )
// );
