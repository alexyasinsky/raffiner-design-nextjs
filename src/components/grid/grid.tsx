import styles from './grid.module.scss';
import {ReactNode} from "react";

type TProps = {
  contents: 'photos' | 'cards'
  children: ReactNode
}
export default function Grid ({contents, children}: TProps) {

  return (
    <div className={styles[`wrapper_${contents}`]}>
      {children}
    </div>
  )
}