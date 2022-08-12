import { useState } from "react";
import "./css/Loops.css";
function Loop() {
  //useState Hooks to store data in state
  const [codeblock, setcode] = useState(""); //store codeblock
  const [cond, setcond] = useState(""); //store loop condition
  const [output, setOutput] = useState([]); //store output

  //Global Variables
  var loop = cond.split(" "); //split input
  var variable = loop[0]; //extract variable
  var initval = Number(loop[2]); //extract initial value from input text
  var op = loop[5]; //extract operator
  var opcond = Number(loop[6]); //extract condition from loop
  var incdec = loop[9]; //extract increment decrement operator

  const handlecode = () => {
    //function to handle codeblock
    const code = codeblock.split(" "); //split the input
    const val1 = code[0]; //extract value from codeblock
    const operator = code[1]; //extract operator from codeblock
    const val2 = Number(code[2]); //extract second value from codeblock

    if (val1 === variable && operator !== "+") {
      if (incdec === "++") {
        // eslint-disable-next-line default-case
        switch (op) {
          case "<":
            for (let val1 = initval; val1 < opcond; val1++) {
              setOutput((oldArray) => [...oldArray, val1]);
            }
            break;
          case "<=":
            for (let val1 = initval; val1 <= opcond; val1++) {
              setOutput((oldArray) => [...oldArray, val1]);
            }
            break;
        }
      } else {
        for (let variable = Number(initval); variable < opcond; variable--) {
          setOutput((oldArray) => [...oldArray, val1]);
        }
      }
    } else {
      // eslint-disable-next-line default-case
      switch (operator) {
        case "+":
          // eslint-disable-next-line default-case
          switch (op) {
            case "<":
              for (let val1 = initval; val1 < opcond; val1++) {
                const sum = val1 + val2;
                setOutput((oldArray) => [...oldArray, sum]);
              }
              break;
            case "<=":
              for (let val1 = initval; val1 <= opcond; val1++) {
                const sum = val1 + val2;
                setOutput((oldArray) => [...oldArray, sum]);
              }
              break;
          }
          break;
        case "-":
          // eslint-disable-next-line default-case
          switch (op) {
            case "<":
              for (let val1 = initval; val1 < opcond; val1++) {
                const diff = val1.map((e) => e - val2);
                setOutput((oldArray) => [...oldArray, diff]);
              }
              break;
            case "<=":
              for (let val1 = initval; val1 <= opcond; val1++) {
                const dif = val1.map((e) => e - val2);
                setOutput((oldArray) => [...oldArray, dif]);
              }
              break;
          }
          break;
      }
    }
  };
  return (
    <div className="maincontainer">
      <div className="contentt">
        {/*For loop condition */}
        <div className="forcond">
          <label>
            for
            {"("}
          </label>
          <input
            type="text"
            id="loop"
            value={cond}
            onChange={(e) => setcond(e.target.value)}
          />{" "}
          <label>{")"}</label>
        </div>
        <br />

        {/*Codeblock*/}
        <label>{"{"}</label>
        <textarea
          rows="8"
          cols="50"
          type="text"
          id="codeblock"
          value={codeblock}
          onChange={(e) => setcode(e.target.value)}
        />
        <label>{"}"}</label>

        {/*Show output */}
        <div className="output">
          <textarea
            disabled
            rows="8"
            cols="50"
            className="output"
            placeholder="Please hit Run to see the output here"
            value={output}
          ></textarea>
        </div>

        <button
          className="run"
          onClick={() => {
            handlecode();
          }}
        >
          Run
        </button>
      </div>
    </div>
  );
}

export default Loop;
