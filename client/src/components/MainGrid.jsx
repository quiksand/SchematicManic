import React from 'react';
import { Grid, Image } from 'semantic-ui-react'

const MainGrid = () => (
    <Grid celled>
        <Grid.Row>
            <Grid.Column width={3}>
            <Grid.Row style={{marginBottom: '0.7em'}}>
                <Image src='./assets/solar-panels.png' />
            </Grid.Row>
            <Grid.Row style={{ marginBottom: '0.7em' }}>
                <Image src='./assets/installingpanels.png' />
            </Grid.Row>
                <Grid.Row style={{ marginBottom: '0.7em' }}>
                    <Image src='./assets/earthnight.png' />
                </Grid.Row>
            <Grid.Row>
                <Image src= './assets/schema.png' />
            </Grid.Row>
            </Grid.Column>
            <Grid.Column width={13}>
                <Image src='/assets/Solar-Home.png' />
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column width={3}>
                {/* <Image src='/assets/images/wireframe/image.png' /> */}
            </Grid.Column>
            <Grid.Column width={10}>
                {/* <Image src='/assets/images/wireframe/paragraph.png' /> */}
            </Grid.Column>
            <Grid.Column width={3}>
                {/* <Image src='/assets/images/wireframe/image.png' /> */}
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default MainGrid;