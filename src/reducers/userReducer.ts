const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILED = 'FETCH_USER_FAILED';
const FETCH_USER = 'FETCH_USER';

const defaultState = {
  account: {
    email: '',
    id: '',
    name: '',
  },
  isFetchingUser: false,
};

const userReducer = (state: any = defaultState, action: any): any => {
  const { type, account } = action;

  Object.freeze(state);

  const newState = Object.assign({}, state);

  switch (type) {
    case FETCH_USER:
      return Object.assign({}, newState, { isFetchingUser: true });
    case FETCH_USER_SUCCESS:
      return Object.assign({}, newState, { account, isFetchingUser: false });
    case FETCH_USER_FAILED:
      return Object.assign({}, newState, { isFetchingUser: false });
    default:
      return newState;
  }
};

export default userReducer;
