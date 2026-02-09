export type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

export type RegisterFormErrors = {
  name?: string;
  email?: string;
  password?: string;
  api?: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type LoginFormErrors = {
  api?: string;
};

export type User = {
  id: string;
  email: string;
  name: string;
};
