import React from 'react';

function renderChildren(children, props: any) {
  const propsParsed: any = { ...props };
  if (propsParsed?.children?.length > 0) {
    delete propsParsed?.children;
  }
  return React.Children.map(children, (child: React.ReactElement, index: number) =>
    React.cloneElement(child, { ...propsParsed, isActive: props.value === index, tabIndex: index })
  );
}

export default renderChildren;
