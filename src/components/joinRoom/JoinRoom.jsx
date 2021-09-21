
import React from "react";
import react,{Component} from "react";
import Navigation from "../navigation/Navigation";

class JoinRoom extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
   <React.Fragment>
       <Navigation id="join-room"/>
       <p>join Room</p>
   </React.Fragment>
        )
    }
}export default JoinRoom;