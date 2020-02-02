import React, { Component } from 'react'
import {RoomContext} from '../context'
export default class Hung extends Component {
  
    static contextType=RoomContext
    render() {
        let {name}=this.context
       
        const mang = [{ sys: { id: 1 }, fiel: { price: 100, slug: "abc" }, image: [2, 3, 4, 8] },
    { sys: { id: 2 }, fiel: { price: 500, slug: "edf" }, image: [2, 5, 4, 9] },
     { sys: { id: 3 }, fiel: { price: 500, slug: "edf" }, image: [2, 5, 4, 9] }
    ]
    const arrays=mang.map(item=>{
      let id=item.sys.id
      let price=item.fiel.price
      let room={id,...item.fiel,image:item.image}//vi mang nen ko...ma phai cho no cai key
      return room
    })
 console.log(arrays);
 
    let a = [1,2,3];
    let b = a.map(item=>item+1)
    console.log(b);
    
   const  arr= arrays.map(array=>{
     console.log(array);
     
         return array
       }) 
    return (
            <div>
                <div className="form-group">
                  
                  <select className="form-control" name="" id="">
                    <option></option>
                    <option></option>
                    <option></option>
                  </select>
                </div>
            </div>
        )
    }
}
