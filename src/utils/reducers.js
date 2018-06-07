import C from '../utils/constants.js';

const user = (state = {}, action) => {
  switch (action.type) {
    case C.EDIT_USER:
      return {
        id: action.id,
        name: action.name,
      };
    default:
      return state;
  }
};

const roles = (state = [], action) => {
  switch (action.type) {
    case C.ADD_USER_ROLE:
      return [
        ...state,
        {
          id: action.id,
          show: action.show,
          company: action.company,
          role: action.role
        }
      ];
    case C.DELETE_USER_ROLE:
     return state.filter(c => c.id !== action.id);
    default:
      return state;
  }
};

const ui = (state = {}, action) => {
  switch (action.type) {
    case C.SHOW_ADD_ROLE_FORM:
      return {
        ...state,
        showAddRoleForm: true
      };
    case C.HIDE_ADD_ROLE_FORM:
      return {
        ...state,
        showAddRoleForm: false
      };
    case C.CHANGE_VIEW:
      return {
        ...state,
        showAddRoleForm: false,
        currentView: action.newView
      };
    default:
      return state;
    }
  }

  const companies = (state = {}, action) => {
    switch (action.type) {
        default:
        return state;
      }
    }

    const productions = (state = {}, action) => {
      switch (action.type) {
          default:
          return state;
        }
      }

export {user, roles, ui, companies, productions};
