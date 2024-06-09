import Card from "@/ui/card/card";
import Grid from "@/ui/grid/grid";
import Link from 'next/link';

export default function Projects() {

  const card = {
    link: '',
    size: '',
    descriptionType: '',
    image: '',
    description: ''
  }
  return (
    <>
      <h1 className={'title'}>Perfection of Form</h1>
      <p className={'subTitle'}>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
        vel facilisis. </p>
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
    </>
  )
}