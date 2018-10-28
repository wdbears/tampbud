import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import GoogleMapReact from "google-map-react";
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

function DetailedExpansionPanel(props) {
  const { classes } = props;
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  return (
    <div className={classes.root}>
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
            {/* <Card
            fontSize={6}
            fontWeight="bold"
            p={5}
            my={5}
            bg="#f6f6ff"
            borderRadius={8}
            boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
            lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}>
            {/* map goes here 
            </Card>*/}

            <div lat={69.955413} lng={30.337844} text={"Kreyser Avrora"} />
          </GoogleMapReact>
        </CardMedia>
        <CardContent>
          <Typography component="p">
            Your request of a tampon is on the way!
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DetailedExpansionPanel);
