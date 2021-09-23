
import React,{Component} from "react";
import Navigation from "../navigation/Navigation";
import {Button} from 'react-bootstrap';
import "./CreateRoom.css"


class CreateRoom extends Component{
    constructor(props){
        super(props);
        this.state={
            roomName:"",
            numberOfParticipents:"",
            passcord:"",
            rules:"",
            roomId:"",
            randomPasscord:"",


        }

    }

    componentDidMount(){
        // var len = 6;
        // var char_list =
        // "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        // for (var i = 0; i < len; i++) {
            
        // this.state.roomId += char_list.charAt(Math.floor(Math.random() * char_list.length));
        // }
    }
    copyToClipBoard(){
        
    
        // const cb = navigator.clipboard;
        // const text = this.state.roomId;
        // cb.writeText(text);
        
        

    }

     generatePasscord(){
        // var len = 8;
        // var char_list =
        // "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrst#@$&";
        // for (var i = 0; i < len; i++) {
        // this.state.passcord += char_list.charAt(Math.floor(Math.random() * char_list.length));
        // }
    }

    handleChange=(event)=> {
        this.setState({ [event.target.name]: event.target.value });
      }
    render(){
        return(
   <React.Fragment>
       <Navigation id="create-room"/>
       <form onSubmit={this.handleSubmit} className="form-fields">
          

           <div className="form-row-grid">
               <div className="heading-create">Create Room</div>
               <div className="copy-passcord-container" >
                   <Button className="copy-passcord"  onClick={this.copyToClipBoard()}>{this.state.roomId} </Button>
                </div>   
           </div>
           <div className="form-row-grid" >
               <div className="form-label-input-grid">
               <label>Room Name:</label>
                 <div className="form-row-grid-input" >
                 <input className="signup-textbox"
                            required
                            type="text"
                            name="roomName"
                            value={this.state.roomName}
                            onChange={this.handleChange}/>
                    
                    <Button className="room-name-save">Save</Button>
                 </div>   

               </div>
               <div className="form-label-input-grid">
                    <label>Number Of Participents:</label>
                    <input className="number-of-participents-textbox"
                            required
                            type="text"
                            name="numberOfParticipents"
                            value={this.state.numberOfParticipents}
                            onChange={this.handleChange}/>
               </div>
           </div>
           <div className="form-row-grid" >
               <div className="form-label-input-grid">
                    <label>Passcord:</label>
                    <div className="form-row-grid-input" >
                        <input className="passcord-textbox"
                            required
                            type="text"
                            name="passcord"
                            value={this.state.passcord}
                            onChange={this.handleChange}/>
                        <Button className="copy-passcord">copy</Button>    
                    </div>  
                    <Button className="generate-passcord" onClick={this.generatePasscord()}>Generate Passcord</Button>
               </div>
               <div className="form-label-input-grid">
                    <label>Rules:</label>
                    <input className="rule-textbox"
                            required
                            type="text"
                            name="rules"
                            value={this.state.rules}
                            onChange={this.handleChange}/>        
               </div>
           </div>
           <Button  className="create-button"
                type="submit"
                > Create Room</Button>
               
    </form>
   </React.Fragment>
        )
    }
}export default CreateRoom;




{/* <div className="room-name-nop-field">
<label>
  Room Name:</label>
  <input
    className="signup-textbox"
    required
    type="text"
    name="roomName"
    value={this.state.roomName}
    onChange={this.handleChange}
  />

<Button className="room-name-save">Save</Button>
<label>
  Number Of Participents:
  <input
    className="signup-textbox"
    type="text"
    name="numberOfParticipents"
    value={this.state.numberOfParticipents}
    onChange={this.handleChange}
  />
</label>
</div>
<div className="form-name-field">
<label>
  Passcord;
  <input
    className="create-passcord"
    required
    type="password"
    name="passcord"
    value={this.state.passcord}
    onChange={this.handleChange}
  />
  <Button className="copy-passcord">copy</Button>
  <Button className="generate-passcord">Generate Passcord</Button>
</label>

<label>
  Rules:
  <input
    className="signup-textbox"
    type="text"
    name="rules"
    value={this.state.rules}
    onChange={this.handleChange}
  />
</label>

</div>



<div className="form-name-field">
<input
  className="create-button"
  type="submit"
  value="Create"
/>
</div> */}