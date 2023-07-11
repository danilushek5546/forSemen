export type AuthType = {
  email: string;
  password: string;
};

export type UserType = {
  id: number;
  email: string;
  firstName: string | null;
  lastName: string | null;
};