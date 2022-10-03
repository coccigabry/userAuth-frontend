import React, { useState } from 'react';
import googleLogo from '../../assets/googleLogo.png';
import facebookLogo from '../../assets/facebookLogo.png';
import styles from './LoginPage.module.css';
import mainStyles from '../CssGlobalStyles/main.module.css';
import axios, { AxiosResponse } from 'axios';


export default function LoginPage() {

  const googleLogin = () => {
    window.open("http://localhost:4000/auth/google", "_self");
    //in case above opens a new tab replace that with
    //window.location.href = "http://localhost:4000/auth/google";
  }

  const facebookLogin = () => {
    window.open("http://localhost:4000/auth/facebook", "_self");
    //in case above opens a new tab replace that with
    //window.location.href = "http://localhost:4000/auth/facebook";
  }

  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const login = () => {
    axios.post("http://localhost:4000/login", {
      username,
      password
    }, {
      withCredentials: true
    }).then((res: AxiosResponse) => {
      if (res.data === "success") {
        console.log("Successfully logged in. Redirecting to your personal page...");
        window.location.href = "/profile"
      };
    }, () => {
      console.log("Sorry, this user does not exists");
    })
  }


  return (
    <div className={mainStyles.main}>
      <div className={styles.loginPage}>
        <div className={styles.loginContainer}>
          <h1>Login</h1>
          <div className={`${styles.btnContainer} ${styles.googleBtn}`} onClick={googleLogin}>
            <img src={googleLogo} alt="google logo" />
            <p>Login with Google</p>
          </div>
          <div className={`${styles.btnContainer} ${styles.facebookBtn}`} onClick={facebookLogin}>
            <img src={facebookLogo} alt="facebook logo" />
            <p>Login with Facebook</p>
          </div>
          <p className={styles.textThrough}><span>or</span></p>
          <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} />
          <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
          <input type="submit" value="Login" onClick={login} />
          <p className={styles.textSignUp}>Not a member? <a href="/register"><strong>Sign up</strong></a></p>
        </div>
      </div>
    </div>
  );
}
