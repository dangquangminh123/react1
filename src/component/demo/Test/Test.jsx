import React, { useState } from "react";
import Test1 from "./Test1";
import useTest from "../customHook/useTest";
// import PropTypes from 'prop-types';

// Test.propTypes = {

// };


function Test() {
  const [name, setName] = useState("abc");

  const [age, setAge] = useState(22);
  const [address, setAddress] = useState({
    diachi: "dia chi",
    phuong: {
      tenphuong: "Tan Phu",
      tenphuong1: "Tan Phu 1",
      tenphuong3: "Tan Phu 2",
      tenphuong2: "Tan Phu 3",
    },
  });
  const tangage = () => {
    setAge((prevAge) => prevAge + 1);
  };
  const doiten1 = () => {
    setName("doiten1");
  };
  function doiten2() {
    setName("doiten2");
  }
  const doidiachi = () => {
    setAddress((prev) => {
      return {
        ...prev,
        diachi: "dia chi mới",
      };
    });
  };
  const doitenphuong = () => {
    setAddress((prev) => {
      const newAddress = { ...prev.phuong };
      newAddress.tenphuong = "ten phuong moi";
      return {
        ...prev,
        phuong: newAddress,
      };
    });
  };
  const { list, loading } = useTest(age);

  console.log("hello");

  return (
    <div>
      <>
        <h1>Funciton</h1>
        <h1>tui ten la {name}</h1>
        <h1>tui {age} tuoi</h1>
        <h1>dia chi {address.diachi}</h1>
        <h1>dia chi {address.phuong.tenphuong}</h1>
        <h1>dia chi 2 {address.phuong.tenphuong2}</h1>
        <h1>dia chi 3{address.phuong.tenphuong3}</h1>
        <button onClick={tangage}>tang tuoi</button>
        <button onClick={doiten1}>doi ten 1</button>
        <button onClick={doiten2}>doi ten 2</button>
        <button onClick={doidiachi}>doi dia chi</button>
        <button onClick={doitenphuong}>doi ten phuong</button>
        {loading ?<h1>loading</h1>: <Test1  list={list}></Test1> }
        {loading ?<h1>loading</h1>: <Test1 hello list={list}></Test1> }

      </>
    </div>
  );
}

export default Test;
