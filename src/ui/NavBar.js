import React from 'react';
import {changeView} from '../utils/actions.js';

const NavBar = ({onClick}) => {

  const handleClick = function (e) {
    onClick(changeView(e.target.id));
    e.preventDefault();
  }

  return (
    <nav id='navbar'>
      <ul onClick={handleClick}>
        <li id='user'>User</li>
        <li id='companies'>Companies</li>
        <li id='productions'>Productions</li>
        <li id='shows'>Shows</li>
      </ul>
    </nav>
  );
}

export default NavBar;
