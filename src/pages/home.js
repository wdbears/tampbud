import React from "react"
import { withStyles } from "@material-ui/core/styles"

const styles = {
  appLogo: { width: 50, paddingTop: 20 },
  greeting: { textAlign: "center" },
}

const HomePage = ({ classes }) => (
  <>
    <div className={classes.greeting}>
      <h1>Welcome to TampBud</h1>
    </div>
  </>
)

export default withStyles(styles)(HomePage)
