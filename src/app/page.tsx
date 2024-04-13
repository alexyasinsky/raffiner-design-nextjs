import styles from './page.module.scss';
import Carousel from "@/components/carousel/carousel";
import Image from "next/image";
import oks from '../../public/oks.jpeg';
import room from '../../public/dining-room.jpeg'

export default function Home() {
  return (
    <div className={styles.page}>
      <Carousel/>
      <div className={styles.person}>
        <div className={styles.person__border}></div>
        <div className={styles.person__image}>
          <Image
            src={oks}
            alt='oks'
            height={300}
          />
        </div>
        <p>Ksy Art</p>
      </div>
      <div className={styles.catchPhrase_left}>
        <p>
          Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>
      </div>
      <div className={styles.catchPhrase_right}>
        <p>
          Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>
      </div>
      <div className={styles.room}>
        <div className={styles.room__border}></div>
        <div className={styles.room__image}>
          <Image
            src={room}
            alt='oks'
            height={300}
          />
        </div>
        <p>2024</p>
      </div>

    </div>


  );
}
