import styles from './grid.module.scss';
import {ReactNode} from "react";

type TProps = {
  contents: 'cardWithHiddenDescription' | 'cardWithVisibleDescription'
  children: ReactNode
}
export default function Grid ({contents, children}: TProps) {

  return (
    <div className={styles[`wrapper_${contents}`]}>
      {children}
    </div>
  )
}