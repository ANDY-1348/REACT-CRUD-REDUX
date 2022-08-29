import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../app/api';
import { setUsers } from '../app/userSlice';
import Loading from './Loading';
import User from './User';

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [loading, setLoading] = useState(true);

  async function fetchUsers() {
    setLoading(true);
    try {
      const { data } = await getUsers();
      dispatch(setUsers(data.data));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function NoUsers() {
    return (
      <main>
        <div className='container'>
          <h2>No Users found</h2>
          <button className='btn' onClick={fetchUsers}>
            Please try again
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <div className='container'>
        {loading ? (
          <Loading />
        ) : (
          <div className='row'>
            {users && users.length ? (
              users.map((user) => <User key={user.id} {...user} />)
            ) : (
              <NoUsers />
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Users;
