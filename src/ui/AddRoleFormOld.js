import React from 'react';
import {addUserRole, hideAddRoleForm} from '../utils/actions.js';

const AddRoleForm = ({onSubmit}) => {
  var show;
  var company;
  var role;

  const handleChange = function (e) {
    switch (e.target.name) {
      case "show":
        show = e.target.value;
        break;
      case "company":
        company = e.target.value;
        break;
      case "role":
        role = e.target.value;
        break;
      default:
    }
  };

  const submitHandler = function (e) {
    if (show && company && role) {
      onSubmit(addUserRole(show, company, role));
      onSubmit(hideAddRoleForm());
    };
    e.preventDefault();
  };

  const cancelAdd = function (e) {
    onSubmit(hideAddRoleForm());
    e.preventDefault();
  }

  return (<div>
    <form onSubmit={submitHandler}>
      <label>
        Show
        <input type="text" name="show" value={show} onChange={handleChange}/>
      </label>
      <label>
        Company
        <input type="text" name="company" value={company} onChange={handleChange}/>
      </label>
      <label>
        Role
        <input type="text" name="role" value={role} onChange={handleChange}/>
      </label>
      <input type="submit" value="Submit"/>
      <input type="submit" value="Cancel" onClick={cancelAdd}/>
    </form>

  </div>)
}

export default AddRoleForm;
