import { useState } from "react";
import "./css/Ifelse.css";

function Ifelse() {
  const [ifcond, setifcond] = useState(""); //store if condition
  const [ifbool, setifbool] = useState(false); //boolean to check if the if condition is true
  const [ifexpr, setifexpr] = useState(""); //store if expression
  const [elseexpr, setelse] = useState(""); //store else expression

  const [output, setOutput] = useState("");
  const handleIf = () => {
    const ifcondition = ifcond.split(" ");
    const val1 = ifcondition[0];
    const val2 = ifcondition[2];
    const op = ifcondition[1];

    // eslint-disable-next-line default-case
    switch (op) {
      case "<":
        if (val1 < val2) {
          setifbool(true);
        }
        break;
      case ">":
        if (val1 > val2) {
          setifbool(true);
        }
        break;
      case "===":
        if (val1 === val2) {
          setifbool(true);
        }
        break;
      case "!==":
        if (val1 !== val2) {
          setifbool(true);
        }
        break;
    }
  };

  const handleIfexpr = () => {
    const ifexpre = ifexpr.split(" ");
    const val1 = ifexpre[0];
    const val2 = ifexpre[2];
    const op = ifexpre[1];

    // eslint-disable-next-line default-case
    if (ifbool === false) {
      console.log("work");
      switch (op) {
        case "+":
          const sum = Number(val1) + Number(val2);
          setOutput(sum);
          break;
        case "-":
          const difference = Number(val1) - Number(val2);
          setOutput(difference);
          break;
        default:
          setOutput(val1);
      }
    }
  };
  const handleelse = () => {
    const elseexp = elseexpr.split(" ");
    const val1 = elseexp[0];
    const val2 = elseexp[2];
    const op = elseexp[1];

    // eslint-disable-next-line default-case
    if (ifbool === true) {
      console.log("work");
      switch (op) {
        case "+":
          const sum = Number(val1) + Number(val2);
          setOutput(sum);
          break;
        case "-":
          const difference = Number(val1) - Number(val2);
          setOutput(difference);
          break;
        default:
          setOutput(val1);
      }
    }
  };

  return (
    <div className="ifcontainer">
      <div className="ifcontent">
        <div className="if">
          <label>If(</label>
          <input
            type="text"
            id="ifcond"
            value={ifcond}
            onChange={(e) => setifcond(e.target.value)}
          />
          <label>)</label>

          <br />
          <br />
          <label>{"{"}</label>
          <br />
          <textarea
            rows="8"
            cols="50"
            type="text"
            id="ifexpr"
            value={ifexpr}
            onChange={(e) => setifexpr(e.target.value)}
          />

          <label>{"}"}</label>
        </div>
        <div className="else">
          <label>else{"{"}</label>
          <br />
          <textarea
            type="text"
            id="ifexpr"
            rows="8"
            cols="50"
            value={elseexpr}
            onChange={(e) => setelse(e.target.value)}
          />

          <label>{"}"}</label>

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
            handleIf();
            handleIfexpr();
            handleelse();
          }}
        >
          Run
        </button>
      </div>
    </div>
  );
}

export default Ifelse;
