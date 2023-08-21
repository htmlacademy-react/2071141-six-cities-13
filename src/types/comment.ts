type CommentUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type CommentInfo = {
  id: string;
  date: string;
  user: CommentUser;
};

export type CommentAdd = {
  comment: string;
  rating: number;
};

export type Comment = CommentInfo | CommentAdd;
