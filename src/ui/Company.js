import React from 'react';

const Company = ({id, name, city, usState, website, companyProductions}) => {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <li>Location: {city + ', ' + usState}</li>
        <li>Website: <a href={'http://'+website}>{website}</a></li>
      </ul>
      <h3>Productions</h3>
      <ul>
        {companyProductions.map(({id, show, date}) => <li key={id}><em>{show}</em>, {date}</li>)}
      </ul>
      <hr/>
    </div>)
}

export default Company;
