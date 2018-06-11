import React from 'react';
import Dropdown from 'react-dropdown';

const SelectProduction = ({productions}) => {

  let selectOptions = productions.map(production => ({ value: production.id, label: production.show }));

  return (
      <Dropdown options={selectOptions} />
  );
}

export default SelectProduction;
