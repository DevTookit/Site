import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProgressBarProps {
  duration?: number; // 프로그레스 바가 100%까지 도달하는 시간 (ms)
}

const CreationProgress: React.FC<ProgressBarProps> = ({ duration = 3000 }) => {
  const navigate = useNavigate();
  const progressRef = useRef<HTMLDivElement>(null);
  const [progressPer, setProgressPer] = useState(0);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const startTime = performance.now();

    const updateProgress = (timestamp: number) => {
      const elapsedTime = timestamp - startTime;
      const nextProgress = Math.min((elapsedTime / duration) * 100, 100);

      if (progressRef.current) {
        progressRef.current.style.width = `${nextProgress}%`;
      }
      setProgressPer(Math.floor(nextProgress));

      if (nextProgress < 100) {
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          navigate('/group');
        }, 1000);
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [duration]);

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-10 text-[32px] text-lighten-500">Loading...</p>
      <div className="relative mb-[20px] h-[60px] w-[560px] rounded border-[1px] border-solid border-lighten-400 bg-darken-100">
        <div
          id="progress_bar"
          ref={progressRef}
          className="h-full rounded bg-gradient-to-r from-[#2C41EB] to-[#D2D3D3] transition-all duration-100"
        ></div>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl text-lighten-600">
          {progressPer}%
        </span>
      </div>
      <p className="text-base text-lighten-500">영우님의 프로필 생성중</p>
    </div>
  );
};

export default CreationProgress;
