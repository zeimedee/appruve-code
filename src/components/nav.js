import React from 'react'
import {makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ToolBar from '@material-ui/core/Toolbar'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function NavBar() {
    const classes = useStyles();
    
    return (
        <div className={classes.root }>
            <AppBar position='static'>
            <ToolBar>
                <Typography variant='h6' className={classes.title}>
                    Bookpal
                </Typography>

                <Button color='inherit'>LOGIN</Button>
            </ToolBar>
        </AppBar>
        </div>
    )
}

export default NavBar;
