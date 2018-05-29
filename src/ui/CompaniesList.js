import React from 'react';
import PropTypes from 'prop-types';
import Company from '../ui/Company.js'

const CompanyList = ({companies}) => {

  return companies.map(({id, name, city, usState, website, productions}) => {
    return <Company key={id} id={id} name={name} city={city} usState={usState} website={website} productions={productions} />
  })
}

CompanyList.propTypes = {
  companies: PropTypes.array
}

export default CompanyList;
