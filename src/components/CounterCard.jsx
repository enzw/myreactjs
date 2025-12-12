import { useState } from "react";
import PropTypes from "prop-types"

const CounterCard = ({ title, start }) => {
    const [count, setCount] = useState(start);

    return (
        <div style={{
            padding: "16px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            width: "200px",
            margin: "10px"
        }}>
            <h3>{title}</h3>
            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>
                +
            </button>

            <button onClick={() => { if (count > 0) { setCount(count - 1) } }}>
                -
            </button>
        </div>
    )
}

CounterCard.propType = {
    title: PropTypes.string.isRequired,
    start: PropTypes.number.isRequired
}

CounterCard.defaultProps = {
    start: 0
}

export { CounterCard }