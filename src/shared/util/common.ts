function converterJson(data: any) {
  return JSON.parse(JSON.stringify(data));
}

function formatTimeAgo(timestamp: number) {
  const now = Date.now();
  const seconds = Math.floor((now - timestamp) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return `${seconds}초 전`;
  if (minutes < 60) return `${minutes}분 전`;
  if (hours < 24) return `${hours}시간 전`;
  return `${days}일 전`;
}

const findRepositoriesInCurrentCategory = (obj: any) => {
  const repositories: any = [];

  function traverse(currentObj: any) {
    // 객체가 배열일 경우
    if (Array.isArray(currentObj)) {
      currentObj.forEach((item) => traverse(item)); // 배열 요소를 재귀적으로 탐색
    }
    // 객체일 경우
    else if (typeof currentObj === 'object' && currentObj !== null) {
      // type이 "REPOSITORY"인 경우 리스트에 추가
      if (currentObj.type === 'REPOSITORY') {
        repositories.push(currentObj);
      }
      // 객체 내부를 재귀적으로 탐색
      Object.values(currentObj).forEach((value) => {
        traverse(value);
      });
    }
  }
  // 객체 탐색 시작
  traverse(obj);

  return repositories;
};

export { converterJson, formatTimeAgo, findRepositoriesInCurrentCategory };
