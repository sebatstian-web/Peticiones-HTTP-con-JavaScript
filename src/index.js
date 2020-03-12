import { init } from './js/users.page';
import * as CRUD from './js/crud.services';

init();

// Obtener usuario
CRUD.getUser(1).then(console.log);

// Crear usuario
CRUD.createUser({
  name: 'Belu',
  job: 'Teacher'
}).then(console.log);

// Actualizar usuario
CRUD.updateUser(1, {
  name: 'Sebas',
  job: 'Dev'
}).then(console.log);

// Eliminar usuario
CRUD.deleteUser(1).then(console.log);
