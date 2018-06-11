import React, {Component} from 'react';
import Dropdown from 'react-dropdown';
import {addUserRole, hideAddRoleForm, selectCompany} from '../utils/actions.js';
import {SelectCompanyContainer, SelectProductionContainer} from '../utils/containers.js';

class AddRoleForm extends Component {

  constructor(props) {
    super(props);
    this.ui = props.ui;
    this.currentValue = null;
    this.selectOptions = props.companies.map(company => ({ value: company.id, label: company.name }));
    this.handleChange = this.handleChange.bind(this);
    this.onSelect = props.onSelect;
  };

  handleChange(e) {
    console.log(this.ui);
    if (!this.ui.companySelected) {
      this.onSelect(selectCompany());
    };
  };

  render() {
    return (
      <div>
        <Dropdown options={this.selectOptions} onChange={this.handleChange} value={this.currentValue} placeholder="Select a theater company" />
      </div>
    )
  };
};

export default AddRoleForm;
