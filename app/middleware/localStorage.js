import * as AuthenticationConstants from '../constants/authentication'

let saveAuthentication = (token) => {
  try {
    if (token.accessToken != null && token.client != null && token.expiry != null && token.type != null && token.uid != null) {
      const serializedToken = JSON.stringify(token);
      localStorage.setItem('token', serializedToken);
    }
  } catch (err) {
    console.error(err)
  }
}

export default store => next => action => {
  if (action.type == AuthenticationConstants.UPDATE_TOKEN) {
    saveAuthentication(action.payload.token)
  }
  return next(action)
}
