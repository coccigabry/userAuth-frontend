import React, { useState } from 'react';
import styles from '../LoginPage/LoginPage.module.css';
import mainStyles from '../CssGlobalStyles/main.module.css';
import axios, { AxiosResponse } from 'axios';


export default function RegisterPage() {

  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const register = () => {
    axios.post("http://localhost:4000/register", {
      username,
      password
    }, {
      withCredentials: true
    }).then((res: AxiosResponse) => {
      if (res.data === "success") {
        window.location.href = "/login"
        console.log("New user saved correctly. Redirecting to login page...")
      };
    })
  }


  return (
    <div className={mainStyles.main}>
      <div className={styles.loginPage}>
        <div className={styles.loginContainer}>
          <h1>New User Registration</h1>
          <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} />
          <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
          <input type="submit" value="Sign up" onClick={register} />
        </div>
      </div>
    </div>
  );
}
