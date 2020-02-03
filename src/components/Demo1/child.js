import React from "react"
export default class Child extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.num === this.props.num) {
            return false
        } else {
            return true
        }
        
    }
    render() {
        console.log("child -> render")
        return (
            <div>
            Child: { this.props.num }
            </div>
        )
    }
}