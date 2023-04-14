import React from 'react';

function renderChildren(children, props: any) {
  const propsParsed: any = { ...props };
  if (propsParsed?.children?.length > 0) {
    delete propsParsed?.children;
  }
  return React.Children.map(children, (child: React.ReactElement, index: number) => {
    const tabName: string = child?.props?.name;
    return React.cloneElement(child, {
      ...propsParsed,
      isActive: tabName ? props.value === tabName : props.value === index,
      tabActive: tabName ? tabName : index,
    });
  });
}

export default renderChildren;
