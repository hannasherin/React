import React from "react";
class Lifecycledemo extends React.Component {
    constructor() {
        super()
        this.state = { count: 0 }
        console.log('constructor')
    }
    componentDidMount() {
        console.log('component mounted');

    }
    componentDidUpdate() {
        console.log('component updated');

    }
    increament=()=>{
        this.setState({count : this.state.count +1})
    }

    render() {
        return (
            <>
                <h1>counter : {this.state.count}</h1>
                <button onClick={this.increament}>+</button>
            </>
        )
    }
}
export default Lifecycledemo