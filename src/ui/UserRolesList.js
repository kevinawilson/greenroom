import React from 'react';
import PropTypes from 'prop-types';
import UserRole from '../ui/UserRole.js'

const UserRolesList = ({roles, onDelete}) => {

  const handleChange = function (e) {
    console.log("Hello");
  }

  return roles.map(({id, show, company, role}) => {
    return <UserRole key={id} id={id} show={show} company={company} role={role}
      onDelete={onDelete} onSubmit={handleChange}/>
  })
}

UserRolesList.propTypes = {
  roles: PropTypes.array
}

export default UserRolesList;
