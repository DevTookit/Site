import React, { useState, useEffect } from 'react';

interface ProgressBarProps {
  duration?: number; // 프로그레스 바가 100%까지 도달하는 시간 (ms)
}

const ProfileCreationProgress: React.FC<ProgressBarProps> = ({
  duration = 5000,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, duration / 100);

    return () => {
      clearInterval(interval);
    };
  }, [duration]);

  return (
    <div className="h-6 w-full rounded bg-gray-200">
      <div
        className="h-full rounded bg-blue-500 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProfileCreationProgress;
