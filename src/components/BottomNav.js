import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import PersonIcon from "@material-ui/icons/Person";
import { Link, withRouter } from "react-router-dom";

const styles = {
  root: {
    height: "10vh"
  }
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
    pathMap: ["/", "/requests", "/profile"]
  };

  componentWillReceiveProps(newProps) {
    const { pathname } = newProps.location;
    const { pathMap } = this.state;

    const value = pathMap.indexOf(pathname);

    if (value > -1) {
      this.setState({
        value
      });
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value, pathMap } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          component={Link}
          label="Home"
          icon={<HomeIcon />}
          to={pathMap[0]}
        />
        <BottomNavigationAction
          component={Link}
          label="Requests"
          icon={<ReceiptIcon />}
          to={pathMap[1]}
        />
        <BottomNavigationAction
          component={Link}
          label="Profile"
          icon={<PersonIcon />}
          to={pathMap[2]}
        />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(SimpleBottomNavigation));
