import React from 'react'
import { Grid } from 'reflexbox'
import BznsHeader from './BznsHeader'
import SrsPanel from './SrsPanel'

import './style.sass'

class App extends React.Component {

  render () {
    return <div>
      <BznsHeader name="Cohort 5" />
      <Grid col={6} px={2}>
        Left column
      </Grid>
      <Grid col={6} px={2}>
        <SrsPanel title="We mean it.">
          <p>No, really we do. C'mon take us srsly.</p>
        </SrsPanel>
      </Grid>
    </div>
  }
}

export default App
