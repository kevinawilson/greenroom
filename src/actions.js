import C from './constants.js';
import uuid from 'uuid/v1';

export const addUserRole = (show, company, role) => {
  return {
    type: C.ADD_USER_ROLE,
    id: uuid(),
    show: show,
    company: company,
    role: role
  }
}

export const deleteUserRole = (id) => {
  return {
    type: C.DELETE_USER_ROLE,
    id: id
  }
}
