import styles from './grid.module.scss';
import {ReactNode} from "react";

type TProps = {
  children: ReactNode
}
export default function Grid ({children}: TProps) {

  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}