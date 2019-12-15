import React, { Component } from 'react'
import { BaiContext } from '../Thuchanhcontext'
export default class Bai extends Component {
    static contextType = BaiContext
    render() {
        let { rooms } = this.context
         rooms = rooms.map((room, index) => {
            console.log(room);
            return <tr key={index}>
                <th>{room.id}</th>
                <th>{room.name}</th>
                <th>{room.slug}</th>
            </tr>
           
            
        })
        return (
            <div>
                <table class="table">

                    <tbody>
                        <tr>
                            <td scope="row">ID</td>
                            <td>Name</td>
                            <td>Slug</td>
                            <td></td>
                        </tr>
                       {rooms}
                    </tbody>
                </table>
            </div>
        )
    }
}
