import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const renderPhrase = (number) => {
    const lastNumber = Number(number.toString().split("").at(-1));
    const penultimate = Number(number.toString().split("").at(-2)); //для 12, 112, 212 и тд

    if (lastNumber === 1) return "человек тусанет с тобой сегодня";

    if (lastNumber >= 2 && lastNumber <= 4) {
      if (penultimate === 1 && lastNumber === 2) {
        return "человек тусанет с тобой сегодня";
      } else return "человека тусанут с тобой сегодня";
    } else return "человек тусанет с тобой сегодня";
  };

  return (
    <>
      <h1>
        <span
          className={
            "m-2 badge bg-" + (users.length > 0 ? "primary" : "danger")
          }
        >
          {users.length === 0
            ? "Никто с тобой не тусанет"
            : `${users.length} ${renderPhrase(users.length)}`}
        </span>
      </h1>

      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((quality) => (
                    <span
                      key={quality._id}
                      className={"m-2 badge bg-" + quality.color}
                    >
                      {quality.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
export default Users;
