import styles from './card.module.scss';
import Photo from "@/ui/photo/photo";

type TProps = {
  description?: string
  cardType?: 'cardWithHiddenDescription' | 'cardWithVisibleDescription'
  size: 'small' | 'medium' | 'large' | 'extra-large' | 'card'
  image: string
}
export default function Card ({description, cardType, size, image}: TProps) {
  return (
    <div className={styles[`wrapper_${cardType}`]}>
      <Photo
        size={size}
        image={image}
      />
      <p>{description}</p>
    </div>
  )
}