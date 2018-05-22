import React from 'react';

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

const AddButton = ({ roles, callback }) => {
  let newShow = {
    id: "4",
    show: "Into the Woods",
    company: "Spotlight Playhouse",
    role: "Milky White"
  };
  
  return <a href="#" onClick={callback(newShow)}>Add a show</a>;
}

export { UserRole, AddButton };
