'use client'

import styles from './card.module.scss';
import Image from "next/image";

type TProps = {
  description?: string
  isDescriptionHidden: boolean
  image: string
}
export default function Card ({description, isDescriptionHidden, image}: TProps) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image
          src={`/${image}`}
          alt='image'
          width={1980}
          height={1024}
        />
      </div>
      { description && <p
        className={isDescriptionHidden? styles.description_hidden : styles.description}
      >{description}</p> }
    </div>
  )
}