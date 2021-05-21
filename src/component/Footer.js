import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    color:"white",
    backgroundColor:"#3f51b5",
    width: "100%",
    position: "absolute",
    bottom: 0,
    height:"50px",
    textAlign:"center"
  },
});

export const Footer = () => {
  const classes = useStyles();
  return <div className={classes.footer}>Footer</div>;
};