export interface UserLogin {
  userName: string;
  password: string;
}

export const createEmptyLogin = (): UserLogin => ({
  userName: '',
  password: '',
});
