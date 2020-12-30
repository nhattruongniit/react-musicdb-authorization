import { IAppActionTypes } from 'models/IApp';

export const setLoading = (isLoading: boolean) => ({
  type: IAppActionTypes.SET_LOADING,
  payload: isLoading,
});

export const setDialog = (isShow: boolean, type: string = 'error', content: React.ReactNode = '') => ({
  type: IAppActionTypes.SET_DIALOG,
  payload: {
    type,
    isShow,
    content,
  },
});
