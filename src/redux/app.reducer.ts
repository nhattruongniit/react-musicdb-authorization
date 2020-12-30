import { IAppActionTypes, IAppActionCreator, IAppState } from 'models/IApp';

const initialState: IAppState = {
  isLoading: false,
  dialog: {
    type: 'error',
    isShow: false,
    content: '',
  },
};

const reducer = (state = initialState, { type, payload }: IAppActionCreator) => {
  switch (type) {
    case IAppActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case IAppActionTypes.SET_DIALOG:
      return {
        ...state,
        dialog: {
          type: payload.type,
          isShow: payload.isShow,
          content: payload.content,
        },
      };
    default:
      return state;
  }
};

export default reducer;
