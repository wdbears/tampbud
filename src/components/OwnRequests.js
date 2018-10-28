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
<<<<<<< HEAD
import firebase from "firebase"
=======
import Avatar from "../components/Avatar";
>>>>>>> f1b17b56bd664aa5e4c4cc617f9d8c6e627dfd9e

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
<<<<<<< HEAD
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
        
=======
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar className={classes.avatar} />}
          title="Geoffrey the Giraffe"
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
>>>>>>> f1b17b56bd664aa5e4c4cc617f9d8c6e627dfd9e
    </div>
  );
}

CardRequests.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardRequests);
