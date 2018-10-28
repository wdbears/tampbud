import React from "react"
import { withStyles } from "@material-ui/core/styles"

const styles = {
    greeting: { textAlign: "center" }
}

const RequestsPage = ({ classes }) => (
  <>
    <div className={classes.greeting}>
      <h1>Requests</h1>
    </div>
  </>
)

export default withStyles(styles)(RequestsPage)

