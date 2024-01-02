import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  const list = List();
  return list.concat(page1, page2);
}

export function mergeElements(page1, page2) {
  const map = Map();
  return map.merge(page1, page2);
}
