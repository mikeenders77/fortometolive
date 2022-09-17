export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  profile?: string | null;
  roles?: Array<string>;
  username?: string;
};
