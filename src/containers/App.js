import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Router from "react-router-dom/BrowserRouter";
import Pages from "../pages";
import CssBaseline from "@material-ui/core/CssBaseline";
import BottomNav from "../components/BottomNav";

const styles = {
  app: { minHeight: "100vh" },
  navbar: { position: "fixed", bottom: 0, width: "100%" },
  main: { marginBottom: "" }
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className={this.props.classes.app}>
          <main className={this.props.classes.main}>
            <CssBaseline />
            <Pages />
          </main>
          <footer className={this.props.classes.navbar}>
            <BottomNav />
          </footer>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
