//this is an hook to get user's data from backend and make it accessible to frontend
import React, { createContext, PropsWithChildren, useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { IUser } from './types/maintypes';


export const myContext = createContext<Partial<IUser>>({})

export default function Context(props: PropsWithChildren<any>) {

  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    axios.get("http://localhost:4000/user", { withCredentials: true }).then((res: AxiosResponse) => {
      setUser (res.data);
    })
  }, [])
  
  return (
    <myContext.Provider value={user!}>{props.children}</myContext.Provider>
  );
}
