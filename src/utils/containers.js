import {connect} from 'react-redux';
import UserRolesList from '../ui/UserRolesList.js';
import RolesView from '../ui/RolesView.js';
import AddRoleForm from '../ui/AddRoleForm.js';
import ShowAddRoleFormButton from '../ui/ShowAddRoleFormButton.js';
import NavBar from '../ui/NavBar.js';

export const RolesViewContainer = connect(
  state => ({
    user: {...state.user},
    ui: {...state.ui}
  }),
  null
)(RolesView);

export const NavBarContainer = connect(
  null,
  dispatch => ({
    onClick(action) {
      dispatch(action);
    }
  })
)(NavBar);

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
