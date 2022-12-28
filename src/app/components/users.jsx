import React, { useState } from "react";
import User from "./user"; //для передачи юзера в таблицу

const Users = ({ users, ...rest }) => {
  return (
    //возвращаем таблицу (заголовки и юзер из другого компонента)
    <>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Провфессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User key={user._id} {...user} {...rest} /> //передаем юзера как строчку таблицы
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
