import React from 'react';

function renderChildren(children, props) {
  return React.Children.map(children, child => {
    return React.cloneElement(child, {
      name: props.name,
    });
  });
}

export default renderChildren;
