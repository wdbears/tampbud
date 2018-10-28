import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import GoogleMapReact from "google-map-react";
import firebase from "firebase"

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "50%"
  },
  column2: {
    flexBasis: "33.33%%"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  list: {
    listStyleType: "none",
    textAlign: "left"
  }
});

function DetailedExpansionPanel(props) {
  const { classes } = props;
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };


  let db = firebase.database();
  let ref = db.ref('requests');
  let requests = [];
  ref.on('value', function(snapshot){
    snapshot.forEach(function(data){
      requests.push(data.val());
    })
  });
  console.log(requests);
  console.log(requests[0].location[0])
  return (
    <div className={classes.root}>
      {requests.map(request => (
        
          <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.column}>
              <Typography className={classes.heading}>{request.createdBy}</Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>{request.itemRequested}</Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div
              style={{ height: "200px", width: "80%" }}
              className={classes.column2}
            >
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyAraoaZOS-5NeVj6waihil6SeGXc9n_N5Q"
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >

                <div lat={request.location[0]} lng={request.location[1]} text={"Kreyser Avrora"} />
              </GoogleMapReact>
            </div>
            <div className={classes.column2} />
            <div className={classNames(classes.column2, classes.helper)}>
              <Typography variant="caption">
                <ul className={classes.list}>
                  <li>{request.timeStamp}</li>
                  <li>Distance: 0.1 miles</li>
                </ul>
                <br />
              </Typography>
            </div>
          </ExpansionPanelDetails>
          <Divider />
        </ExpansionPanel>
      ))}
        
    </div>
  );
}

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DetailedExpansionPanel);
