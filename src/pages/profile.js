import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "../components/Avatar";
import SettingsList from "../components/SettingsList";

const styles = {
  page: {
    paddingTop: 30
  }
};

const ProfilePage = ({ classes }) => (
  <div className={classes.page}>
    <>
      <Avatar />
      <SettingsList />
    </>
  </div>
);

export default withStyles(styles)(ProfilePage);
