import React, {Component} from 'react';
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
  };

  handleChange = (e) => {
    let propertyToSet = null;
    let valueToAssign = null;

    switch (e.target.name) {
      case "companyDropdown":
        propertyToSet = "showProductionDropdown";
        valueToAssign = e.target.value === "false" ? false : true;
        this.companyValue = e.target.label;
        var companyProductions = this.productions.filter(function(production) {
          return production.company === e.target.value;
        });
        this.setState({
          "companyProductions": companyProductions,
          "companyID": e.target.value
        });
        break;
      case "productionDropdown":
        propertyToSet = "showRoleInput";
        valueToAssign = e.target.value === "false" ? false : true;
        this.productionValue = e.target.label;
        this.setState({"productionID": e.target.value});
        break;
      case "roleInput":
        propertyToSet = "showSubmitButton";
        valueToAssign = e.target.value.length > 0;
        this.setState({
          "role": e.target.value
        })
        break;
      default:
        return;
    };

    this.setState({
      [propertyToSet]: valueToAssign
    })
  };

  render() {

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

    console.log(this.state);

    return (
      <form action="submit" onSubmit={this.handleSubmit}>
        <select name="companyDropdown" onChange={this.handleChange} value={this.companyValue}>
          <option value="false">-- Select Company --</option>
          {
            this.companies.map(company => {
              return (
                <option key={company.id} value={company.id}>{company.name}</option>
              )
            })
          }
        </select>
        {this.state.showProductionDropdown ? productionDropdown : null}
        {this.state.showRoleInput ? roleInput : null}
        {this.state.showSubmitButton ? <input type="submit" value="Submit New Role"></input> : null}
      </form>
    )
  };
};

export default AddRoleForm;
