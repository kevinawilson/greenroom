import React from 'react';

const Company = ({id, name, city, usState, website, productions}) => {

  return (
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Location: {city + ', ' + usState}</li>
        <li>Website: <a href={'http://'+website}>{website}</a></li>
      </ul>
      <hr/>
    </div>)
}

export default Company;
