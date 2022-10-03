import React from 'react';
import styles from './Homepage.module.css';
import mainStyles from '../CssGlobalStyles/main.module.css';


export default function Homepage() {

  return (
    <div className={mainStyles.main}>
      <div className={styles.homepage}>
        <div className={styles.homeContainer}>
          <h1>Welcome To My Website</h1>
          <p>This is a dev-platform for testing auth methods</p>
          <p>You can register and login locally or from Google / FB</p>
        </div>
      </div>
    </div>
  )
}
