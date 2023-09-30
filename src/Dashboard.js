
import React, { useState } from 'react';
import { UserContextConsumer } from './UserContext';

function Dashboard() {
  const [state, setState] = useState({
    username: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <UserContextConsumer>
      {(context) => (
        <>
          <p>This is {context.username}. </p>
          <input
            type="text"
            name="username"
            placeholder="New username"
            value={state.username}
            onChange={handleChange}
          />
          <button onClick={() => context.changeUsername(state.username)}>
            Change username
          </button>
        </>
      )}
    </UserContextConsumer>
  );
}

export default Dashboard;
