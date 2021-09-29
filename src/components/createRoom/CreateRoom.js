
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
            passcode:"",
            rules:"",
            roomId:"",
            


        }
        this.generatePasscode = this.generatePasscode.bind(this);
        this.copyToClipBoard = this.copyToClipBoard.bind(this);
        this.copyToClipBoardPass = this.copyToClipBoardPass.bind(this);


    }

    componentDidMount(){
        var len = 6;
        var id="";
        var char_list =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (var i = 0; i < len; i++) {
            
        id += char_list.charAt(Math.floor(Math.random() * char_list.length));
        }
        this.setState({roomId:id})
    }
    copyToClipBoard(){
        let text ="";
        let cb = navigator.clipboard;
        
            text= this.state.roomId;
        cb.writeText(text);
    }

     generatePasscode(){
        var len = 8;
        var pass="";
        var char_list =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrst#@$&";
        for (var i = 0; i < len; i++) {
        pass += char_list.charAt(Math.floor(Math.random() * char_list.length));
        }
        this.setState({passcode:pass})
    }
    copyToClipBoardPass(){ 
        let text ="";
        let cb = navigator.clipboard;
    
        text= this.state.passcode;
        cb.writeText(text);
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
               <div className="roomId-container" >
                   <Button className="roomId-copy-button"  onClick={this.copyToClipBoard}>Room ID:{this.state.roomId} <i class="fa fa-copy"></i></Button>
                </div>   
           </div>
           <div className="form-row-grid" >
               <div className="form-label-input-grid">
               <label>Room Name:</label>
                 
                 <input className="signup-textbox"
                            required
                            type="text"
                            name="roomName"
                            value={this.state.roomName}
                            onChange={this.handleChange}/>
                    
                    
                  

               </div>
               <div className="form-label-input-grid">
                    <label>Number Of Participents:</label>
                    <input className="number-of-participents-textbox"
                            required
                            type="text"
                            name="numberOfParticipents"
                            list="mylist"
                            value={this.state.numberOfParticipents}
                            onChange={this.handleChange}/>
               </div>
                <datalist id="mylist">
                    <option value="2"/>
                    <option value="3"/>
                    <option value="4"/>
                    <option value="5"/>
                    <option value="6"/>
                    <option value="7"/>
                    <option value="8"/>
                    <option value="9"/>
                    <option value="10"/>
                    
                </datalist>
           </div>
           <div className="form-row-grid" >
               <div className="form-label-input-grid">
                    <label>Passcord:</label>
                    <div className="form-row-grid-input" >
                        <input className="passcord-textbox"
                            required
                            type="text"
                            name="passcode"
                            value={this.state.passcode}
                            onChange={this.handleChange}/>
                        <Button className="copy-passcode" onClick={this.copyToClipBoardPass}><i class="fa fa-copy" style={{fontSize:"28px"}}></i></Button>    
                    </div>  
                    <Button className="generate-passcode" onClick={this.generatePasscode}>Generate Passcode</Button>
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





