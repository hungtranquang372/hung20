import React, { Component } from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import Test from '../Components/Test'
// import Bai from '../Components/Bai'
import Functioncontext from '../Components/Functioncontext'
import RoomContainer from '../Components/RoomContainer'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Hero hero={"vo"}>
                    <Banner title={"Gia Dinh Hung Du Lich Han quoc"}
                            subtitle={"nam 2014"}
                    >
                    </Banner>
                </Hero>
                {/* <Test/> */}
                {/* <Bai/> */}
                <Functioncontext/>
                <RoomContainer/>
            </div>
        )
    }
}
