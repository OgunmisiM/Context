import React from 'react';
import { UserContextConsumer } from './UserContext';
function Header() {
  return (
    <header>
      <UserContextConsumer>
        {(context) => <h2>Welcome, {context.username}</h2>}
      </UserContextConsumer>
    </header>
  );
}
export default Header;
