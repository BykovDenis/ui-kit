import React from 'react';

function renderChildren(children, props: any) {
  const propsParsed: any = { ...props };
  const childrenCount: number = children?.length;
  if (childrenCount > 0) {
    delete propsParsed?.children;
  }
  return React.Children.map(children, (child: React.ReactElement, index: number) => {
    const tabName: string = child?.props?.name;
    const isDisabled: boolean = child?.props?.disabled;
    return React.cloneElement(child, {
      ...propsParsed,
      isActive: (tabName ? props.value === tabName : props.value === index) || (childrenCount === 1 && !isDisabled),
      tabActive: tabName ? tabName : index,
    });
  });
}

export default renderChildren;
