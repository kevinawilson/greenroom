import React from 'react';
import C from './constants.js';
import uuid from 'uuid/v1';

const UserRole = ({ roles }) => {
  const productionList = roles.map(({id, show, company, role}) => {
    return <div key={id}>
      <p>Show: <em>{show}</em></p>
      <p>Company: {company}</p>
      <p>Role: {role}</p>
      <hr />
    </div>;
  });
  return productionList;
}

const AddButton = ({roles, onClick}) => {
  const action = {
        type: C.ADD_USER_ROLE,
        id: uuid(),
        show: "Into the Woods",
        company: "Spotlight Playhouse",
        role: "Milky White"
      };
  return <a href="#" onClick={onClick(action)} >Add a show</a>;
}

export { UserRole, AddButton };
