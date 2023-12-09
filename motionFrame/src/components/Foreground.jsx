import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: "Framer Motion is a powerful motion library. It powers the amazing animations.",
            filesize: ".3mb",
            close: false,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
            imgUrl: "https://banner2.cleanpng.com/20180626/kqq/kisspng-d3-js-react-javascript-library-document-object-mod-react-5b32c62c7f3549.6684554115300541885211.jpg"
        },
        {
            desc: "This is the background color of the card that will be displayed.",
            filesize: ".9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
            imgUrl: "https://icon2.cleanpng.com/20180329/qge/kisspng-software-developer-computer-icons-programmer-web-d-coder-5abc70fec3bea0.5908149315222991348018.jpg",
        },
        {
            desc: "This is the background color of the card that will be displayed.",
            filesize: ".9mb",
            close: true,
            tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green"},
            imgUrl: "https://icon2.cleanpng.com/20180404/owe/kisspng-computer-icons-source-code-computer-programming-coder-5ac4e3d8ca71d9.9249053115228528248292.jpg"
        },
    ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index) => (
            <Card data={item} reference={ref} />
        ))}
    </div>
  )
}

export default Foreground