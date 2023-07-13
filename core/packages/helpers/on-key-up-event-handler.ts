import { KEY_ESCAPE } from '../constants';
import React from 'react';

function onKeyUpEventHandler(evt: any, cb: () => void) {
  if (evt.keyCode === 27 || evt.code === KEY_ESCAPE || evt.key === KEY_ESCAPE) {
    cb();
  }
}

export default onKeyUpEventHandler;
