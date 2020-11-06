import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/users';
import pacman from '../pacman.svg';

function Users({ render }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <>
      {loading && (
        <div
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img src={pacman} alt="loading" />
        </div>
      )}
      {users.length > 0 && users.map((user) => render(user))}
      {!loading && users.length === 0 && <p>No users available!</p>}
      {error && !loading && <p>{error}</p>}
    </>
  );
}

export default Users;
