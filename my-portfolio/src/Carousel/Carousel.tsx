import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { motion } from "framer-motion";
import img1 from "../Assets/img/cordel.png";
import img2 from "../Assets/img/mascote.png";
import img3 from "../Assets/img/social.png";

const imgs = [
  { src: img1, url: 'https://tuttitaka.github.io/projeto-android/', description: 'Projeto Cordel' },
  { src: img2, url: 'https://example.com/link2', description: 'Projeto Mascote' },
  { src: img3, url: 'https://example.com/link3', description: 'Projeto Social' }
];

export const Carousel: React.FC = () => {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <motion.div whileTap={{ cursor: "grabbing" }}>
      <S.WrapperCarousel ref={carousel}>
        <motion.div
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <S.Itens>
            {imgs.map((image, index) => (
              <S.Item key={index}>
                <img src= {image.src} alt="" />
                <a href={image.url} target="_blank" rel="noopener noreferrer">
                  <S.Description>{image.description}</S.Description>
                </a>
              </S.Item>
            ))}
          </S.Itens>
        </motion.div>
      </S.WrapperCarousel>
    </motion.div>
  );
};

export default Carousel;
