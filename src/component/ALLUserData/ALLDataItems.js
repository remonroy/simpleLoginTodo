import React from "react";
import profile from "../../img/Profile.png";
const ALLDataItems = ({ items }) => {
  const { attendance, name, position } = items || {};

  return (
    <div>
      <p>
        <img src={profile} alt="" />
      </p>
      <p>{name}</p>
      <p>{position}</p>
    </div>
  );
};

export default ALLDataItems;
