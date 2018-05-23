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

const productions = (state = [], action) => {
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
    default:
      return state;
  }
};

export {user, productions};
