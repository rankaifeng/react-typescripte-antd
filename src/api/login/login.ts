import { UserLogin } from '../../model/Login';

export const isValidLogin = (loginInfo: UserLogin): boolean =>
  loginInfo.userName === 'admin' && loginInfo.password === '123123';
