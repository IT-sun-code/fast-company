import React from "react";
import Quality from "./quality";
import BookMark from "./bookmark";

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  bookmark,
  onToggleBookMark,
  onDelete,
}) => {
  return (
    //возвращаем строчку для отображения юзера в таблице,
    <tr>
      <td>{name}</td>
      <td>
        {qualities.map((quality) => (
          <Quality key={quality._id} {...quality} /> //для каждого элемента массива создаем компонент качества
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate} /5</td>
      <td>
        <BookMark status={bookmark} onClick={() => onToggleBookMark(_id)} />
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => onDelete(_id)}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
