import React from 'react';

function renderChildren(children, props: any) {
  const propsParsed: any = { ...props };
  const childrenFiltered: any = children?.filter(element => element);
  const childrenCount: number = childrenFiltered?.length;
  if (childrenCount > 0) {
    delete propsParsed?.children;
  }
  return React.Children.map(childrenFiltered, (child: React.ReactElement, index: number) => {
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
