import { map, get } from 'lodash';

export const fromApi = item => {
  return {
    ...item,
    permissions: map(get(item, 'permissions'), permission => get(permission, 'id')),
  };
};

export const toApi = item => {
  return {
    ...item,
    permissions: map(get(item, 'permissions'), id => ({ id })),
  };
};