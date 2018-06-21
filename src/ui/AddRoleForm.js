import React, {Component} from 'react';
import {AddCompanyFormContainer} from '../utils/containers.js';
import {addUserRole, hideAddRoleForm} from '../utils/actions.js';

class AddRoleForm extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = props.onSubmit;
    this.companies = props.companies;
    this.productions = props.productions;

    this.state = {
      showProductionDropdown: false,
      showRoleInput: false,
      showSubmitButton: false,
      companyProductions: [],
      companyID: null,
      productionID: null,
      role: null
    };
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.onSubmit(addUserRole(this.state.productionID, this.state.companyID, this.state.role));
    this.onSubmit(hideAddRoleForm());
  };

  handleChange = (e) => {
    let valueToAssign = null;

    switch (e.target.name) {
      case "companyDropdown":
        valueToAssign = e.target.value === "false" ? false : true;
        this.companyValue = e.target.label;
        var companyProductions = this.productions.filter(function(production) {
          return production.company === e.target.value;
        });
        this.setState({
          "companyProductions": companyProductions,
          "companyID": e.target.value,
          "showSubmitButton": false,
          "showRoleInput": false,
          "showProductionDropdown": valueToAssign
        });
        break;
      case "productionDropdown":
        valueToAssign = e.target.value === "false" ? false : true;
        this.productionValue = e.target.label;
        this.setState({
          "productionID": e.target.value,
          "showRoleInput": valueToAssign,
          "showSubmitButton": false
        });
        break;
      case "roleInput":
        valueToAssign = e.target.value.length > 0;
        this.setState({
          "showSubmitButton": valueToAssign,
          "role": e.target.value
        });
        break;
      case "cancelButton":
        this.onSubmit(hideAddRoleForm());
        break;
      default:
        return;
    };
  };

  render() {

    const companiesDropdownOptions = this.companies.map(company => {
        return (
          <option key={company.id} value={company.id}>{company.name}</option>
        )
      });

    const productionDropdown = (<select name="productionDropdown" onChange={this.handleChange} value={this.productionValue}>
      <option value="false">-- Select Production --</option>
      {
        this.state.companyProductions.map(production => {
          return (
            <option key={production.id} value={production.id}>{production.show}</option>
          )
        })
      }
      </select>);

    const roleInput = (<div>
        <label>Role:</label>
        <input type="text" name="roleInput" id="roleInput" onChange={this.handleChange}></input>
      </div>);

    return (<div>
        <form action="submit" onSubmit={this.handleSubmit}>
          <button type="button" name="cancelButton" onClick={this.handleChange}>Cancel</button><br/>
          <select name="companyDropdown" onChange={this.handleChange} value={this.companyValue}>
            <option value="false">-- Select Company --</option>
            {companiesDropdownOptions}
          </select><br/>
          {this.state.showProductionDropdown ? productionDropdown : null}
          {this.state.showRoleInput ? roleInput : null}
          {this.state.showSubmitButton ? <input type="submit" value="Submit New Role"></input> : null}
        </form>
        <AddCompanyFormContainer/>
      </div>
    )
  };
};

export default AddRoleForm;
