import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HelpIcon from "@material-ui/icons/HelpOutline";
import ExitIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent } from "@material-ui/core";

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
    width: "100%",
    height: "100%"
  },
  paper: {
    position: "absolute",
    textAlign: "center",
    width: "40vh",
    boxShadow: theme.shadows[5]
  },
  list: {
    textAlign: "center",
    justifyContent: "center"
  },
  ul: {
    listStyle: "none",
    display: "inline-block",
    margin: "0",
    padding: "0"
  },
  nav: {
    width: "100%",
    margin: 0,
    backgroundColor: theme.palette.background.paper
  }
});

class SimpleList extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav" className={classes.nav}>
          <ListItem button onClick={this.handleOpen}>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="Help" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ExitIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
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
                Having trouble with the app?
              </Typography>
              <div className={classes.list}>
                <Typography variant="subtitle1" id="simple-modal-description">
                  <ul className={classes.ul}>
                    <li>
                      To request something, simply tap on the item you want to
                      request on the home page.
                    </li>
                    <li>
                      To view your requests or others, reference the requests
                      page.
                    </li>
                  </ul>
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Modal>
      </div>
    );
  }
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
