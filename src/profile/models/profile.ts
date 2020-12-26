export class EditProfile {
  username: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  phone: string;
  bio: string;
  github: string;
  birthday: string;
  gender: string;
  technology: Array<number>;
}

export class Profile extends EditProfile{
  avatar: string;
  email: string;
  date_joined: string;
  first_login: string;
}
