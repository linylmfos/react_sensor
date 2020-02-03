import React from "react"
import Child from "./child"

const MyAPI = {
    count: 0,
    subscribe(cb) {
        this.intervalId = setInterval(() => {
            this.count +=1
            cb(this.count)
        }, 1000)
    },
    unSubscribe() {
        clearInterval(this.intervalId)
        this.reset();
    },
    reset() {
        this.count = 0;
    }
}

export default class Parent extends React.Component {

    state = {
        count: 0
    }

    componentDidMount() {
        MyAPI.subscribe((currentCount) => {
            this.setState({
                count: currentCount
            })
        })
    }

    componentWillUnmount() {
        MyAPI.unSubscribe()
    }
    render() {
        console.log(this.state.count);
        console.log("parent -> render")
        return (
            <div>
                Parent: {  this.state.count }
                <Child num={this.state.count} />
            </div>
        )
    }
}