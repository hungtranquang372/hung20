import React, { Component } from 'react'
import items from './data'
const PhongContext = React.createContext()
class PhongProvider extends Component {
    state = {
        rooms: [],
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        type: 'all'
    }

    componentDidMount() {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

        let rooms = this.formatData(items)
        console.log('rooms', rooms);

        // let featuredRooms= rooms.filter(room=>room.featured===true)
        let maxPrice = Math.max(...rooms.map(room => room.price))
        this.setState({
            rooms,
            maxPrice
        })
    }

    formatData(items) {
        let ptu = items.map(item => {
            let id = item.hethong.id
            let images = item.noidung.images.map(image => <img src={image.url} />)
            let room = { ...item.noidung, id, images }
            return room
        })
        return ptu
        // }lay hinh truc tiep
        // let ptu =items.map(item=>{
        //   return item.noidung.images.map(item => item.url)
        // })
        // return ptu
    }
    handleChange = (e) => {
        console.log('eeeeeeeeeeeeeee');

        const name = e.target.name
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        },
            this.filterRooms
        )
    }
    render() {
        return (
            <div>
                <PhongContext.Provider value={{...this.state, handleChange: this.handleChange}}>
                    {this.props.children}
                </PhongContext.Provider>
            </div>
        )
    }
}
const PhongConsumer = PhongContext.Consumer;
export { PhongProvider, PhongContext, PhongConsumer }
