import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import GoogleMapReact from "google-map-react";
import firebase from "firebase";
import Avatar2 from "../components/Avatar2";

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
  card: {
    margin: ".5rem"
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  },
  map: {
    height: "200px",
    width: "100%"
  }
});

function AcceptedCardRequests(props) {
  const { classes } = props;
  const defaultProps = {
    center: {
      lat: 40.737125999999996,
      lng: -73.81774920000001
    },
    zoom: 16
  };

  let db = firebase.database();
  let ref = db.ref("requests");
  const requests = [];
  ref.on("value", async function(snapshot) {
    await snapshot.forEach(function(data) {
      requests.push(data.val());
    });
  });

  return (
    <div className={classes.root}>
      {requests.map(request => (
        <Card className={classes.card}>
          <CardHeader
            avatar={<Avatar2 className={classes.avatar} />}
            title={"Shirley Temple"}
            subheader="Your TampBud"
          />
          <CardMedia className={classNames(classes.map)}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyAraoaZOS-5NeVj6waihil6SeGXc9n_N5Q"
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <div
                lat={40.737125999999996}
                lng={-73.81774920000001}
                text={"Kreyser Avrora"}
              />
            </GoogleMapReact>
          </CardMedia>
          <CardContent>
            <Typography component="p">
              You are delivering a {request.itemRequested}!
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

AcceptedCardRequests.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AcceptedCardRequests);
