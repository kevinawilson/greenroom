import React from 'react';
import PropTypes from 'prop-types';
import UserRole from '../ui/UserRole.js';
import {deleteUserRole} from '../utils/actions.js';

const UserRolesList = ({roles, companies, productions, onDelete}) => {

  return roles.map(({id, production, role}) => {
    let currentProduction = productions.find(function(e) {
      return e.id === production;
    });

    let currentCompany = companies.find(function(e) {
      return e.id === currentProduction.company;
    }).name;

    return <UserRole key={id} id={id} show={currentProduction.show} company={currentCompany} role={role} onClick={() => onDelete(deleteUserRole(id))}/>
  })
}

UserRolesList.propTypes = {
  state: PropTypes.object
}

export default UserRolesList;
