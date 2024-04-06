import Image from "next/image";
import styles from './carousel.module.scss';
export default function Carousel() {
  return (
    <div className={styles.wrapper}>
      <Image
        alt='dining-room'
        src='/dining-room.jpeg'
        width={1020}
        height={1020}
        className={styles.image}
        priority={true}
      />

    </div>
  )
}