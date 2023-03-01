import React, { useContext } from 'react'
import { UserContext } from './Comp1'

function Comp3() {
    const user = useContext(UserContext);
  return (
<>
<div>Comp3</div>
    {user.username}
    <input />
</>
   
  )
}

export default Comp3