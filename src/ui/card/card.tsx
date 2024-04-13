import {ReactNode} from "react";

import styles from './card.module.scss';

type TProps = {
  children: ReactNode
  description?: string
  cardType?: 'cardWithHiddenDescription' | 'cardWithVisibleDescription'
}
export default function Card ({children, description, cardType}: TProps) {
  return (
    <div className={styles[`wrapper_${cardType}`]}>
      {children}
      <p>{description}</p>
    </div>
  )
}