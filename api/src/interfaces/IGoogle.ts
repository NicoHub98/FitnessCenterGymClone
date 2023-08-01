import { Request } from "express";

export interface Profile {
  id?: string;
  displayName: string;
  email: string;
  picture: string;
}

export interface ParamsAuth {
  req: Request;
  accessToken: string;
  refreshToken: undefined;
  profile: Profile;
  done: any;
}

export interface IGoogle {
  googleId?: string;
  name: string;
  photo: string;
  email: string;
}
