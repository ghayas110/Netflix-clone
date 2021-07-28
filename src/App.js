import React, { useEffect } from 'react'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import userSlice, { login, logout} from "./features/userSlice"
import ProfileScreen from './screens/ProfileScreen';




function App() {
  const user = useSelector(state  => userSlice)
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscrible = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscrible;
  }, [dispatch])
  return (
    <div className="app">

      <Router>
        {!user ? (

          <LoginScreen />

        ) :
          (
            <Switch>

              <Route exact path="/">
                <HomeScreen />
              </Route>
              <Route exact path="/profile">
                <ProfileScreen/>
          
              </Route>
            </Switch>
          )}



      </Router>

    </div>
  );
}

export default App;
