import { useState } from "react"

function UseStateComponent() {
    // for integer
    const [arr, arrSet] = useState<number[]>([])

    // for strings
    const [name, nameSet] = useState<string | null>(null)

    return (
        <div>
            <div>
                <button onClick={() => arrSet([...arr, arr.length * 3])}>Add to Array</button>
                {JSON.stringify(arr)}
            </div>

            <div>
                <button onClick={() => nameSet("Juna")}>Add Name</button>
                {JSON.stringify(name)}
            </div>
        </div>
    )
}

export default UseStateComponent