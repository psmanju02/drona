import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={username:"",password:""};
  }
  handleSubmit(){
    console.log(this.state.username)
    console.log(this.state.password)

    var apiBaseUrl = "http://localhost:4000/api/";
    var self = this;
    var payload={
    "beusername":this.state.username,
    "bepassword":this.state.password
      }
    axios.post(apiBaseUrl+'login', payload)
      .then(function (response) {
 console.log(response);
 if(response.data.code == 200){
 console.log("Login successfull");
 }
 else if(response.data.code == 204){
 console.log("Username password do not match");
 alert("username password do not match")
 }
 else{
 console.log("Username does not exists");
 alert("Username does not exist");
 }
 })
 .catch(function (error) {
 console.log(error);
 });
  }
  
  render() {
    return (
      <div className="App">   	  
    	   <MuiThemeProvider>
        <div>
       <AppBar title="Login" />
        <TextField 
        hintText="Enter your Username" 
        floatingLabelText="Username" 
        onChange = {(event,newValue) => this.setState({username:newValue})}
        />
        <br/> 
	      <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange = {(event,newValue) => this.setState({password:newValue})}
            />
          <br/>
          <RaisedButton label="Submit" 
          onClick = {this.handleSubmit.bind(this)}
          />         
        </div>
          </MuiThemeProvider>
    </div>
    );
  }
}

export default App;
