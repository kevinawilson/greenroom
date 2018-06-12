import React, {Component} from 'react';
import {addUserRole, hideAddRoleForm, selectCompany} from '../utils/actions.js';

class AddRoleForm extends Component {

  constructor(props) {
    super(props);
    this.ui = props.ui;
    this.onSubmit = props.onSubmit;
    this.companies = props.companies;

    this.state = {
      showProductionDropdown: false,
      showRoleInput: false
    };
  };

  handleChange = (e) => {
    let propertyToSet = null;
    let valueToAssign = null;

    switch (e.target.name) {
      case "companyDropdown":
        propertyToSet = "showProductionDropdown";
        valueToAssign = e.target.value === "false" ? false : true;
        this.companyValue = e.target.label;
        break;
      case "productionDropdown":
        propertyToSet = "showRoleInput";
        break;
      default:
        return;
    };

    this.setState({
      [propertyToSet]: valueToAssign
    })

    console.log(this.state);
  };

  render() {
    return (
      <div>
        <select name="companyDropdown" options={this.selectCompanyOptions} onChange={this.handleChange} value={this.companyValue} placeholder="Select a theater company">
          <option value="false">-- Select Company --</option>
          {
            this.companies.map(company => {
              return (
                <option key={company.id} value={company.id}>{company.name}</option>
              )
            })
          }
        </select>
        {this.state.showProductionDropdown ? <p>Selected</p> : null}
      </div>
    )
  };
};

export default AddRoleForm;
