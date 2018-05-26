import C from '../utils/constants.js';
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

export const showAddRoleForm = () => {
  return {
    type: C.SHOW_ADD_ROLE_FORM
  }
}

export const hideAddRoleForm = () => {
  return {
    type: C.HIDE_ADD_ROLE_FORM
  }
}
