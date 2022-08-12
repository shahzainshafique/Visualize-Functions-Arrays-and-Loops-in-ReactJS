import { useState } from "react";
import "./css/array.css";

function Arrays() {
  //useState hook to store data
  const array = [""]; //empty array
  const [arr, setarr] = useState(array); //store array given as input
  const [push, setpush] = useState(""); //store values to be pushed into the array
  const [length, setlength] = useState(""); //store length of the array
  const [index, setindex] = useState(""); //store the calculated index of the array
  const [map, setmap] = useState(""); //store the values to be mapped into the array

  //function to handle push operation
  const handlepush = () => {
    setarr((oldarray) => [...oldarray, push]);
  };

  //function to handle pop operation
  const handlepop = () => {
    setarr((old) => [...old].slice(0, -1));
  };

  //function to calculate length of the array
  const calclength = () => {
    const len = arr.length;
    setlength(len);
  };

  //function to handle map operation of the array
  const handlemap = () => {
    const op = map[0]; //extract operator
    const val = Number(map[1]); //extract the number to be mapped
    // eslint-disable-next-line default-case
    switch (
      op //switch case to perform operations based on given operator
    ) {
      case "+":
        setarr((old) => [...old].map((e) => Number(e) + val));
        break;
      case "-":
        setarr((old) => [...old].map((e) => Number(e) - val));
        break;
      case "*":
        setarr((old) => [...old].map((e) => Number(e) * val));
        break;
      case "/":
        setarr((old) => [...old].map((e) => Number(e) / val));
        break;
    }
  };

  //function to calculate index of the array
  const calcindex = () => {
    const calcindex = arr.indexOf(index);
    setarr(calcindex);
  };

  //function to clear all the input fields
  const handleclear = () => {
    setarr([]);
    setpush([]);
    setlength("");
    setmap([]);
    setindex("");
  };
  return (
    <div className="fullcontainer">
      <div className="fullcontent">
        <div className="array">
          <label id="top-label">const array = {"["}</label>

          {/*Take array input*/}
          <input
            type="text"
            id="arr"
            value={arr}
            onChange={(e) => setarr(e.target.value)}
          />

          <label>{"]"}</label>

          <button className="arr-btn-clr" onClick={handleclear}>
            Clear
          </button>

          {/*Perform push operation on array */}
          <div className="push">
            <button
              className="arr-btn"
              onClick={() => {
                handlepush();
              }}
            >
              Push
            </button>
            <input
              type="text"
              id="arr"
              value={push}
              onChange={(e) => setpush(e.target.value)}
            />
            <br />
          </div>

          {/*Perform pop operation  */}
          <div className="pop">
            <button
              className="arr-btn"
              onClick={() => {
                handlepop();
              }}
            >
              Pop
            </button>

            <br />
          </div>

          {/*Calculate length of the array*/}
          <div className="length">
            <button
              className="arr-btn"
              onClick={() => {
                calclength();
              }}
            >
              Length
            </button>
            <input
              type="text"
              id="arr"
              value={length}
              onChange={(e) => setlength(e.target.value)}
            />
            <br />
          </div>

          {/*Perform .map() operation on array */}
          <div className="map">
            <button
              className="arr-btn"
              onClick={() => {
                handlemap();
              }}
            >
              Map
            </button>
            <input
              type="text"
              id="arr"
              value={map}
              onChange={(e) => setmap(e.target.value)}
            />
            <br />
          </div>

          {/*Calculate index of the array */}
          <div className="index">
            <button
              className="arr-btn"
              onClick={() => {
                calcindex();
              }}
            >
              IndexOf
            </button>
            <input
              type="text"
              id="arr"
              value={index}
              onChange={(e) => setindex(e.target.value)}
            />
            <br />
          </div>

          {/*Textarea to display output */}
          <textarea
            disabled
            rows="8"
            cols="50"
            className="op"
            placeholder="Output is displayed here"
            value={arr}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Arrays;
