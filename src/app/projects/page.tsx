import Card from "@/ui/card/card";
import Grid from "@/ui/grid/grid";
import Link from 'next/link';

import PageWrapper from "@/components/page-wrapper/page-wrapper";

export default function Projects() {

  const card = {
    link: '',
    size: '',
    descriptionType: '',
    image: '',
    description: ''
  }
  return (
    <PageWrapper
      name='Проекты'
      title='Perfection of Form'
      subTitle='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
        vel facilisis.'
    >
      <Grid>
        <Link href={'/projects/project'}>
          <Card
            descriptionType="hidden"
            description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
            size="small"
            image='dining-room.jpeg'
          >
          </Card>
        </Link>
        <Link href={'/projects/project'}>
          <Card
            descriptionType="hidden"
            description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
            size="small"
            image='dining-room.jpeg'
          >
          </Card>
        </Link>
        <Link href={'/projects/project'}>
          <Card
            descriptionType="hidden"
            description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
            size="small"
            image='dining-room.jpeg'
          >
          </Card>
        </Link>
        <Link href={'/projects/project'}>
          <Card
            descriptionType="hidden"
            description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
            size="small"
            image='dining-room.jpeg'
          >
          </Card>
        </Link>
      </Grid>
    </PageWrapper>
  )
}