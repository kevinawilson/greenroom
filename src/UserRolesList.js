import React from 'react';
import PropTypes from 'prop-types';
import {deleteUserRole} from './actions.js';

const UserRolesList = ({roles, onDelete}) => {

  const submitHandler = function (id) {
    console.log(id);
    //onDelete(deleteUserRole(e.target.id));
    //e.preventDefault();
  };

  return roles.map(({id, show, company, role}) => {
    return (
      <div key={id}>
      <p>Show:
        <em>{show}</em>
      </p>
      <p>Company: {company}</p>
      <p>Role: {role}</p>
      <form onSubmit={submitHandler(id)}>
        <button>Delete Role</button>
      </form>
      <hr/>
    </div>)
  })
}

UserRolesList.propTypes = {
  roles: PropTypes.array
}

export default UserRolesList;
