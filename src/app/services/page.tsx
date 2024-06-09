import Grid from "@/ui/grid/grid";
import Card from "@/ui/card/card";


export default function Services() {
  return (
    <>
      <h1 className={'title'}>Better Decisions</h1>
      <p className={'subTitle'}>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis. </p>
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
    </>
  )
}