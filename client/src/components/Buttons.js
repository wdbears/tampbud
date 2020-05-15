import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import CondomPic from "../images/condom.jpg";
import TamponPic from "../images/tampon.jpg";
import PadPic from "../images/pad.jpg";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { Card, CardContent, CardActions } from "@material-ui/core";
import firebase from 'firebase';
import axios from 'axios';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height: "100%"
  },
  image: {
    position: "relative",
    height: "90vh",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: "30vh"
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  paper: {
    position: "absolute",
    textAlign: "center",
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  cardtitle: {
    marginBottom: 12
  },
  cardButtons: {
    justifyContent: "center",
    alignItems: "center"
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
});

const images = [
  {
    url: CondomPic,
    title: "Condoms",
    width: "calc(100% /3)"
  },
  {
    url: TamponPic,
    title: "Tampons",
    width: "calc(100% /3)"
  },
  {
    url: PadPic,
    title: "Pads",
    width: "calc(100% /3)"
  }
];

class ButtonBases extends React.Component {
  state = {
    open: false,
    selected: ""
  };

  handleCondom = () => {
    this.setState({ open: true,
    selected: "Condom"});
  };

  handlePeriodPad = () => {
    this.setState({
      open:true,
      selected: "Pad"
    });
  }

  handleTampon = () => {
    this.setState({
      open: true,
      selected: "Tampon"
    });
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  sendRequest = async () => {
    navigator.geolocation.getCurrentPosition(saveRequest);
    const selected = this.state.selected;

    async function saveRequest(position){
      await firebase.database().ref('requests').push({
        createdBy: "Alice Zhu",
        itemRequested: selected,
        location: [position.coords.latitude,position.coords.longitude],
        timeStamp: Date.now(),
        completed: false
      });
      console.log("Saved!");
    }
    this.setState({open:false})

    await axios.post('http://localhost:5000/', {
      phone: `19175195535`, //Jarman's phone number here
      message: `I need a ${this.state.selected}`
    })
    .then(response => response.data)
    .then(res => {
      console.log(res);
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {/* Condom Button */}
        <ButtonBase
          focusRipple
          key={images[0].title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          onClick={this.handleCondom}
          style={{
            width: images[0].width
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${images[0].url})`
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {images[0].title}
            </Typography>
          </span>
        </ButtonBase>

        {/* Tampon Button */}

        <ButtonBase
          focusRipple
          key={images[1].title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          onClick={this.handleTampon}
          style={{
            width: images[1].width
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${images[1].url})`
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {images[1].title}
            </Typography>
          </span>
        </ButtonBase>

        {/* Period Pad Button */}
        <ButtonBase
          focusRipple
          key={images[2].title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          onClick={this.handlePeriodPad}
          style={{
            width: images[2].width
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${images[2].url})`
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {images[2].title}
            </Typography>
          </span>
        </ButtonBase>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <Card style={getModalStyle()} className={classes.paper}>
            <CardContent>
              <Typography
                variant="h5"
                id="modal-title"
                className={classes.cardtitle}
              >
                Are you sure?
              </Typography>
              <Typography variant="subtitle1" id="simple-modal-description">
                You are submitting a request for a {this.state.selected}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={this.sendRequest} size="small">
                Yes
              </Button>
              <Button size="small">No</Button>
            </CardActions>
          </Card>
        </Modal>
      </div>
    );
  }
}

ButtonBases.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonBases);
