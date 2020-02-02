import React from 'react'

import Hinh1 from '../images/details-1.jpeg'
export default function Error() {
    // const mang = [{ sys: { id: 1 }, fiel: { price: 100, slug: "abc" }, image: [2, 3, 4, 8] },
    // { sys: { id: 2 }, fiel: { price: 500, slug: "edf" }, image: [2, 5, 4, 9] }
    // ]
    // const array=mang.map((item)=>{
    //     let id=item.sys.id
    //     let price=item.fiel.price
    //     let room={...item.fiel,id,price}
    //     console.log(room);
        
    //     return room
    // })
    // const mang=[{price:100,slug:"abc",id:1},{price:500,slug:"edf",id:2}]
    // const aray=mang.map(item=>{
    //     let id=item.id
    //     console.log(id);
        
    //     return id
    // })
    
    return (
        <div className="error">
            <img src={Hinh1}/>
        </div>
    )
}
