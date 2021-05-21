import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {countPlus,countMinus} from '../actions'
import {Showpath} from './Showpath'

const useTax = (number)=>{
  const [num,setNum] = useState(number)
  const count =()=>{
    setNum(num*1.1)
  }
  return [num,count]
}

export const Counter = () => {
    const counter = useSelector(state=>state.counter.val)
    const dispatch = useDispatch()
    const [taxed,setTaxed] = useTax(counter)
    useEffect(()=>{
      setTaxed()
    },[taxed])
  return (
    <React.Fragment>
      <Showpath/>
      <p>現在の数字は{taxed}</p>
      <button onClick={(()=>dispatch(countPlus()))}>+1</button>
      <button onClick={(()=>dispatch(countMinus()))}>-1</button>
    </React.Fragment>
  );  
}
