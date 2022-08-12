import { useState } from "react";
import "./css/Function.css";
function Function() {
  //useState to store data in state
  const [codeblock, setcode] = useState(""); //store if expression
  const [output, setOutput] = useState(""); //store output

  //function to handle main codeblock
  const handlecode = () => {
    const code = codeblock.split(" ");
    if (code[0] === "if") {
      const variable = code[2];
      const initval = Number(code[4]);
      const op = code[7];
      const opcond = Number(code[8]);
      const incdec = code[11];
      const val1 = code[14];
      const operator = code[15];
      const val2 = Number(code[16]);

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
    } else {
      const val1 = code[0];
      const val2 = code[2];
      const op = code[1];

      // eslint-disable-next-line default-case

      switch (op) {
        case "+":
          const sum = Number(val1) + Number(val2);
          setOutput(sum);
          break;
        case "-":
          const difference = Number(val1) - Number(val2);
          setOutput(difference);
          break;
        case "*":
          const multiple = Number(val1) * Number(val2);
          setOutput(multiple);
          break;
        case "/":
          const divide = Number(val1) / Number(val2);
          setOutput(divide);
          break;
        default:
          setOutput(val1);
      }
    }
  };
  return (
    <div className="container">
      <div className="content">
        <label>
          function{"()"}
          {"{"}
        </label>
        <br />
        <textarea
          rows="8"
          cols="50"
          type="text"
          id="ifexpr"
          value={codeblock}
          onChange={(e) => setcode(e.target.value)}
        />

        <label>{"}"}</label>

        <div className="else">
          <div className="output">
            <textarea
              disabled
              rows="8"
              cols="50"
              className="output"
              placeholder="Please hit Run to see the output here"
              value={output}
            >
              {/* {output} */}
            </textarea>
          </div>
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

export default Function;
