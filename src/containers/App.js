import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Router from "react-router-dom/BrowserRouter";
import Pages from "../pages";
import CssBaseline from "@material-ui/core/CssBaseline";
import BottomNav from "../components/BottomNav";
import firebase from "firebase";

const styles = {
  app: { minHeight: "100vh" },
  navbar: { position: "fixed", bottom: 0, width: "100%" },
  main: { marginBottom: "" }
};

class App extends Component {
  async componentDidMount() {
    

    // const config = {
    //   apiKey: "AIzaSyCpHYeJmoxC1hdnUOPl1lqI6a3FyUNdDIU",
    //   authDomain: "tampbud.firebaseapp.com",
    //   databaseURL: "https://tampbud.firebaseio.com",
    //   projectId: "tampbud",
    //   storageBucket: "tampbud.appspot.com",
    //   messagingSenderId: "867512165187"
    // };
    // firebase.initializeApp(config);
    

    function getLocation() {
      if (navigator.geolocation) {
<<<<<<< HEAD
          navigator.geolocation.getCurrentPosition(showPosition);
          console.log("Location permissions granted!");
=======
        navigator.geolocation.getCurrentPosition(showPosition);
>>>>>>> f1b17b56bd664aa5e4c4cc617f9d8c6e627dfd9e
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }

    function showPosition(position) {
      return;
    }

<<<<<<< HEAD
    getLocation()
    const db = firebase.database();
=======
    getLocation();
>>>>>>> f1b17b56bd664aa5e4c4cc617f9d8c6e627dfd9e

    /* GET ZIP CODE OF A LATITUDE LONGITUDE
    const response = await googleMaps.reverseGeocode({
      latlng: [-33.8571965, 151.2151398],
    }).asPromise()
    .then((response) => {
      console.log(response.json.results[0].address_components[7].long_name);
    });
    */

    /*
    firebase.database().ref('requests').push({
      createdBy: "Alice Zhu",
      location: "0,0",
      timeStamp: Date.now(),
      completed: false
    });
    */

    //AIzaSyDWBOIZ_dwzgmxXJlN6AKpfR1vXd4SBxZU GOogle maps
  }

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
const config = {
  apiKey: "AIzaSyCpHYeJmoxC1hdnUOPl1lqI6a3FyUNdDIU",
  authDomain: "tampbud.firebaseapp.com",
  databaseURL: "https://tampbud.firebaseio.com",
  projectId: "tampbud",
  storageBucket: "tampbud.appspot.com",
  messagingSenderId: "867512165187"
};

export const db = firebase.initializeApp(config)
export default withStyles(styles)(App);
