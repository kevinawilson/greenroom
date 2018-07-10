import React from 'react';
import {showAddRoleForm} from '../utils/actions.js';

const ShowAddRoleFormButton = ({onClick}) => {

  const handleClick = function (e) {
    e.preventDefault();
    onClick();
  }

  return (
    <button onClick={handleClick}>Add New Role</button>
  );
}

export default ShowAddRoleFormButton;
