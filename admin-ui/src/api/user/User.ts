export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  profile: string | null;
  repscore: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
