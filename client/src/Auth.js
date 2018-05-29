import auth0 from "auth0-js";

export default class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: "mentor-match.auth0.com",
      clientID: "0c0CMnkcHLXaZtE00jggiRdbEcy2ZgF5",
      redirectUri: "http://localhost:3000/callback",
      audience: "https://mentor-match.auth0.com/userinfo",
      responseType: "token id_token",
      scope: "openid email"
    });

    this.login = this.login.bind(this);
  }

  login() {
    this.auth0.authorize();
  }
}
