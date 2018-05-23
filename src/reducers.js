import C from './constants.js';

export const roleReducer = (state = [], action) => {
  switch (action.type) {
    case C.ADD_USER_ROLE:
      return [
        ...state.productions,
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
}
