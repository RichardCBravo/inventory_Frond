// Generated by https://quicktype.io

export interface User {
  userId:           number;
  name:             string;
  age:              number;
  registrationDate: string;
  position:         Position;
}

export interface Position {
  positionId: number;
  name:       string;
}