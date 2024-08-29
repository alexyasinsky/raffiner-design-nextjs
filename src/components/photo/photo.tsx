'use client'
import Image from "next/image";

import styles from './photo.module.scss';
import {useEffect, useState} from "react";


type TProps = {
  size: 'small' | 'medium' | 'large' | 'extra-large' | 'card'
  image: string
}
export default function Photo({size, image}: TProps) {

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    switch (size) {
      case "small":
        setWidth(432);
        setHeight(369);
        break;
      case "medium":
        setWidth(500);
        setHeight(573);
        break;
      case "large":
        setWidth(500);
        setHeight(875);
        break;
      case "extra-large":
        setWidth(1780);
        setHeight(900);
        break;
      case "card":
        setWidth(875);
        setHeight(700);
        break;
    }
  }, [size]);


  return (
    <div className={styles[`wrapper_${size}`]}>
      <Image
        alt='project1'
        src={`/${image}`}
        width={width}
        height={height}
        priority
      />
    </div>
  )
}