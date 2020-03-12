import { getUsers } from './http.services';

const body = document.body;

let tbody,
  num = 0;

const createHtml = () => {
  const div = document.createElement('div'),
    html = `
      <h1 class="mt-4 display-4">Lista de usuarios</h1>
      <table class="table mt-4">
        <thead>
          <tr>
            <th scope="col">#</td>
            <th scope="col">Avatar</td>
            <th scope="col">Nombre</td>
            <th scope="col">Email</td>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    `;

  div.innerHTML = html;
  body.appendChild(div);
  // Una vez creada la tabla, se crea la referencia al tbody
  tbody = document.querySelector('tbody');
};

const createRowsUsers = (user) => {
  num++;
  const tr = document.createElement('tr'),
    html = `
      <td scope="col">${num}</td>
      <td scope="col">
        <img class="img-thumbnail" src="${user.avatar}">
      </td>
      <td scope="col">${user.first_name} ${user.last_name}</td>
      <td scope="col">${user.email}</td>
    `;

  tr.innerHTML = html;
  tbody.appendChild(tr);
};

export const init = async () => {
  num = 0;
  createHtml();
  (await getUsers()).forEach(createRowsUsers);
};
