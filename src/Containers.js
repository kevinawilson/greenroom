import {connect} from 'react-redux';
import UserRolesList from './UserRolesList.js';
import AddRoleForm from './AddRoleForm.js';

export const UserRolesListContainer = connect(
  state => ({
    roles: [...state.roles]
  }),
  dispatch => ({
    onDelete(action) {
      dispatch(action);
    }
  })
)(UserRolesList);

export const AddRoleFormContainer = connect(
  null,
  dispatch => ({
    onSubmit(action) {
      dispatch(action)
    }
  })
)(AddRoleForm);
