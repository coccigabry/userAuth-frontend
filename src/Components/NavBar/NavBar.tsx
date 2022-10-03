import React, { useContext } from 'react';
import styles from './NavBar.module.css';
import { Link } from "react-router-dom";
import axios, { AxiosResponse } from 'axios';
import { myContext } from '../../Context';


export default function NavBar() {

  const ctx = useContext(myContext);

  const logout = () => {
    axios.get("http://localhost:4000/logout", {
      withCredentials: true
    }).then((res: AxiosResponse) => {
      if (res.data === "done") {
        window.location.href = "/"
      };
    });
  };

  return (
    <div className={styles.navbarWrapper}>
      <ul className={styles.navbar}>
        <li><Link to='/'>Home</Link></li>
        {
          ctx ? (
            <>
            <li><Link to='/profile'>Profile</Link></li>
            { ctx.isAdmin ? (<li><Link to='/admin'>Admin</Link></li>) : null }
            <li onClick={logout}>Logout</li>
            </>
          ) : (
            <>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
            </>
          )
        }
      </ul>
    </div>
  );
}
