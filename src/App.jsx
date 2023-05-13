import { useState } from 'react';
import Editor from './components/Editor'

const CUSTOM_OPERATORS = [
  ["\\pm", "\\pm"],
  ["\\sqrt{x}", "\\sqrt"],
  ["\\sqrt[3]{x}", "\\sqrt[3]{}"],
  ["\\sqrt[n]{x}", "\\nthroot"],
  ["\\frac{x}{y}", "\\frac"],
  ["\\sum^{s}_{x}{d}", "\\sum"],
  ["\\prod^{s}_{x}{d}", "\\prod"],
  ["\\coprod^{s}_{x}{d}", "\\coprod"],
  ["\\int^{s}_{x}{d}", "\\int"],
  ["\\binom{n}{k}", "\\binom"]
];

function App() {
  const [operators, setOperators] = useState([]);
  const [displayHistory, setDisplayHistory] = useState(false);
  const [
    displayDeleteButtonOnHistory,
    setDisplayDeleteButtonOnHistory
  ] = useState(false);

  const toggleDisplayHistory = event => {
    setDisplayHistory(event.target.checked);
  };

  const toggleDisplayDeleteOnHistory = event => {
    setDisplayDeleteButtonOnHistory(event.target.checked);
  };

  const toggleOperators = event => {
    setOperators(event.target.checked ? CUSTOM_OPERATORS : []);
  };

  const options = { displayHistory, operators, displayDeleteButtonOnHistory };

  return (
    <main className="demo-container">
      <Editor options={options} key={JSON.stringify(options)} />

      <label>
        Use custom operator buttons:
        <input type="checkbox" className="option" onChange={toggleOperators} />
      </label>

      <label>
        Display formula history:
        <input
          type="checkbox"
          className="option"
          onChange={toggleDisplayHistory}
        />
      </label>
      <label>
        Display delete button on formula history:
        <input
          type="checkbox"
          className="option"
          onChange={toggleDisplayDeleteOnHistory}
        />
      </label>
    </main>
  );
}

export default App
