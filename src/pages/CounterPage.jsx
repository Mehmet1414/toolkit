import { useDispatch, useSelector } from "react-redux"
import { decrease, increase, setCount } from "../app/counterSlice"

import { Button, ButtonGroup } from "react-bootstrap"

const CounterPage = () => {
    const state = useSelector((store)=> store.counterReducer)
    const dispatch = useDispatch()
  return (
    <>
        <h1>{state.counter}</h1>
        <ButtonGroup>
        <Button variant="success" onClick={()=> dispatch(decrease())}>-</Button>
        <Button variant="warning" onClick={()=>dispatch(setCount(0))}>Clear</Button>
        <Button variant="success"  onClick={()=> dispatch(increase())}>+</Button>
        </ButtonGroup>
    </>
  )
}

export default CounterPage