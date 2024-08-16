import { KEY_ENTER, KEY_ESCAPE } from '../constants';
import KeyCode from '../enums/key-code';

function onKeyUpEscapeEventHandler(evt: any, cb: () => void) {
  if (evt.keyCode === KeyCode.Escape || evt.code === KEY_ESCAPE || evt.key === KEY_ESCAPE) {
    cb();
  }
}

function onKeyUpEnterEventHandler(evt: any, cb: () => void) {
  if (evt.keyCode === KeyCode.Enter || evt.code === KEY_ENTER || evt.key === KEY_ENTER) {
    cb();
  }
}

export { onKeyUpEscapeEventHandler, onKeyUpEnterEventHandler };
