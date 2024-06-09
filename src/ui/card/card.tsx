import styles from './card.module.scss';
import Photo from "@/ui/photo/photo";

type TProps = {
  description?: string
  descriptionType?: 'hidden' | 'visible'
  size: 'small' | 'medium' | 'large' | 'extra-large' | 'card'
  image: string
}
export default function Card ({description, descriptionType, size, image}: TProps) {
  return (
    <div className={descriptionType? styles[`wrapper_${descriptionType}`] : ''}>
      <Photo
        size={size}
        image={image}
      />
      { description && <p>{description}</p> }
    </div>
  )
}