import React,{Component} from "react";
import Navigation from "../navigation/Navigation";
import {Button} from 'react-bootstrap';
import './Login.css'
import Visibility from "@material-ui/icons/Visibility";
import IconButton from "@material-ui/core/IconButton";
import VisibilityOff from "@material-ui/icons/VisibilityOff";


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            passcode:"",    
            roomId:"",
            showPassword: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickShowPassword=this.handleClickShowPassword.bind(this)
    };
    handleChange=(event)=> {
        this.setState({ [event.target.name]: event.target.value });
      }

     handleSubmit(event){
        event.preventDefault();
        var roomData = {
         passcode: this.state.passcode,
         roomId: this.state.roomId
     }
     this.props.history.push("/join-room")
    }
     handleClickShowPassword = () => {
        this.setState({showPassword: !this.state.showPassword });
      };

    render(){
        return(
            <React.Fragment>
            <Navigation id="login-page"/>
            <form onSubmit={this.handleSubmit} className="login-form-fields">
          

          <div className="form-row-grid">
              <div className="heading-create">Create Room</div>   
          </div>
          <div className="" >
              <div className="form-label-input-grid">
              <label>Room Id:</label>
                <div className="login-row-grid-input" >
                <input className="login-textbox"
                           required
                           type="text"
                           name="roomId"
                           value={this.state.roomId}
                           onChange={this.handleChange}/>
                   
                   <Button className="login-page-button">Check</Button>
                </div>   

              </div>
              <div className="form-label-input-grid">
                   <label>Passcode:</label>
                   <div className="login-row-grid-input" >
                    <input className="login-textbox"
                           required
                           type={this.state.showPassword ? "text" : "password"}
                           name="passcode"  
                           value={this.state.passcode}
                           onChange={this.handleChange}/>
                   
                   <Button className="login-page-button">
                        <IconButton className="eye-icon"
                            onClick={this.handleClickShowPassword}
                             >
                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </Button>
                </div> 
              </div>

          </div>
          <Button  className="login-button"
               type="submit"
               > Join Room</Button>
              
   </form>
            </React.Fragment>
        )
    }
}export default Login;