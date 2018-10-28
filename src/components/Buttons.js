import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import CondomPic from "../images/condom.jpg";
import TamponPic from "../images/tampon.jpg";
import PadPic from "../images/pad.jpg";
import { Card, CardContent, CardActions } from "@material-ui/core";

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
    height: "93vh",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: "31vh"
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
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  cardtitle: {
    marginBottom: 12
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
  };

  sendRequest = () => {
    console.log("sent!");
  }


  handleOpen = () => {
    this.setState({ 
        open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {images.map((image) => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            onClick={this.handleOpen}
            style={{
              width: image.width
            }}
            
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`
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
                {image.title}
              </Typography>
            </span>
          </ButtonBase>
        ))}
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
                You are requesting for {}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick= {this.sendRequest} size="small">Yes</Button>
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
