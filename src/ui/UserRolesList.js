import React from 'react';
import PropTypes from 'prop-types';
import UserRole from '../ui/UserRole.js';

const UserRolesList = ({roles, productions, companies}) => {

  return roles.map(({id, production, role}) => {
    let currentProduction = productions.find(function(e) {
      return e.id === production;
    });

    console.log(currentProduction);

    let currentCompany = companies.find(function(e) {
      return e.id === currentProduction.company;
    }).name;

    return <UserRole key={id} id={id} show={currentProduction.show} company={currentCompany} role={role}/>
  })
}

UserRolesList.propTypes = {
  props: PropTypes.object
}

export default UserRolesList;
