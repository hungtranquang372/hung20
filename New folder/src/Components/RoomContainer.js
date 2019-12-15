import React from 'react'
import { PhongConsumer } from '../context'
import  {RoomFilter}  from '../Components/RoomFilter'
import  RoomList  from '../Components/RoomList'
export default function RoomContainer() {
    return (
        <div>
            <PhongConsumer>
                {value => {
                    console.log('value', value);
                    
                    const { rooms } = value
                    console.log("b",rooms);
                    if(rooms.length === 0) return ;
                    return (
                        <div>
                            <RoomFilter rooms={rooms} />
                            <RoomList rooms={rooms} />
                        </div>
                    )

                }}


            </PhongConsumer>

        </div>
    )
}
