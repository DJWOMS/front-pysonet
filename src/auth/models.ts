export interface Login {
  username: string;
  password: string;
}

export interface Registration {
  username: string;
  password: string;
  email: string;
}

export interface Token {
  refresh: string;
  access: string;
}

export interface Verify {
  uid: string;
  token: string;
}
