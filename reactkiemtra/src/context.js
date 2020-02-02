import React, { Component } from 'react'
const RoomContext = React.createContext()

class RoomProvider extends Component {
    state = {
        name: "hung"
    }
    render() {
        return (
            <div>
                <RoomContext.Provider value={this.state}>
                    {this.props.children}
                </RoomContext.Provider>
            </div>
        )
    }m
}
export { RoomContext, RoomProvider }