import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Buttons from "../components/Buttons";

const styles = {
  appLogo: { width: 50, paddingTop: 20 }
};

const HomePage = ({ classes }) => (
  <>
    <Buttons />
  </>
);

export default withStyles(styles)(HomePage);
