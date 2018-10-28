import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import GoogleMapReact from "google-map-react";

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
  map: {
    height: "200px",
    width: "80%"
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
  },

});

function DetailedExpansionPanel(props) {
  const { classes } = props;
  const defaultProps = {
    center: {
      lat: 40.737125999999996,
      lng: -73.81774920000001
    },
    zoom: 17
  };

  function handleAccept(e){
    e.preventDefault();

    let x = document.getElementById("dog");
    x.style.display = "none";
    
  }


  return (
    <div className={classes.root}>
      <div id = "dog">
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography className={classes.heading}>Shirley Temple</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Condom</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classNames(classes.column2, classes.map)}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyAraoaZOS-5NeVj6waihil6SeGXc9n_N5Q"
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <div lat={59.955413} lng={30.337844} text={"Kreyser Avrora"} />
            </GoogleMapReact>
          </div>
          <div className={classes.column2} />
          <div className={classNames(classes.column2, classes.helper)}>
            <Typography variant="caption">
              <ul className={classes.list}>
                <li>Time: 3:59 PM</li>
                <li>Distance: 0.22 miles</li>
              </ul>
              <br />
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small">Cancel</Button>
          <Button onclick={handleAccept} size="small" color="primary">
            Accept
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
      </div>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography className={classes.heading}>Jane Styles</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              Tampons
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classNames(classes.column2, classes.map)}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyAraoaZOS-5NeVj6waihil6SeGXc9n_N5Q"
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
<<<<<<< HEAD
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

              <div lat={40.737125999999996} lng={-73.81774920000001} text={"Kreyser Avrora"} />
=======
              <div lat={59.955413} lng={30.337844} text={"Kreyser Avrora"} />
>>>>>>> 2e1eee89a7b479914718fea37a98d6574c1b82dc
            </GoogleMapReact>
          </div>
          <div className={classes.column2} />
          <div className={classNames(classes.column2, classes.helper)}>
            <Typography variant="caption">
              <ul className={classes.list}>
                <li>Time: 3:59 PM</li>
                <li>Distance: 0.22 miles</li>
              </ul>
              <br />
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Accept
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DetailedExpansionPanel);
