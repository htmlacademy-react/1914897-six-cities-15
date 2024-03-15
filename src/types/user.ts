export type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};

export type TUserAuthorization = {
  email: string;
  password: string;
};

export type TUserHost = Pick<TUser, 'name' | 'avatarUrl' | 'isPro' >;
