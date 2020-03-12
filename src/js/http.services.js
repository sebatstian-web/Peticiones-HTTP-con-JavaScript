const url = 'https://reqres.in/api/users?page=1';

const getUsers = async () => {
  try {
    const resp = await fetch(url),
      { data: users } = await resp.json();

    return users;
  } catch (err) {
    throw `Error en la petición ${err}`;
  }
};

export { getUsers };
