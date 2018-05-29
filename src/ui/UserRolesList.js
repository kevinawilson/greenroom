import React from 'react';
import PropTypes from 'prop-types';
import UserRole from '../ui/UserRole.js'

const UserRolesList = ({roles, onDelete}) => {

  return roles.map(({id, show, company, role}) => {
    return <UserRole key={id} id={id} show={show} company={company} role={role}
      onDelete={onDelete} />
  })
}

UserRolesList.propTypes = {
  roles: PropTypes.array
}

export default UserRolesList;
