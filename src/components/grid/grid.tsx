import styles from './grid.module.scss';
import Link from "next/link";
import Card from "@/components/card/card";
import {TCard} from "@/utils/types";

type TProps = {
  items: TCard[];
}
export default function Grid ({items}: TProps) {

  return (
    <div className={styles.wrapper}>
      {
        items.map((item, key) => {
          return (
            <div
              className={styles[`item_${item.size}`]}
              key={key}
            >
              {item.link ? (
                <Link href={item.link}>
                <Card
                  isDescriptionHidden={item.isDescriptionHidden}
                  description={item.description}
                  image={item.image}
                >
                </Card>
              </Link>
              ) : (
                <Card
                  isDescriptionHidden={item.isDescriptionHidden}
                  description={item.description}
                  image={item.image}
                >
                </Card>
              )}
            </div>
          )
        })
      }

    </div>
  )
}