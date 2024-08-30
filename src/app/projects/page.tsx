import PageWrapper from "@/components/page-wrapper/page-wrapper";
import {TCard} from "@/utils/types";
import Grid from "@/components/grid/grid";

export default function Projects() {

  const cards: TCard[] = [
    {
      link: '/projects/project',
      size: 'small',
      isDescriptionHidden: false,
      image: 'living-room.jpeg',
      description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
    },
    {
      link: '/projects/project',
      size: 'large',
      isDescriptionHidden: false,
      image: 'dining-room.jpeg',
      description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
    },
    {
      link: '/projects/project',
      size: 'small',
      isDescriptionHidden: false,
      image: 'living-room-4.jpeg',
      description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
    },
    {
      link: '/projects/project',
      size: 'small',
      isDescriptionHidden: false,
      image: 'living-room-4.jpeg',
      description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
    },
    {
      link: '/projects/project',
      size: 'medium',
      isDescriptionHidden: false,
      image: 'living-room-4.jpeg',
      description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
    },
    {
      link: '/projects/project',
      size: 'medium',
      isDescriptionHidden: false,
      image: 'living-room-4.jpeg',
      description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
    },
    {
      link: '/projects/project',
      size: 'small',
      isDescriptionHidden: false,
      image: 'living-room-4.jpeg',
      description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
    },
    {
      link: '/projects/project',
      size: 'small',
      isDescriptionHidden: false,
      image: 'living-room-4.jpeg',
      description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
    },
    {
      link: '/projects/project',
      size: 'medium',
      isDescriptionHidden: false,
      image: 'living-room-4.jpeg',
      description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
    },
  ]

  return (
    <PageWrapper
      name='Проекты'
      title='Perfection of Form'
      subTitle='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
        vel facilisis.'
    >
      <div className='margin-site'>
        <Grid items={cards}/>
      </div>

    </PageWrapper>
  )
}