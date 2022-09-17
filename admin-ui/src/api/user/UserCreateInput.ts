export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  profile?: string | null;
  roles: Array<string>;
  username: string;
};
