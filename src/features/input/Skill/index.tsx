// SkillInput.tsx
import React, { useState } from 'react';
import { IconType } from 'react-icons'; // IconType import
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaAngular,
  FaVuejs,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaAws,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiKubernetes,
  SiRedis,
  SiSass,
  SiTailwindcss,
} from 'react-icons/si';

// 스킬 목록 정의
const predefinedSkills: { name: string; icon: IconType; color: string }[] = [
  { name: 'HTML5', icon: FaHtml5, color: 'text-red-500' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'JavaScript', icon: FaJsSquare, color: 'text-yellow-500' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
  { name: 'React', icon: FaReact, color: 'text-cyan-500' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Python', icon: FaPython, color: 'text-blue-300' },
  { name: 'Java', icon: FaJava, color: 'text-red-600' },
  { name: 'PHP', icon: FaPhp, color: 'text-indigo-500' },
  { name: 'Angular', icon: FaAngular, color: 'text-red-600' },
  { name: 'Vue.js', icon: FaVuejs, color: 'text-green-500' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
  { name: 'Linux', icon: FaLinux, color: 'text-black' },
  { name: 'AWS', icon: FaAws, color: 'text-orange-400' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-500' },
  { name: 'Redis', icon: SiRedis, color: 'text-red-600' },
  { name: 'Sass', icon: SiSass, color: 'text-pink-500' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Database', icon: FaDatabase, color: 'text-gray-600' },
  // 필요시 더 많은 기술 추가 가능
];

interface SkillInputProps {
  skills: { name: string; icon: IconType | undefined; color: string }[];
  setSkills: React.Dispatch<
    React.SetStateAction<
      { name: string; icon: IconType | undefined; color: string }[]
    >
  >;
}

const SkillInput: React.FC<SkillInputProps> = ({ skills, setSkills }) => {
  const [skillInput, setSkillInput] = useState('');
  const [filteredSkills, setFilteredSkills] = useState(predefinedSkills);

  const onKeyDownSkillAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      const skill = predefinedSkills.find(
        (s) => s.name.toLowerCase() === skillInput.trim().toLowerCase(),
      );
      if (skill) {
        handleAddSkill(skill);
      } else {
        if (!skills.find((s) => s.name === skillInput.trim())) {
          setSkills([
            ...skills,
            {
              name: skillInput.trim(),
              icon: undefined,
              color: 'text-gray-500',
            },
          ]);
        }
      }
      setSkillInput('');
      setFilteredSkills(predefinedSkills); // 추천 검색어 리셋
    }
  };

  const handleAddSkill = (skill: {
    name: string;
    icon: IconType;
    color: string;
  }) => {
    if (!skills.find((s) => s.name === skill.name)) {
      setSkills([...skills, skill]);
    }
    setSkillInput('');
    setFilteredSkills(predefinedSkills); // 추천 검색어 리셋
  };

  const onClickSkillRemove = (skillName: string) => {
    setSkills(skills.filter((s) => s.name !== skillName));
  };

  const onChangeSkillInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSkillInput(value);
    setFilteredSkills(
      predefinedSkills.filter((skill) =>
        skill.name.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  return (
    <div className="relative">
      <label className="hidden">나의 스킬</label>
      <input
        type="text"
        value={skillInput}
        onChange={onChangeSkillInputChange}
        onKeyDown={onKeyDownSkillAdd}
        placeholder="스킬 뱃지를 추가해 주세요."
        className="h-[40px] w-[559px] rounded-md border-2 border-solid border-lighten-100 bg-lighten-100 p-4 text-white placeholder:text-lighten-500"
      />
      {/* 추천 검색어 */}
      {skillInput && filteredSkills.length > 0 && (
        <div className="absolute flex max-w-[559px] flex-wrap gap-2 rounded-b-md border-2 border-t-0 border-solid border-lighten-100 bg-darken-100 p-2">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              onClick={() => handleAddSkill(skill)}
              className="flex cursor-pointer items-center space-x-2 rounded-full bg-lighten-100 px-3 py-1 text-lighten-500"
            >
              {skill.icon && <skill.icon className={skill.color} />}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      )}
      <div className="mt-2 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center space-x-2 rounded-full bg-lighten-100 px-3 py-1 text-lighten-500"
          >
            {skill.icon && <skill.icon className={skill.color} />}
            <span>{skill.name}</span>
            <button
              onClick={() => onClickSkillRemove(skill.name)}
              className="ml-1 text-white"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillInput;
