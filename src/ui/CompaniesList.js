import React from 'react';
import PropTypes from 'prop-types';
import Company from '../ui/Company.js'

const CompanyList = (state) => {

  return state.companies.map(({id, name, city, usState, website}) => {
    let companyProductions = state.productions.filter(function(e) {
      return e.company === id;
    });

    return <Company key={id} id={id} name={name} city={city} usState={usState} website={website} companyProductions={companyProductions} />
  })
}

CompanyList.propTypes = {
  state: PropTypes.object
}

export default CompanyList;
