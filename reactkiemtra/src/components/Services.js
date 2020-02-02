import React, { Component } from 'react'
import {FaBeer,FaHiking,FaShuttleVan,FaCocktail} from 'react-icons/fa'
export default class Service extends Component {
    state={
        services:[
            {
                icon:<FaBeer/>,
                title:"free drink",
                info:"Có đủ thuc uống giai khát"
            },
            {
                icon:<FaCocktail/>,
                title:"có trả tiền",
                info:"xoài,dua hấu,cheerries"
            },
            {
                icon:<FaHiking/>,
                title:"dạo mát",
                info:"bải biển,vưởn trái cây,công viên thú"
            },
            {
                icon:<FaShuttleVan/>,
                title:"miễn phí",
                info:"xe đời mới,giới hạn trong 10km"
            }
        ]
    }
    render() {
        const services=this.state.services
        const service=services.map((item,index)=>{
            return <article key={index}>{item.icon}
        <h4>{item.title}</h4>
        <h4>{item.info}</h4>
    </article>
        })
        return (
           
                <div>
{service}
                </div>
        )
    }
}
