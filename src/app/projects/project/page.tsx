import Grid from "@/components/grid/grid";
import PageWrapper from "@/components/page-wrapper/page-wrapper";
import {TCard} from "@/utils/types";


export default function Project() {

  const cards: TCard[] = [
    {
      size: 'large',
      isDescriptionHidden: true,
      image: 'dining-room.jpeg',
      description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
    },
    {
      size: 'small',
      isDescriptionHidden: true,
      image: 'living-room.jpeg',
      description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
    },
    {
      size: 'small',
      isDescriptionHidden: true,
      image: 'living-room-4.jpeg',
      description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
    },
    {
      size: 'small',
      isDescriptionHidden: true,
      image: 'living-room-4.jpeg',
      description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
    }
]
  return (
    <PageWrapper
        name='Проекты'
        title='Quis ipsum'
        subTitle='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
        vel facilisis.'
        >
      <div className='margin-site'>
        <Grid items={cards}/>
      </div>

    </PageWrapper>
  )
}