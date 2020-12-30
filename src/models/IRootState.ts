import { IAppState } from './IApp';
import { IAuthState } from './IAuth';

type IRootState = {
  app: IAppState;
  auth: IAuthState;
};

export default IRootState;
