import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Buttons from "../components/Buttons";
import AlertDialog from "../components/Modal";

const styles = {
  appLogo: { width: 50, paddingTop: 20 }
};

const HomePage = ({ classes }) => (
  <>
    <Buttons onClick="" />
    <AlertDialog />
  </>
);

export default withStyles(styles)(HomePage);
