import React,{Component} from "react";
import Navigation from "../navigation/Navigation";
import {Button} from 'react-bootstrap';
import './Login.css'

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            passcode:"",    
            roomId:"",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                <div className="form-row-grid-input" >
                <input className="signup-textbox"
                           required
                           type="text"
                           name="roomId"
                           value={this.state.roomId}
                           onChange={this.handleChange}/>
                   
                   <Button className="room-name-save">Check</Button>
                </div>   

              </div>
              <div className="form-label-input-grid">
                   <label>Passcode:</label>
                   <div className="form-row-grid-input" >
                    <input className="signup-textbox"
                           required
                           type="text"
                           name="passcode"
                           value={this.state.passcode}
                           onChange={this.handleChange}/>
                   
                   <Button className="room-name-save">show</Button>
                </div> 
              </div>

          </div>
          <Button  className="create-button"
               type="submit"
               > Join Room</Button>
              
   </form>
            </React.Fragment>
        )
    }
}export default Login;