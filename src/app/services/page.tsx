import Grid from "@/components/grid/grid";
import PageWrapper from "@/components/page-wrapper/page-wrapper";
import {TCard} from "@/utils/types";


export default function Services() {
  const cards: TCard[] = [
    {
      size: 'medium',
      isDescriptionHidden: false,
      image: 'dining-room.jpeg',
      description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
    },
    {
      size: 'medium',
      isDescriptionHidden: false,
      image: 'living-room.jpeg',
      description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
    },
    {
      size: 'medium',
      isDescriptionHidden: false,
      image: 'living-room-4.jpeg',
      description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
    },
    {
      size: 'medium',
      isDescriptionHidden: false,
      image: 'living-room-4.jpeg',
      description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
    }
  ]
  return (
    <PageWrapper
      name='Услуги'
      title='better decisions'
      subTitle='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
        vel facilisis.'
    >
      <div className='margin-site'>
        <Grid items={cards}/>
      </div>

    </PageWrapper>
  )
}