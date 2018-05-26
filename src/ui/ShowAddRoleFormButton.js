import React from 'react';
import {showAddRoleForm} from '../utils/actions.js';

const ShowAddRoleFormButton = ({text, onSubmit}) => {

  const handleSubmit = function (e) {
    e.preventDefault();
    onSubmit(showAddRoleForm());
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='submit' value='Add New Role' />
    </form>
  );
}

export default ShowAddRoleFormButton;
