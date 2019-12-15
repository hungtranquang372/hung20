import React from 'react'
import Hero from '../Components/Hero'
export default function Error() {
    const hung = ['ha', 1, 1, 3, 'ha', 'thu', 2]
    const thi = new Set(hung)
    const ketqua = [...thi]
    const thu = hung.filter((item, index) =>
        hung.indexOf(item) === index
    )
    console.log(thu);
    return (
        <div>
            <Hero hero={"error"}>
            </Hero>
        </div>
    )
}
