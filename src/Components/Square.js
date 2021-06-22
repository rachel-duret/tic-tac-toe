import React from 'react'
import '../App.css'

function Square({val, chooseAquare}) {
    return (
        <div className="square" onClick={chooseAquare}>
            {val}
        </div>
    )
}

export default Square
