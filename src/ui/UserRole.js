import React from 'react';
import {deleteUserRole} from '../utils/actions.js';

const UserRole = ({id, show, company, role, onDelete}) => {

  const submitHandler = function (e) {
    e.preventDefault();
    onDelete(deleteUserRole(id))
  };

  return (
      <div>
      <ul>
        <li>Show: <em>{show}</em></li>
        <li>Company: {company}</li>
        <li>Role: {role}</li>
      </ul>
      <form onSubmit={submitHandler}>
        <input type="submit" value="Delete Role" />
      </form>
      <hr/>
    </div>)
}

export default UserRole;
