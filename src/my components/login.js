// created funtional component
import React from "react";
import { Grid, Paper, Avatar } from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import background from "./images/CWhite_logo.jpeg";
const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: "80vh",
    margin: "80px auto 20px",
  };
  const textStyle = { margin: "5% 20% 1% ", width: "50vh" };
  const avatarStyle = { backgroundColor: "#5351ce" };
  const buttonStyle = {
    margin: "35px auto",
    fontSize: 16,
    borderRadius: "30px",
    lineHeight: 1.5,
  };

  return (
    <Grid>
      {/* <div style={{ backgroundImage: `url(${background})` }}>
             </div> */}
      <Paper elevation={15} style={paperStyle}>
        <Grid container direction="row" alignItems="center">
          <ArrowBackIcon style={{ fontSize: 30 }} /> GO BACK
        </Grid>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOpenIcon />
          </Avatar>
          <h1>Account Infomation</h1>
        </Grid>
        <TextField
          variant="outlined"
          style={textStyle}
          label="Account Name"
          placeholder="Enter Account Name"
          required
        />
        <TextField
          variant="outlined"
          style={textStyle}
          label="Account Number"
          placeholder="Enter Account Number"
          required
          type="password"
        />
        <Grid align="center">
          <Button
            size="large"
            variant="contained"
            color="secondary"
            style={buttonStyle}
          >
            Welcome
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default Login;
