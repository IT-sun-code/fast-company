import React from "react";

const Quality = ({ color, name, _id }) => {
  return (
    <span key={_id} className={"m-2 badge bg-" + color}>
      {name}
    </span>
  );
};

export default Quality;
