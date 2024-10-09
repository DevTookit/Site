export interface FolderData {
  parentFolderId: number;
  name: string;
}

export interface FolderResponse {
  id: number;
  name: string;
  attachments: [
    {
      name: string;
      id: number;
      extension: string;
      size: number;
      url: string;
      createdAt: number;
      lastModifiedDate: number;
    },
  ];
}
