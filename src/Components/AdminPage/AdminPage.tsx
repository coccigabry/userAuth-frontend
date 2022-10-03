import React, { useEffect, useState, useContext } from 'react';
import mainStyles from '../CssGlobalStyles/main.module.css';
import styles from './AdminPage.module.css';
import axios, { AxiosResponse } from 'axios';
import { myContext } from '../../Context';
import { IUser } from '../../types/maintypes';


export default function AdminPage () {

  const ctx = useContext(myContext);

  const [data, setData] = useState<IUser[]>();
  const [selectedUser, setSelectedUser] = useState<string>();

  useEffect(() => {
    axios.get("http://localhost:4000/getallusers", {
      withCredentials: true
    }).then((res: AxiosResponse) => {
      setData(res.data.filter((item: IUser) => {
        return !item.isAdmin
      }));
    })
  }, [ctx]);
  if (!data) { return null}
  

  const deleteUser = () => {
    let userid : string;
    data.forEach((item: IUser) => {
      if (item.username === selectedUser) {
        userid = item.id;
      }
    });
    axios.post("http://localhost:4000/deleteuser", {
      id: userid!
    }, {
      withCredentials: true
    }).then((res: AxiosResponse) => {
      if (res.data === "success") {
        console.log("User successfully deleted");
        window.location.href = "/admin"
      }
    });
  };



  return (
    <div className={mainStyles.main}>
      <div className={styles.admin}>
        <div className={styles.adminContainer}>
          <h1>Admin Page</h1>
          <h3>Delete user panel</h3>
          <div className={styles.selContainer}>
            <select onChange={e => setSelectedUser(e.target.value)} name="deleteuser" id="deleteuser">
              <option id="select user">Select user</option>
                {
                  data.map((item: IUser) => {
                    return (
                      <option key={item.username} id={item.username}>{item.username}</option>
                    )
                  })
                }
            </select>
            <button onClick={deleteUser}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}
