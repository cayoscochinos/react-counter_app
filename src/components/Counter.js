import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0)

    const onIncrement = () => {
        setCount(count + 1)
    }

    const onDecrement = () => {
        setCount(count - 1)
    }

    const onReset = () => {
        setCount(0)
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px',  justifyContent:"space-between" , border:"1px solid black" }}>
            <h1 style={{}}>Counter APP</h1>
            <p>Count: {count}</p>
            <button style={{margin:"5px"}} onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button style={{margin:"5px"}} onClick={onReset}>Reset</button>
        </div>
    )
}

export default Counter
