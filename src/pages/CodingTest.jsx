import { useState } from "react";

import Editor from "@monaco-editor/react";

import { codingQuestions } from "../data/codingQuestions";

import "./CodingTest.css";

import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

export default function CodingTest() {
  const question = codingQuestions[0];

  const [code, setCode] = useState(question.starterCode);

  const [output, setOutput] = useState("");

  const [hasError, setHasError] = useState(false);

  const [showOutput, setShowOutput] = useState(false);

  // RUN CODE
  const handleRunCode = () => {
    // CHANGE TRUE/FALSE FOR TESTING
    const compilationError = false;

    if (compilationError) {
      setHasError(true);

      setOutput("");
    } else {
      setHasError(false);

      setOutput(`4`);
    }

    setShowOutput(true);
  };

  // SUBMIT CODE
  const handleSubmit = () => {
    alert("Code Submitted Successfully");
  };

  return (
    <div className="coding-page">
      {/* LEFT PANEL */}
      <div className="problem-panel">
        <div className="problem-header">
          <h2>{question.title}</h2>

          <div className="problem-tags">
            <span>{question.difficulty}</span>

            <span>Marks: {question.marks}</span>
          </div>
        </div>

        <div className="problem-description">
          <pre>{question.description}</pre>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="editor-panel">
        {/* TOP BAR */}
        <div className="editor-topbar">
          <div className="language-section">
            <span>Language :</span>

            <select className="language-dropdown">
              <option>Java</option>

              <option>Python</option>

              <option>JavaScript</option>
            </select>
          </div>
        </div>

        {/* CODE EDITOR */}
        <div className="editor-wrapper">
          <Editor
            height={showOutput ? "58vh" : "75vh"}
            defaultLanguage="java"
            value={code}
            onChange={(value) => setCode(value)}
            theme="vs-light"
          />
        </div>

        {/* OUTPUT PANEL */}
        <div
          className={`output-panel ${showOutput ? "expanded" : "collapsed"}`}
        >
          {/* OUTPUT TOP BAR */}
          <div className="output-topbar">
            {/* LEFT SIDE */}
            <div className="output-left">
              <div
                className="arrow-toggle"
                onClick={() => setShowOutput(!showOutput)}
              >
                {showOutput ? <SlArrowDown /> : <SlArrowUp />}
              </div>

              <label className="checkbox-label">
                <input type="checkbox" />
                Test against custom input
              </label>
            </div>

            {/* RIGHT SIDE */}
            <div className="editor-actions">
              <button className="run-button" onClick={handleRunCode}>
                Run Code
              </button>

              <button className="submit-button" onClick={handleSubmit}>
                Submit & Next
              </button>
            </div>
          </div>

          {/* OUTPUT CONTENT */}
          {showOutput && (
            <div className="output-content">
              {/* SHOW ERROR */}
              {hasError ? (
                <div className="error-section">
                  <h3>Compilation Error Message</h3>

                  <div className="error-box">
                    <pre>{`Solution.java:22: error: cannot find symbol

HashSet<Integer> set = new HashSet<>();

^

symbol:   class HashSet
location: class Solution`}</pre>
                  </div>
                </div>
              ) : (
                /* SHOW INPUT OUTPUT */
                <div className="io-section">
                  {/* INPUT */}
                  <div className="io-card">
                    <h3>Input</h3>

                    <div className="io-box">
                      <pre>6</pre>
                    </div>
                  </div>

                  {/* OUTPUT */}
                  <div className="io-card">
                    <h3>Your Output (stdout)</h3>

                    <div className="io-box">
                      <pre>{output}</pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
