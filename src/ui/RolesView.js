import React from 'react';
import {UserRolesListContainer, AddRoleFormContainer, ShowAddRoleFormButtonContainer} from '../utils/containers.js';

const RolesView = ({user, ui}) => {

  return (<div className = "user-container" >
      <h2>{user.name}< /h2>
      <UserRolesListContainer / >
      {ui.showAddRoleForm ? < AddRoleFormContainer / > : < ShowAddRoleFormButtonContainer / >}
     </div>
  )
};

export default RolesView;
