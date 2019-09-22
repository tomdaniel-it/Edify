import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createAccount } from '../../actions/accountActions';
import { getError } from '../../selectors/installationSelectors';
import './InstallationScreen.css';
import { fetchInstallationStatus } from '../../actions/installationActions';

const InstallationScreen = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const installationError = useSelector(getError);

  const createAccountCallback = useCallback(
    async () => {
      await dispatch(createAccount(username, password));
      dispatch(fetchInstallationStatus());
    },
    [dispatch, username, password],
  );

  return (
    <div>
      <h1>Edify Installation</h1>
      <h3>Create the admin user</h3>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            placeholder="Username"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" />
        </div>
        <button onClick={createAccountCallback} type="button">Create user</button>
      </form>
      {installationError && <p className="error">{installationError}</p>}
    </div>
  );
};

export default InstallationScreen;
