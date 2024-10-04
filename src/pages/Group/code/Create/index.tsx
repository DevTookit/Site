import React, { useRef, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CopyRounded from '@svg/icon_copy_rounded.svg?react';
import Breadcrumb from '@/shared/ui/group/BreadCrumb';
import useLayout from '@/shared/hooks/useLayout';
import SkillInput from '@/features/input/Skill';
import { IconType } from 'react-icons';

const CodeEditor: React.FC = () => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('// Your code here');
  const [skills, setSkills] = useState<
    { name: string; icon: IconType | undefined; color: string }[]
  >([]);
  const [language, setLanguage] = useState('javascript');
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const { data } = useLayout();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleScroll = () => {
    if (editorRef.current) {
      const scrollTop = editorRef.current.scrollTop;
      const preElement = document.querySelector('.custom-highlighter');
      if (preElement) {
        preElement.scrollTop = scrollTop;
      }
    }
  };

  const handleSave = () => {
    console.log(name);
  };

  const copyToClipboard = () => {
    if (editorRef.current) {
      editorRef.current.select();
      document.execCommand('copy'); // 구형 브라우저 호환
      alert('코드가 클립보드에 복사되었습니다!'); // 사용자에게 알림
    }
  };

  return (
    <div className="flex w-full flex-1 flex-col">
      <div className="mb-1 mt-6 flex justify-start">
        <Breadcrumb
          items={
            (data.currentRepository?.depth1 ?? '') +
            '|' +
            (data.currentRepository?.depth2 ?? '') +
            '|' +
            (data.currentRepository?.depth3 ?? '')
          }
        />
      </div>
      <h4 className="text-[32px] font-bold text-lighten-500">
        {data.currentRepository?.name}
      </h4>
      <input
        type="text"
        placeholder="제목을 입력해 주세요."
        onChange={(e) => setName(e.target.value)}
        className="mb-3 mt-6 h-12 w-full rounded-md border-2 border-solid border-primary bg-primary p-4 pl-0 text-[30px] text-lighten-600 placeholder:text-[30px] placeholder:text-lighten-300"
      />
      <input
        type="text"
        placeholder="캡션을 입력해 주세요."
        onChange={(e) => setName(e.target.value)}
        className="mb-6 h-5 w-full rounded-md border-2 border-solid border-primary bg-primary pl-0 text-base text-lighten-400 placeholder:text-lighten-300"
      />
      <div className="flex h-full w-full flex-col text-white">
        <div className="flex h-[52px] w-full justify-between rounded-t-md bg-lighten-100 px-6">
          <select
            onChange={handleLanguageChange}
            className="rounded-md bg-lighten-100 p-2 text-white"
          >
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
          <button className="flex items-center" onClick={copyToClipboard}>
            <CopyRounded />
            <span className="text-base text-lighten-500">코드 복사</span>
          </button>
        </div>
        <div className="relative h-[400px] w-full">
          {/* 하이라이팅된 코드 */}
          <SyntaxHighlighter
            language={language}
            style={atomDark}
            className="custom-highlighter pointer-events-none absolute left-0 top-0 m-0 h-full w-full p-4"
          >
            {code}
          </SyntaxHighlighter>
          <style>{`
          .custom-highlighter {
            background: #141315 !important;
            color: white !important; /* 텍스트 흰색 */
            padding: 16px !important; /* 인라인 패딩 제거 */
            margin:0 !important;
            font-size:14px !important;
            font-weight:400 !important;
            line-height:20px !important;
            letter-spacing: normar !important;
            font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
          }
        `}</style>

          {/* 입력 영역 */}
          <textarea
            ref={editorRef}
            value={code}
            onScroll={handleScroll}
            onChange={(e) => setCode(e.target.value)}
            className="absolute left-0 top-0 h-full w-full resize-none bg-transparent p-4 font-mono text-sm leading-[21px] text-transparent caret-white outline-none"
            rows={10}
          />
        </div>
        <SkillInput skills={skills} setSkills={setSkills} />
        <div className="flex justify-end">
          <button
            className="mb-5 mt-4 w-40 rounded bg-brand px-4 py-2 text-white"
            onClick={handleSave}
          >
            업로드
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
