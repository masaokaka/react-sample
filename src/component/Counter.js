import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {countPlus,countMinus} from '../actions'
import {Showpath} from './Showpath'

export const Counter = () => {
    const counter = useSelector(state=>state.counter.val)
    const dispatch = useDispatch()
  return (
    <React.Fragment>
      <Showpath/>
      <p>現在の数字は{counter}</p>
      <button onClick={(()=>dispatch(countPlus()))}>+1</button>
      <button onClick={(()=>dispatch(countMinus()))}>-1</button>
    </React.Fragment>
  );  
}
