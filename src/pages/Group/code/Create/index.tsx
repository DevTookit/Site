import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import {
//   javascript,
//   python,
//   java,
//   php,
//   ruby,
//   css,
//   sql,
//   c,
//   cpp,
//   csharp,
//   go,
//   markdown,
//   html,
// } from 'react-syntax-highlighter/dist/esm/languages/prism';

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState('// Your code here');
  const [language, setLanguage] = useState('javascript');

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="editor-container">
      <select onChange={handleLanguageChange} className="language-select">
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="php">PHP</option>
        <option value="ruby">Ruby</option>
        <option value="css">CSS</option>
        <option value="html">HTML</option>
        <option value="sql">SQL</option>
        <option value="c">C</option>
        <option value="cpp">C++</option>
        <option value="csharp">C#</option>
        <option value="go">Go</option>
        <option value="markdown">Markdown</option>
      </select>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="code-input"
        rows={10}
        placeholder="Write your code here..."
      />
      <SyntaxHighlighter language={language} style={materialDark}>
        {code}
      </SyntaxHighlighter>
      <style>{`
        .editor-container {
          width: 100%;
          padding: 20px;
          background-color: #1e1e1e; /* 배경색을 검정색으로 설정 */
          color: white;
        }
        .language-select {
          margin-bottom: 10px;
          background: #2d2d2d;
          color: white;
          border: 1px solid #ccc;
          padding: 5px;
        }
        .code-input {
          width: 100%;
          background-color: #2d2d2d; /* 에디터 배경 검정색 */
          color: white; /* 텍스트 색상 */
          border: none;
          padding: 10px;
          font-family: monospace;
          font-size: 14px;
          margin-bottom: 20px;
          resize: none;
        }
      `}</style>
    </div>
  );
};

export default CodeEditor;
