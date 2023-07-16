import React from 'react';
import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/allmeetup'>All Meetup</Link>
          </li>
          <li>
            <Link to='/newmeetup'>Add New Meetup</Link>
          </li>
          <li>
            <Link to='/favorite'>My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
