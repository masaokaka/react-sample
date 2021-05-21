import React from 'react'
import  { makeStyles,AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import  MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
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

  export const Header = ()=>{
      const classes = useStyles();
    return(
        <div className={classes.root}>
        <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Todo List
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
    )
}