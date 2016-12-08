import Auth0 from 'auth0-js'
import { isTokenExpired } from './jwtHelper'

export default class AuthService {
  constructor(clientId, domain) {
    // super()
    // Configure Auth0
    this.auth0 = new Auth0({
      clientID: clientId,
      domain: domain,
      responseType: 'token'
    });

    this.login = this.login.bind(this)
    this.signup = this.signup.bind(this)
  }

  login(params, onError) {
    //redirects the call to auth0 instance
    this.auth0.login(params, onError)
  }

  signup(params, onError) {
    //redirects the call to auth0 instance
    this.auth0.signup(params, onError)
  }

  parseHash(hash) {
    // uses auth0 parseHash method to extract data from url hash
    const authResult = this.auth0.parseHash(hash)
    if (authResult && authResult.idToken) {
      this.setToken(authResult.idToken)
    }
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken()
    return !!token && !isTokenExpired(token)
  }

  setToken(idToken) {
    // Saves user token to local storage
    localStorage.setItem('id_token', idToken)
  }

  getToken() {
    // Retrieves the user token from local storage
    return localStorage.getItem('id_token')
  }

  logout() {
    // Clear user token and profile data from local storage
    localStorage.removeItem('id_token');
  }
}
