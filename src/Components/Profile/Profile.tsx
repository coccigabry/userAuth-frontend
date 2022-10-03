import React, { useContext } from 'react';
import styles from './Profile.module.css';
import mainStyles from '../CssGlobalStyles/main.module.css';
import { myContext } from '../../Context';


export default function Profile() {

  const ctx = useContext(myContext);
  
  const time = new Date().toLocaleString();

  function LogMeth() {
    if (ctx.googleId) {
      return <h2>You logged in via Google</h2>
    } else if (ctx.facebookId) {
      return <h2>You logged in via Facebook</h2>
    } else {
      return <h2>You logged in locally</h2>                
    }
  };


  
  return (
    <div className={mainStyles.main}>
      <div className={styles.profile}>
        <div className={styles.profileContainer}>
          <h1>Welcome Back, {ctx.username}!</h1>
          <LogMeth />
          <br></br>
          <p>{ time }</p>
        </div>
      </div>
    </div>
  );
}
