import React, {Component} from 'react';
import {addCompany} from '../utils/actions.js';

class AddCompanyForm extends Component {

  constructor(props) {
      super(props);
      this.onSubmit = props.onSubmit;
      this.companies = props.companies;

      this.state = {
          "companyName": null,
          "companyCity": null,
          "companyUsState": null,
          "companyWebsite": null
      };
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.onSubmit(addCompany(this.state.companyName, this.state.companyCity, this.state.companyUsState, this.state.companyWebsite));
  };

  handleCancel = (e) => {

  };

  handleChange = (e) => {
    let valueToAssign = null;
    console.log(e.target.name);
    switch (e.target.name) {
      case "companyNameInput":
        valueToAssign = e.target.value
        this.companyNameInput = valueToAssign;
        this.setState({
          "companyName": valueToAssign
        });
        break;
      case "companyCityInput":
        valueToAssign = e.target.value;
        this.companyCityInput = valueToAssign;
        this.setState({
          "companyCity": valueToAssign
        });
        break;
      case "companyUsStateInput":
        valueToAssign = e.target.value;
        this.companyUsStateInput = e.target.label;
        this.setState({
          "companyUsState": valueToAssign
        });
        break;
      case "companyWebsiteInput":
        valueToAssign = e.target.value;
        this.companyWebsiteInput = valueToAssign
        this.setState({
          "companyWebsite": valueToAssign
        });
        break;
      default:
        return;
    };
  };

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>Company Name</label>
          <input type="text" name="companyNameInput" onChange={this.handleChange}></input><br/>
          <label>City</label>
          <input type="text" name="companyCityInput" onChange={this.handleChange}></input>
          <label>State</label>
          <select name="companyUsStateInput" onChange={this.handleChange}>
          	<option value="AL">Alabama</option>
          	<option value="AK">Alaska</option>
          	<option value="AZ">Arizona</option>
          	<option value="AR">Arkansas</option>
          	<option value="CA">California</option>
          	<option value="CO">Colorado</option>
          	<option value="CT">Connecticut</option>
          	<option value="DE">Delaware</option>
          	<option value="DC">District Of Columbia</option>
          	<option value="FL">Florida</option>
          	<option value="GA">Georgia</option>
          	<option value="HI">Hawaii</option>
          	<option value="ID">Idaho</option>
          	<option value="IL">Illinois</option>
          	<option value="IN">Indiana</option>
          	<option value="IA">Iowa</option>
          	<option value="KS">Kansas</option>
          	<option value="KY">Kentucky</option>
          	<option value="LA">Louisiana</option>
          	<option value="ME">Maine</option>
          	<option value="MD">Maryland</option>
          	<option value="MA">Massachusetts</option>
          	<option value="MI">Michigan</option>
          	<option value="MN">Minnesota</option>
          	<option value="MS">Mississippi</option>
          	<option value="MO">Missouri</option>
          	<option value="MT">Montana</option>
          	<option value="NE">Nebraska</option>
          	<option value="NV">Nevada</option>
          	<option value="NH">New Hampshire</option>
          	<option value="NJ">New Jersey</option>
          	<option value="NM">New Mexico</option>
          	<option value="NY">New York</option>
          	<option value="NC">North Carolina</option>
          	<option value="ND">North Dakota</option>
          	<option value="OH">Ohio</option>
          	<option value="OK">Oklahoma</option>
          	<option value="OR">Oregon</option>
          	<option value="PA">Pennsylvania</option>
          	<option value="RI">Rhode Island</option>
          	<option value="SC">South Carolina</option>
          	<option value="SD">South Dakota</option>
          	<option value="TN">Tennessee</option>
          	<option value="TX">Texas</option>
          	<option value="UT">Utah</option>
          	<option value="VT">Vermont</option>
          	<option value="VA">Virginia</option>
          	<option value="WA">Washington</option>
          	<option value="WV">West Virginia</option>
          	<option value="WI">Wisconsin</option>
          	<option value="WY">Wyoming</option>
          </select><br/>
          <label>Website</label>
          <input type="text" name="companyWebsiteInput" onChange={this.handleChange}></input><br/>
          <input type="submit" value="Submit New Company"></input>
          <button type="button" onClick={this.handleCancel}>Cancel</button>
        </form>
    );
  };
};

export default AddCompanyForm;
