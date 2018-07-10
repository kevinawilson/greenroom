import React, {Component} from 'react';
import AddCompanyForm from '../ui/AddCompanyForm.js';
import {sampleData} from '../sampleData.js';
import uuid from 'uuid/v1';

class AddRoleForm extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = props.onSubmit;
    this.productions = sampleData.productions;
    this.companies = sampleData.companies;

    this.state = {
      showAddCompanyFormButton: true,
      showAddCompanyForm: false,
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
    this.onSubmit();
  };

  handleNewCompany = (companyName, companyCity, companyUsState, companyWebsite) => {
    console.log(companyName);

    sampleData.companies.push({
          id: uuid(),
          name: companyName,
        	city:	companyCity,
          usState: companyUsState,
          website: companyWebsite
    });
    this.setState({
      "showAddCompanyForm": false,
      "showAddCompanyFormButton": true
    });
  };

  toggleAddRoleForm = (e) => {
    switch (e.target.name) {
      case "showAddCompanyForm":
        this.setState({
          "showAddCompanyForm": true,
          "showAddCompanyFormButton": false
        });
        break;
      case "cancelAddCompanyForm":
        this.setState({
          "showAddCompanyForm": false,
          "showAddCompanyFormButton": true
        });
        break;
      default:
        return;
      };
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
          <button type="button" name="cancelButton" onClick={this.handleSubmit}>Cancel New Role</button><br/>
          <select name="companyDropdown" onChange={this.handleChange} value={this.companyValue}>
            <option value="false">-- Select Company --</option>
            {companiesDropdownOptions}
          </select>
          {this.state.showAddCompanyFormButton ? <div><button type="button" name="showAddCompanyForm" onClick={this.toggleAddRoleForm}>Add New Company</button><br/></div> : null}
          {this.state.showProductionDropdown ? productionDropdown : null}
          {this.state.showRoleInput ? roleInput : null}
          {this.state.showSubmitButton ? <input type="submit" value="Submit New Role"></input> : null}
        </form><br />
      {this.state.showAddCompanyForm ? <div><AddCompanyForm onSubmit={this.handleNewCompany} /><button type="button" name="cancelAddCompanyForm" onClick={this.toggleAddRoleForm}>Cancel New Company</button><br/></div> : null}
      </div>
    )
  };
};

export default AddRoleForm;
