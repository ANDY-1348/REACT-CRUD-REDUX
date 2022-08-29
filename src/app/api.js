import axios from 'axios';

const apiURL = 'https://reqres.in/api';

function getUsers() {
  const response = axios.get(`${apiURL}/users`);
  return response;
}

function getUpdatedUser(id, user) {
  const response = axios.put(`${apiURL}/users/${id}`, {
    avatar: user.avatar,
    id: id,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
  });

  return response;
}

export { getUsers, getUpdatedUser };
