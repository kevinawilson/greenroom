import C from './constants.js';

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

export {user, roles};
