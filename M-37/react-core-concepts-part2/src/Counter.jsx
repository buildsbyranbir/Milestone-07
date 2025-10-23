// React theke useState import kora hoyeche
//karon useState diye component er moddhe state manage kora hoy
import { useState } from "react"

export default function Counter() {
    // useState(0) diye ekta state create kora hoyeche
    // count hocche variable ar setCount hocche tar update korar function
     const [count, setCount] = useState(0);
     
// handleAdd ekta function je count er value 1 kore baray
     const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
     }

    const counterStyle = {
        border: '2px solid yellow',
    }
    return (
        <div style={counterStyle}>
            <h3>Count:{count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}