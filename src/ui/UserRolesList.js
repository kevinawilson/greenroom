import React from 'react';
import PropTypes from 'prop-types';
import UserRole from '../ui/UserRole.js'

const UserRolesList = (state, onDelete) => {

  return state.roles.map(({id, production, role}) => {
    let currentProduction = state.productions.find(function(e) {
      return e.id === production;
    });

    let currentCompany = state.companies.find(function(e) {
      return e.id === currentProduction.company;
    }).name;

    return <UserRole key={id} id={id} show={currentProduction.show} company={currentCompany} role={role}
      onDelete={onDelete} />
  })
}

UserRolesList.propTypes = {
  state: PropTypes.object
}

export default UserRolesList;
