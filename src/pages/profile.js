import React from "react"
import { withStyles } from '@material-ui/core/styles';
import SettingsList from "../components/SettingsList";

const styles = {
    page: {
        paddingTop: 30
      },
      application: {
          textAlign: 'center'
      }
    }

const ProfilePage = ({classes}) => (
    <div className={classes.page}>
    <>
        <SettingsList /> 
    </>
    </div>
)

export default withStyles(styles)(ProfilePage);