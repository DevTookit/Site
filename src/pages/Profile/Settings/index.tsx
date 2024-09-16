import React, { useState } from 'react';
import {
  FaCamera,
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
import { IconType } from 'react-icons'; // IconType import
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
const Profile = () => {
  const [job, setJob] = useState('');
  const [skills, setSkills] = useState<
    { name: string; icon: IconType | undefined; color: string }[]
  >([]);
  const [skillInput, setSkillInput] = useState('');
  const [filteredSkills, setFilteredSkills] = useState(predefinedSkills);
  const [profileImage, setProfileImage] = useState(
    '/src/shared/assets/img/default_profile.png',
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target?.result) {
          setProfileImage(event.target.result.toString());
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

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
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex">
        {/* 왼쪽 영역 */}
        <div className="flex h-[540px] w-[300px] flex-col items-center rounded-l-lg bg-lighten-500 p-8">
          <div className="relative h-[220px] w-[220px] overflow-hidden rounded-full">
            <img
              className="h-[220px] w-[220px] rounded-full object-cover"
              src={profileImage}
              alt="Profile"
            />
            {/* 카메라 아이콘 버튼 */}
            <label
              htmlFor="profileImageUpload"
              className="absolute bottom-[18px] left-1/2 flex h-[37px] w-[220px] -translate-x-1/2 translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-black"
            >
              <FaCamera className="text-xl text-white" />
              <input
                id="profileImageUpload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
          <h2 className="mt-4 text-center text-2xl">우영우</h2>
          <p className="mt-auto text-center text-lighten-300">
            Woo0woo@gamil.com
          </p>
        </div>

        {/* 오른쪽 영역 */}
        <div className="flex h-[540px] w-[680px] flex-col rounded-r-lg bg-lighten-100 p-[40px_30px_40px_80px]">
          <div className="mb-4 flex flex-1 flex-col">
            <span className="text-[32px] text-lighten-500">환영합니다!</span>
            <span className="text-[20px] text-lighten-400">
              데릭님을 위한 데브 툴킷이 준비되었습니다 :)
            </span>
          </div>
          <div>
            <div className="mb-4">
              <label className="mb-1 block text-lighten-500">직업</label>
              <input
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                placeholder="직업을 입력해주세요."
                className="h-[40px] w-[300px] rounded-md bg-lighten-500 p-2 text-white placeholder:text-lighten-600"
              />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-lighten-500">나의 스킬</label>
              <input
                type="text"
                value={skillInput}
                onChange={onChangeSkillInputChange}
                onKeyDown={onKeyDownSkillAdd}
                placeholder="개발 스택을 입력해주세요."
                className="h-[40px] w-[300px] rounded-md bg-lighten-500 p-2 text-white placeholder:text-lighten-600"
              />
              {/* 추천 검색어 */}
              {skillInput && filteredSkills.length && (
                <div className="absolute mt-2 flex max-w-[600px] flex-wrap gap-2 rounded-md bg-lighten-500 p-2">
                  {filteredSkills.map((skill) => (
                    <div
                      key={skill.name}
                      onClick={() => handleAddSkill(skill)}
                      className={`flex cursor-pointer items-center space-x-2 rounded-full bg-lighten-600 px-3 py-1 ${skill.color}`}
                    >
                      {skill.icon && <skill.icon />}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center space-x-2 rounded-full bg-lighten-600 px-3 py-1 ${skill.color}`}
                  >
                    {skill.icon && <skill.icon />}
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
            <div className="mt-10 flex items-center justify-end">
              <button className="hover:bg-brand-dark mt-auto h-[48px] w-[180px] rounded-md bg-brand text-white">
                그룹 생성하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
