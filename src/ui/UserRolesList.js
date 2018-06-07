import React from 'react';
import PropTypes from 'prop-types';
import UserRole from '../ui/UserRole.js'

const UserRolesList = (state, onDelete) => {
  console.log({state});
  return state.roles.map(({id, production, role}) => {
    console.log({production});
    let currentProduction = state.productions.find(function(e) {
      return e.id === production;
    });

    var currentCompany = state.companies.find(function(e) {
      return e.id === currentProduction.company;
    }).name;

    console.log(currentProduction);
    return <UserRole key={id} id={id} show={currentProduction.show} company={currentCompany} role={role}
      onDelete={onDelete} />
  })
}

UserRolesList.propTypes = {
  state: PropTypes.object
}

export default UserRolesList;
