import React, { useEffect, useState } from 'react'
import { Navigate, Route,  } from 'react-router-dom';
import {onAuthStateChanged} from 'firebase/auth'
import 'firebase/auth';
import Show from './components/show/Show';

export default function PrivateRoute({ element: Component, ...rest }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(user => {
          setUser(user);
        });
    
        return () => unsubscribe();
      }, []);
  return (
    <Route exact path="/" element={<Show/>}></Route>
    // <Route
    //   {...rest}
    //   render={props =>
    //     user ? (
    //       <Component {...props} />
    //     ) : (

    //     //  <Navigate to="/sreeja"></Navigate>
    //     <></>
    //     )
    //   }
    // />
  )
}
