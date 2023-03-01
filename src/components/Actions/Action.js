import React, { useReducer } from 'react'
import { inititalState,reducer } from '../Reduce';
function Action() {
    const [state,dispatch] = useReducer(reducer,inititalState);
  return (
    <>
    <div>Action</div>
    Count: {state.count}
    <button onClick={() => dispatch({type: 'increase'})}>
        +
    </button>

    <button onClick={() => dispatch({type: 'decrease'})}>
        -
    </button>
    </>  
    )
}

export default Action