import React from 'react';

import IListElement from '../types/ilist-element';

const ListItem: React.FunctionComponent<IListElement> = (props: IListElement) => {
  if (typeof props.element !== 'object') {
    return <li>{props.element}</li>;
  } else {
    <li>321</li>;
  }
};

export default ListItem;
