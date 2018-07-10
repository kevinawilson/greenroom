import React, {Component} from 'react';
import {sampleData} from '../sampleData.js';
import AddRoleForm from '../ui/AddRoleForm.js';
import ShowAddRoleFormButton from '../ui/ShowAddRoleFormButton.js'
import UserRolesList from '../ui/UserRolesList.js';

class RolesView extends Component {

  constructor(props) {
    super(props);
    this.state = sampleData;
  };

  showAddRoleForm = () => {
    this.setState({
      "ui": {
        "showAddRoleForm": true
      }
    });
  };

  hideAddRoleForm = () => {
    this.setState({
      "ui": {
        "showAddRoleForm": false
      }
    });
  };

  render = () => {
    return (<div className = "user-container" >
        <h2>{this.state.user.name}< /h2>
        <UserRolesList roles={this.state.roles} productions={this.state.productions} companies={this.state.companies} / >
        {this.state.ui.showAddRoleForm ? < AddRoleForm onSubmit={this.hideAddRoleForm}/ > : < ShowAddRoleFormButton onClick={this.showAddRoleForm} / >}
      </div>)
  };
};

export default RolesView;
