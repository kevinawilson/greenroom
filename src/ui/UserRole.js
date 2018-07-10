import React from 'react';

const UserRole = ({id, show, company, role}) => {

  return (
    <div>
      <ul>
        <li>Show: <em>{show}</em></li>
        <li>Company: {company}</li>
        <li>Role: {role}</li>
      </ul>
      <button type='button'>Delete Role</button>
      <hr/>
    </div>)
};

export default UserRole;
