import { create } from 'zustand';

interface LoadingState {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

const useLoadingStore = create<LoadingState>((set) => {
  let timer: NodeJS.Timeout | null = null;
  let outTimer: NodeJS.Timeout | null = null;
  let startTime: number | null = null;

  return {
    isLoading: false,
    setLoading: (loading) => {
      if (loading) {
        set({ isLoading: true });
        startTime = Date.now(); // 로딩 시작 시간 기록
        clearTimeout(outTimer!); // 기존 타이머 초기화
        clearTimeout(timer!); // 기존 타이머 초기화
        // 5초가 지나면 로딩을 강제로 종료
        outTimer = setTimeout(() => {
          set({ isLoading: false });
          startTime = null; // 시작 시간 초기화
        }, 5000); // 5초 타임아웃
      } else {
        if (startTime) {
          const elapsedTime = Date.now() - startTime; // 경과 시간 계산
          const remainingTime = Math.max(500 - elapsedTime, 0); // 최소 0.5초 유지

          // 로딩이 최소 0.5초 유지되도록 대기
          timer = setTimeout(() => {
            set({ isLoading: false });
            startTime = null; // 시작 시간 초기화
          }, remainingTime);
        } else {
          set({ isLoading: false });
        }
      }
    },
  };
});

export default useLoadingStore;
