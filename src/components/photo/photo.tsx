
import Image from "next/image";
import project1 from "../../../public/dining-room.jpeg";

import styles from './photo.module.scss';


type TProps = {
  size: 'small' | 'medium' | 'large' | 'extra-large' | 'card'
}
export default function Photo({size}: TProps) {

  return (
    <div className={styles[`wrapper_${size}`]}>
      <Image
        alt='project1'
        src={project1}
        priority={true}
      />
    </div>
  )
}