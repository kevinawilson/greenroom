import {connect} from 'react-redux';
import UserRolesList from '../ui/UserRolesList.js';
import AddRoleForm from '../ui/AddRoleForm.js';
import ShowAddRoleFormButton from '../ui/ShowAddRoleFormButton.js';

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
      dispatch(action);
    }
  })
)(AddRoleForm);

export const ShowAddRoleFormButtonContainer = connect(
  null,
  dispatch => ({
    onSubmit(action) {
      dispatch(action);
    }
  })
)(ShowAddRoleFormButton);
