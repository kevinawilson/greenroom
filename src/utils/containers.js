import {connect} from 'react-redux';
import NavBar from '../ui/NavBar.js';
import UserRolesList from '../ui/UserRolesList.js';
import UserRole from '../ui/UserRole.js';
import RolesView from '../ui/RolesView.js';
import AddRoleForm from '../ui/AddRoleForm.js';
import ShowAddRoleFormButton from '../ui/ShowAddRoleFormButton.js';
import CompaniesView from '../ui/CompaniesView.js';
import CompaniesList from '../ui/CompaniesList.js'
import SelectProduction from '../ui/SelectProduction.js'

//Navication
export const NavBarContainer = connect(
  null,
  dispatch => ({
    onClick(action) {
      dispatch(action);
    }
  })
)(NavBar);

//Roles View
export const RolesViewContainer = connect(
  state => ({
    user: {...state.user},
    ui: {...state.ui}
  }),
  null
)(RolesView);

export const UserRolesListContainer = connect(
  state => ({
    roles: [...state.roles],
    companies: [...state.companies],
    productions: [...state.productions]
  }),
  dispatch => ({
    onDelete(action) {
      dispatch(action);
    }
  })
)(UserRolesList);

export const UserRoleContainer = connect(
  null,
  dispatch => ({
    onDelete(action) {
      dispatch(action);
    }
  })
)(UserRole);

export const AddRoleFormContainer = connect(
  state => ({
    companies: [...state.companies],
    productions: [...state.productions],
    ui: {...state.ui}
  }),
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

export const SelectProductionContainer = connect(
  state => ({
    productions: [...state.productions]
  }),
  null
)(SelectProduction);

//Companies View
export const CompaniesViewContainer = connect(
  state => ({
    companies: [...state.companies]
  }),
  null
)(CompaniesView);

export const CompaniesListContainer = connect(
  state => ({
    companies: [...state.companies],
    productions: [...state.productions]
  }),
  null
)(CompaniesList);
