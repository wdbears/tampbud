import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Buttons from "../components/Buttons";

const styles = {
  appLogo: { width: 50, paddingTop: 20 },
  greeting: { textAlign: "center" }
};

const HomePage = ({ classes }) => (
  <>
    <div className={classes.greeting}>
      <h1>What would you like today?</h1>
      <Buttons />
    </div>
  </>
);

export default withStyles(styles)(HomePage);
