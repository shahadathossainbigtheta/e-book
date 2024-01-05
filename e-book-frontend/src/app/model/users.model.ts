export class Users {
  id?:number;
  username?:string;
  password?:string;
  authStatus?:string;


  constructor(id?: number, username?: string, password?: string, authStatus?: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.authStatus = authStatus;
  }
}
