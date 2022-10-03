import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import LoginPage from './Components/LoginPage/LoginPage';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import AdminPage from './Components/AdminPage/AdminPage';
import Profile from './Components/Profile/Profile';
import NavBar from './Components/NavBar/NavBar';
import { myContext } from './Context';


function App() {

  const ctx = useContext(myContext);

  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          {
            ctx ? (
              <>
              <Route path='/profile' element={<Profile />} />
              { ctx.isAdmin ? (<Route path='/admin' element={<AdminPage />} />) : null}
              </>
            ) : (
              <>
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              </>
            )
          }
        </Routes>
    </BrowserRouter>
  )
}


export default App;
