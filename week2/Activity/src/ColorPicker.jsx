import { useState } from "react";
import './ColorPicker.css'

function ColorPicker() {

    const [color, setColor] = useState("")

    return (
        <>
            <h1 className="text">Color Picker</h1>
            <div className="main">
                <div className="btn">
                    <button className="red" onClick={() => setColor('red')}>Red</button>
                    <button className="green" onClick={() => setColor('green')}>Green</button>
                    <button className="blue" onClick={() => setColor('blue')}>Blue</button>
                </div>
                <div className="box" style={{ backgroundColor: color }}>
                    {color ? color : '?'}
                </div>
            </div>
        </>
    )
}
export default ColorPicker;