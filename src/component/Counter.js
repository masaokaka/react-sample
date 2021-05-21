import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {countPlus,countMinus} from '../actions'

const countSelector = (state) => state.counter.val
export const Counter = () => {
    const counter = useSelector(countSelector)
    const dispatch = useDispatch()
  return (
    <React.Fragment>
        <p>現在の数字は{counter}</p>
        <button onClick={(()=>dispatch(countPlus))}>+1</button>
        <button onClick={(()=>dispatch(countMinus))}>-1</button>
    </React.Fragment>
  );  
}
