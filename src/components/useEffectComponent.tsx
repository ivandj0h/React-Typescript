import { useEffect, useState } from "react"

function UseEffectComponent() {
    const [val, valSet] = useState(1)
    useEffect(() => {
        const timer = window.setInterval(() => {
            valSet(t => t + 1)
        }, 1000)

        return () => window.clearInterval(timer)
    }, [])

    return (
        <div><h1>{val}</h1></div>
    )
}

export default UseEffectComponent