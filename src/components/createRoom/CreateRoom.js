
import React from "react";
import react,{Component} from "react";
import Navigation from "../navigation/Navigation";

class CreateRoom extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
   <React.Fragment>
       <Navigation id="create-room"/>
       <p>create Room</p>
   </React.Fragment>
        )
    }
}export default CreateRoom;