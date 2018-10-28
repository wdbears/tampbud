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
import Avatar from "../components/Avatar";

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

function CardRequests(props) {
  const { classes } = props;
  const defaultProps = {
    center: {
      lat: 49.95,
      lng: 30.33
    },
    zoom: 11
  };

  let db = firebase.database();
  let ref = db.ref("requests");
  let requests = [];
  ref.on("value", function(snapshot) {
    snapshot.forEach(function(data) {
      requests.push(data.val());
    });
  });
  // console.log(requests);
  // console.log(requests[0].location[0])
  return (
    <div className={classes.root}>
      {requests.map(request => (
        <Card className={classes.card}>
          <CardHeader
            avatar={<Avatar className={classes.avatar} />}
            title={request.createdBy}
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
              <div lat={49.955413} lng={30.337844} text={"Kreyser Avrora"} />
            </GoogleMapReact>
          </CardMedia>
          <CardContent>
            <Typography component="p">Your tampon is on the way!</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

CardRequests.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardRequests);
