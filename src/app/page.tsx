import styles from './page.module.scss';
import Image from "next/image";
import oks from '../../public/oks.jpeg';
import room from '../../public/dining-room.jpeg'
import Navigation from "@/ui/navigation/navigation";

export default function Home() {

  const pages = [
    {
      title: 'Проекты',
      href: '/projects'
    },
    {
      title: 'Услуги',
      href: '/services'
    },
    {
      title: 'Контакты',
      href: '/contacts'
    },
  ]

  return (
    <>
      <div className={styles.banner__container}>
        <Image
          alt='dining-room'
          src='/dining-room.jpeg'
          fill={true}
          className={styles.banner}
          priority={true}
        />
        <div className={styles.menu}>
          <Navigation pages={pages} direction="column"/>
        </div>

      </div>
      <div className={`${styles.content} margin-site page__content`}>
        <div className={`${styles.row}`}>
          <div className={`${styles.catchPhrase} ${styles.catchPhrase_right}`}>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
          </div>
          <div className={styles.person}>
            <div className={styles.person__border}></div>
            <div className={styles.person__image}>
              <Image
                src={oks}
                alt='oks'
                height={300}
              />
            </div>
            <p className={styles.name}>Ksy Art</p>
          </div>
        </div>
        <div className={`${styles.row}`}>
          <div className={styles.room}>
            <div className={styles.room__border}></div>
            <div className={styles.room__image}>
              <Image
                src={room}
                alt='oks'
                height={300}
              />
            </div>
            <p className={styles.year}>2024</p>
          </div>
          <div className={`${styles.catchPhrase} ${styles.catchPhrase_left}`}>
            <p>
              Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
          </div>

        </div>

      </div>


    </>


  );
}
