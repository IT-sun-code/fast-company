import React from "react";

const BookMark = ({ status, ...rest }) => {
  return (
    //тернарник на добавление закрашенной или не закрашенной иконки в зависимости от статуса TRUE or FALSE
    <button {...rest}>
      <i className={"bi bi-bookmark" + (status ? "-fill" : "")}></i>
    </button>
  );
};

export default BookMark;
