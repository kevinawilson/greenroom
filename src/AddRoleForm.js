import React from 'react';
import {addUserRole} from './actions.js';

const AddRoleForm = ({onSubmit}) => {
  var show,
    company,
    role;

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
    (show && company && role) ? onSubmit(addUserRole(show, company, role)) : console.log('Error');
    e.preventDefault();
  };

  return (<div>
    <form onSubmit={submitHandler}>
      <label>
        Show
        <input type="text" name="show" value={show} onChange={handleChange}/>
      </label>
      <label>
        Company
        <select name="company" value={company} onChange={handleChange}>
          <option value={null}>--Select One--</option>
          <option value="Pentucket Players">Pentucket Players</option>
          <option value="Spotlight Playhouse">Spotlight Playhouse</option>
          <option value="Colonial Chorus">Colonial Chorus</option>
          <option value="Merrimack OnStagers">Merrimack OnStagers</option>
        </select>
      </label>
      <label>
        Role
        <input type="text" name="role" value={role} onChange={handleChange}/>
      </label>
      <input type="submit" value="Submit"/>
    </form>
  </div>)
}

export default AddRoleForm;
