export const isDoneOnboarding = () => ({
  type: 'SET_ONBOARDING',
});

export const setAuth = (token: string) => ({
  type: 'SET_AUTH',
  payload: token,
});

export const setProfile = (data: object) => ({
  type: 'SET_DATA',
  payload: data,
});
