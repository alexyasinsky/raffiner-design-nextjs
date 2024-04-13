
import styles from './page.module.scss';
import Image from "next/image";
import oks from "../../../public/oks.jpeg";

export default function Contacts () {
  return (
    <div className={styles.page}>
      <h1 className={'title'}>Contacts</h1>
      <div className={styles.content}>
        <div className={styles.person}>
          <div className={styles.person__border}></div>
          <div className={styles.person__image}>
            <Image
              src={oks}
              alt='oks'
              height={651}
              priority
            />
          </div>
          <p>Ksy Art</p>
        </div>
        <div className={styles.details}>
          <p className={styles.catchPhrase}>
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
          <p className={styles.tel}>
            +7 456 456 99 88
          </p>
          <p className={styles.email}>
            ksyart@gmail.com
          </p>
        </div>
      </div>

    </div>
  )
}