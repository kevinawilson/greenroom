import C from '../utils/constants.js';
import uuid from 'uuid/v1';

export const changeView = (newView) => {
  return {
    type: C.CHANGE_VIEW,
    newView: newView
  }
}

export const addUserRole = (production, company, role) => {
  return {
    type: C.ADD_USER_ROLE,
    id: uuid(),
    production: production,
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

export const addCompany = (name, city, usState, website) => {
  return {
    type: C.ADD_COMPANY,
    id: uuid(),
    name: name,
    city: city,
    usState: usState,
    website: website
  }
}
