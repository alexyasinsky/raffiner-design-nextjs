import Card from "@/ui/card/card";
import Grid from "@/ui/grid/grid";
import Photo from "@/ui/photo/photo";
import Link from 'next/link';

export default function Projects() {

  const card = {
    link: '',
    size: '',
    cardType: '',
    image: '',
    description: ''
  }
  return (
    <>
      <h1 className={'title'}>Perfection of Form</h1>
      <p className={'subTitle'}>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
        vel facilisis. </p>
      <Grid contents="cardWithHiddenDescription">
        <Link href={'/projects/project'}>
          <Card
            cardType="cardWithHiddenDescription"
            description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
          >
            <Photo
              size="medium"
             image='dining-room.jpeg'
            />
          </Card>

        </Link>
        <Link href={'/projects/project'}>
          <Card
            cardType="cardWithHiddenDescription"
            description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
          >
            <Photo
              size="medium"
              image='dining-room.jpeg'
            />
          </Card>

        </Link>
        <Link href={'/projects/project'}>
          <Card
            cardType="cardWithHiddenDescription"
            description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
          >
            <Photo
              size="medium"
              image='dining-room.jpeg'
            />
          </Card>

        </Link>
      </Grid>
      <Grid contents="cardWithHiddenDescription">
        <Link href={'/projects/project'}>
          <Card
            cardType="cardWithHiddenDescription"
            description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
          >
            <Photo
              size="large"
              image='dining-room.jpeg'
            />
          </Card>

        </Link>
        <Link href={'/projects/project'}>
          <Card
            cardType="cardWithHiddenDescription"
            description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
          >
            <Photo
              size="large"
              image='dining-room.jpeg'
            />
          </Card>

        </Link>
      </Grid>
      <Grid contents="cardWithHiddenDescription">
        <Link href={'/projects/project'}>
          <Card
            cardType="cardWithHiddenDescription"
            description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
          >
            <Photo
              size="extra-large"
              image='dining-room.jpeg'
            />
          </Card>

        </Link>
      </Grid>
      <Grid contents="cardWithHiddenDescription">
        <Link href={'/projects/project'}>
          <Card
            cardType="cardWithHiddenDescription"
            description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
          >
            <Photo
              size="small"
              image='dining-room.jpeg'
            />
          </Card>

        </Link>
        <Link href={'/projects/project'}>
          <Card
            cardType="cardWithHiddenDescription"
            description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
          >
            <Photo
              size="small"
              image='dining-room.jpeg'
            />
          </Card>

        </Link>
        <Link href={'/projects/project'}>
          <Card
            cardType="cardWithHiddenDescription"
            description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
          >
            <Photo
              size="small"
              image='dining-room.jpeg'
            />
          </Card>

        </Link>
        <Link href={'/projects/project'}>
          <Card
            cardType="cardWithHiddenDescription"
            description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
          >
            <Photo
              size="small"
              image='dining-room.jpeg'
            />
          </Card>

        </Link>
      </Grid>
    </>
  )
}