import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class AlertDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Open alert dialog</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;

// import React from "react";
// import Typography from "@material-ui/core/Typography";
// import Modal from "@material-ui/core/Modal";
// import Button from "@material-ui/core/Button";
// import PropTypes from "prop-types";

// import { Card, CardContent, CardActions } from "@material-ui/core";

// function getModalStyle() {
//   const top = 50;
//   const left = 50;

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`
//   };
// }
// class Modal extends React.Component {
//   render() {
//     const { classes } = this.props;
//     return (
//       <Modal
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//         open={this.state.open}
//         onClose={this.handleClose}
//       >
//         <Card style={getModalStyle()} className={classes.paper}>
//           <CardContent>
//             <Typography
//               variant="h5"
//               id="modal-title"
//               className={classes.cardtitle}
//             >
//               Are you sure?
//             </Typography>
//             <Typography variant="subtitle1" id="simple-modal-description">
//               You are requesting for {}
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Button onClick={this.sendRequest} size="small">
//               Yes
//             </Button>
//             <Button size="small">No</Button>
//           </CardActions>
//         </Card>
//       </Modal>
//     );
//   }
// }

// Modal.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default Modal;
