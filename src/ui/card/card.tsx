import {ReactNode} from "react";

import styles from './card.module.scss';

type TProps = {
  children: ReactNode
}
export default function Card ({children}: TProps) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}