const initialState = {
  data: null,
  isDoneOnboarding: false,
  token: null,
  profile: null,
};

const auth = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_ONBOARDING':
      return {
        ...state,
        isDoneOnboarding: true,
      };

    case 'SET_AUTH':
      return {
        ...state,
        token: action.payload,
      };

    case 'SET_DATA':
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
};

export default auth;
