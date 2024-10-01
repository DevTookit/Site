export type GroupData = {
  name: string;
  description: string;
  isPublic: boolean;
  img: string;
};

export type GroupResponse = {
  id: number;
  name: string;
  img: string;
  description: string;
  isPublic: boolean;
  userCnt: number;
};

export type LogResponse = {
  id: number;
  writerName: string;
  writerId: number;
  writerImg: string;
  type: 'CODE | BOARD | FILE';
  createdAt: number;
  contentName: string;
  contentId: number;
  sectionId: number;
};
