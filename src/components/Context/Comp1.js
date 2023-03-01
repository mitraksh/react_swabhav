import React, { createContext, useState, useReducer } from 'react'
import Comp2 from './Comp2';
import { inititalState } from '../Reduce';
export const UserContext =  createContext();

function Comp1() {
  const [user,setUser] = useState('Mitraksh');
  const changeUser = (e) => {
    setUser(e.target.value)
  }
  const userObj = {
    username: user,
    setUser: changeUser
  }
  // const [state,dispatch] = useReducer(reducer,inititalState);
  return (
    <UserContext.Provider value={userObj}>
   <div>Comp1</div>
   Count: {inititalState.count}
   <input value={user} onChange={(e) => setUser(e.target.value)}/>
   <Comp2></Comp2>
    </UserContext.Provider>
 
  )
}

export default Comp1