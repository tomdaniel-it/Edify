import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/accountActions';
import { getError } from '../../selectors/accountSelectors';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const accountError = useSelector(getError);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginCallback = useCallback(
    () => {
      dispatch(login(username, password));
    },
    [dispatch, username, password],
  );

  return (
    <div>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={loginCallback}>Login</button>
      </form>
      {accountError && <p>{accountError}</p>}
    </div>
  );
};

export default LoginScreen;
