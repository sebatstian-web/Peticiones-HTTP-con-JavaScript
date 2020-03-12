const url = 'https://reqres.in/api/users';

const getUser = async (id) => {
  const resp = await fetch(`${url}/${id}`),
    { data: user } = await resp.json();

  return user;
};

const createUser = async (user) => {
  const resp = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return await resp.json();
};

const updateUser = async (id, user) => {
  const resp = await fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return await resp.json();
};

const deleteUser = async (id) => {
  const resp = await fetch(`${url}/${id}`, {
    method: 'DELETE'
  });

  return resp.ok ? 'Usuario eliminado' : 'No se pudo eliminar el usuario';
};

export { getUser, createUser, updateUser, deleteUser };
