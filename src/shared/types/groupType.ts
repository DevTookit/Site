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
export type HotGroupResponse = {
  groupId: number;
  groupName: string;
  groupDescription: string;
  groupImg: string;
  groupUserCnt: number;
  groupCreator: number;
  groupCreatorName: string;
  groupCreatorImg: string;
  groupUserImgs: [
    {
      img: string;
      groupUserId: number;
    },
  ];
};

export type LogResponse = {
  creatorId: 10;
  creatorImg: 'https://d9fvxknq2fy2f.cloudfront.net/PROFILE/7213c3b9-affb-42ae-87ca-fe47e5ed4723.jpeg';
  creatorName: '우인우2';
  logs: Log[];
};
export type Log = {
  id: number;
  writerName: string;
  writerId: number;
  writerImg: string;
  type: string;
  createdAt: number;
  contentName: string;
  contentId: number;
  sectionId: number;
};
