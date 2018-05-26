import React from 'react';
import {UserRolesListContainer, AddRoleFormContainer, ShowAddRoleFormButtonContainer} from '../utils/containers.js';

const RolesView = (state) => {

  return (<div className = "user-container" >
      <h2>{state.user.name}< /h2>
      <UserRolesListContainer / >
      {state.ui.showAddRoleForm ? < AddRoleFormContainer / > : < ShowAddRoleFormButtonContainer / >}
     </div>
  )
};

export default RolesView;
