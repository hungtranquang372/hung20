import React, { Component } from 'react'
import { PhongContext } from '../context'

export default class Test extends Component {
    static contextType = PhongContext
    render() {

        // let { rooms } = this.context;
        // let tmp = '';
        // rooms.forEach(room => tmp = tmp === '' ? `${room}`  : `${tmp} , ${room}`)//id là so 1và 2,day la muon hthi 1,2

        // let { rooms } = this.context;//lay hinh truc tiep
        let {rooms}=this.context//lay hinh gian tiep
        rooms = rooms.map(item => item.map(image =>{ 
           
            
        return <img src={image} />}))
    
        return (
            <div>
                {rooms}
            </div>
        )
    }
}
