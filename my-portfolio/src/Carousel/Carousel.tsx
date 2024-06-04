

import React, { useEffect, useRef, useState } from "react"
import * as S from "./styles"
import {motion} from "framer-motion"
import img1 from "../Assets/img/cordel.png"
import img2 from "../Assets/img/mascote.png"
import img3 from "../Assets/img/social.png"

const imgs = [img1, img2, img3]


export const Carousel: React.FC = () =>{
    const carousel = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0)


    useEffect(() => {
        if (carousel.current) {
            console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);


    return (
        <motion.div whileTap={{cursor: "grabbing"}}>
            <S.WrapperCarousel >
                <S.WrapperItens>
                    <motion.div drag ="x" dragConstraints ={{ right: 0, left: -width}}
                    initial= {{x:300}}
                    animate= {{x:0}}
                    transition={{duration : 0.9}}>
                        <S.Itens>
                            {imgs.map(image => (
                            <motion.div key={image}>
                                <img src= {image} alt="" />
                            </motion.div>
                        ))}
                        </S.Itens>
                    </motion.div>
                </S.WrapperItens>
            </S.WrapperCarousel>
        </motion.div>

    )


}