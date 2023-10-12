import React from "react";

function Test2({ item }) {
  return (
    <>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>
        <img src={item.imgURL} style={{ width: "200px" }} alt="" />
      </td>

      <td>{item.price}</td>
      <td>{item.sold}</td>
      <td>{item.price * item.sold}</td>
    </>
  );
}

export default Test2;
