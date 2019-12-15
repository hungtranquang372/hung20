import Hinh1 from './images/details-1.jpeg'
import Hinh2 from './images/details-2.jpeg'
import Hinh3 from './images/details-3.jpeg'
import Hinh4 from './images/room-4.jpeg'
import Hinh5 from './images/room-1.jpeg'
import Hinh6 from './images/room-2.jpeg'
import Hinh7 from './images/room-3.jpeg'
import Hinh8 from './images/room-4.jpeg'

export default [
    {
        hethong:{
            id:1
        },
        noidung:{
            name:"single economy",
            slug:"single-economy",
            price:100,
            featured:true,
            description:"duoc xem van nghe mien phi",
            images:[
                {
                    url:Hinh1
                },
                {
                    url:Hinh2
                },
                {
                    url:Hinh3
                },
            ]
        }
    },
    {
        hethong:{
            id:2
        },
        noidung:{
            name:"single economy",
            slug:"double-economy",
            price:100,
            featured:true,
            description:"duoc an sang mien phi",
            images:[
                {
                  url:Hinh4
                    
                },
                {
                    url:Hinh5
                },
                {
                    url:Hinh6
                },
            ]
        }
    }
]
