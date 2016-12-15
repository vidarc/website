import Auth0 from 'auth0-js'
import { isTokenExpired } from './jwtHelper'

export default class AuthService {
  constructor(clientId, domain) {
    // super()
    // Configure Auth0
    this.auth0 = new Auth0({
      clientID: clientId,
      domain: domain,
      responseType: 'token',
      callbackURL: `${window.location.origin}/login`
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
      this.auth0.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          console.log('Error loading the Profile', error)
        } else {
          this.setProfile(profile)
        }
      })
    }
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken()
    return !!token && !isTokenExpired(token)
  }

  setProfile(profile){
    // Saves profile data to localStorage
    localStorage.setItem('profile', JSON.stringify(profile))
    // Triggers profile_updated event to update the UI
    this.emit('profile_updated', profile)
  }

  getProfile(){
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  setToken(idToken){
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken)
  }

  getToken(){
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token')
  }

  logout(){
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }
}
