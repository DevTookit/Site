import React, { useState, useEffect, useRef } from 'react';
// import Prism from 'prismjs';
// import 'prismjs/themes/prism.css';

// // Importing a wide range of Prism languages
// import 'prismjs/components/prism-javascript';
// import 'prismjs/components/prism-python';
// import 'prismjs/components/prism-c';
// import 'prismjs/components/prism-cpp';
// import 'prismjs/components/prism-java';
// import 'prismjs/components/prism-go';
// import 'prismjs/components/prism-ruby';
// import 'prismjs/components/prism-markup-templating'; // PHP 관련 템플릿 처리 플러그인
// import 'prismjs/components/prism-php';
// import 'prismjs/components/prism-rust';
// import 'prismjs/components/prism-swift';
// import 'prismjs/components/prism-typescript';
// import 'prismjs/components/prism-css';
// import 'prismjs/components/prism-haml';
// import 'prismjs/components/prism-sql';
// import 'prismjs/components/prism-bash';
// import 'prismjs/components/prism-json';
// import 'prismjs/components/prism-yaml';
// import 'prismjs/components/prism-kotlin';
// import 'prismjs/components/prism-dart';
// import 'prismjs/components/prism-lua';
// import 'prismjs/components/prism-perl';
// import 'prismjs/components/prism-scala';
// import 'prismjs/components/prism-r';
// import 'prismjs/components/prism-haskell';
// import 'prismjs/components/prism-elixir';
// import 'prismjs/components/prism-markdown';
// import 'prismjs/components/prism-v';
// import 'prismjs/components/prism-docker';
// import 'prismjs/components/prism-graphql';

// Languages array
const languages = [
  'javascript',
  'typescript',
  'python',
  'c',
  'cpp',
  'java',
  'go',
  'ruby',
  'php',
  'rust',
  'swift',
  'css',
  'haml',
  'sql',
  'bash',
  'json',
  'yaml',
  'kotlin',
  'dart',
  'lua',
  'perl',
  'scala',
  'r',
  'haskell',
  'elixir',
  'markdown',
  'v',
  'docker',
  'graphql',
];

const CodeEditor = () => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('// Start typing your code here...');
  const codeRef = useRef<HTMLPreElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Prism.highlightAll(); // Highlighting the code on language change or code change
    // Synchronize the height of the pre and textarea
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto'; // Reset height
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Set to scrollHeight
    }
  }, [language, code]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  return (
    <div className="flex h-full w-full flex-col p-4">
      {/* Language Selector */}
      <label htmlFor="language-select" className="mb-2 block text-lg">
        Choose Language:
      </label>
      <select
        id="language-select"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="mb-4 rounded border p-2"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>

      {/* Code Editor with real-time highlighting */}
      <div className="relative h-full pb-20">
        {/* Overlay to display the highlighted code */}
        <pre
          ref={codeRef}
          className={`language-${language} absolute inset-0 z-0 mt-0 overflow-auto p-2`}
          style={{
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            marginTop: '0px',
            fontFamily: 'monospace', // Use a monospace font for both elements
            fontSize: '16px', // Match font size
            lineHeight: '1.5', // Adjust line height for better alignment
            letterSpacing: '0.5px', // Match letter spacing
          }}
        >
          <code className={`language-${language}`}>{code}</code>
        </pre>

        {/* Hidden textarea to capture input */}
        <textarea
          ref={textAreaRef}
          value={code}
          onChange={handleInput}
          className="absolute inset-0 z-10 w-full resize-none border-none bg-darken-300 p-4 text-base outline-none"
          style={{
            color: 'transparent',
            caretColor: 'black',
            fontFamily: 'monospace', // Use a monospace font for both elements
            fontSize: '16px', // Match font size
            lineHeight: '1.5', // Match line height with pre
            letterSpacing: '0.5px', // Match letter spacing
          }}
          spellCheck={false}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
