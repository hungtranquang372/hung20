import React, { Component } from 'react'
import items from './data'
const BaiContext = React.createContext()
class BaiProvider extends Component {
    state = {
        rooms:[]
    }
    componentDidMount=()=>{
        let rooms= this.formatData(items)
        this.setState({
            rooms,
           
        })
    }
    formatData(items){ 
        let ptu =items.map(item=>{
            let id= item.hethong.id
            let images=item.noidung.images
            let room= {...item.noidung,id,images}
          return room
        })
         return ptu
    }
    render() {
        return (
           <BaiContext.Provider value={this.state}>
               {this.props.children}
           </BaiContext.Provider>
        )
    }
}
export { BaiContext, BaiProvider }