import React from "react";

const SearchStatus = ({ length }) => {
  //отображение количества юзеров на сайте
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
    <h1>
      <span className={"m-2 badge bg-" + (length > 0 ? "primary" : "danger")}>
        {length === 0
          ? "Никто с тобой не тусанет"
          : `${length} ${renderPhrase(length)}`}
      </span>
    </h1>
  );
};

export default SearchStatus;
