import React from "react";
import { withStyles } from "@material-ui/core/styles";
import RequestsTabs from "../components/RequestsTabs";

const styles = {
  greeting: { textAlign: "center" },
  outerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  innerContainer: {
    width: "60vw"
  }
};

const RequestsPage = ({ classes }) => (
  <>
    <div className={classes.greeting}>
      <h1>Requests</h1>
      <div className={classes.outerContainer}>
        <div className={classes.innerContainer}>
          <RequestsTabs />
        </div>
      </div>
    </div>
  </>
);

export default withStyles(styles)(RequestsPage);
