import Grid from "@/components/grid/grid";
import Card from "@/components/card/card";
import PageWrapper from "@/components/page-wrapper/page-wrapper";


export default function Services() {
  return (
    <PageWrapper
     name='Услуги'
     title='Better Decisions'
     subTitle='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis.'
    >
      <Grid>
        <Card
         description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
         descriptionType="visible"
         size="card"
         image='dining-room.jpeg'
        >
        </Card>
        <Card
          description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
          descriptionType="visible"
          size="card"
          image='dining-room.jpeg'
        >
        </Card>

      </Grid>
      <Grid>
        <Card
          description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
          descriptionType="visible"
          size="card"
          image='dining-room.jpeg'
        >
        </Card>
        <Card
          description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
          descriptionType="visible"
          size="card"
          image='dining-room.jpeg'
        >
        </Card>

      </Grid>
      <Grid>
        <Card
          description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
          descriptionType="visible"
          size="card"
          image='dining-room.jpeg'
        >
        </Card>
        <Card
          description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
          descriptionType="visible"
          size="card"
          image='dining-room.jpeg'
        >
        </Card>
      </Grid>
    </PageWrapper>
  )
}