
import React,{Component} from "react";
import Navigation from "../navigation/Navigation";
import manIcon from '../../assets/man-icon.png';
import {Button} from 'react-bootstrap'
import './JoinRoom.css'
import Lobby from "./lobby/Loby";
import SongPreview from "./SongPreview/SongPreview";
import {  FaUpload } from 'react-icons/fa';


const users = [
    {
        name: 'User 1',
        status: 'Online',
        image: 'https://picsum.photos/100',
        songs:'8',
    },
    {
        name: 'user 2',
        status: 'offline',
        image: 'https://picsum.photos/100',
        songs:'5',
    },
    {
        name: 'User 3',
        status: 'Online',
        image: 'https://picsum.photos/100',
        songs:'0',
    },
    {
        name: 'user 4',
        status: 'offline',
        image: 'https://picsum.photos/100',
        songs:'10',
    },
    {
        name: 'User 5',
        status: 'Online',
        image: 'https://picsum.photos/100',
        songs:'10',
    },
    {
        name: 'user 6',
        status: 'offline',
        image: 'https://picsum.photos/100',
        songs:'10',
    }
]

class JoinRoom extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
   <React.Fragment>
       <Navigation id="join-room"/>
       <div className="join-room-body">
       <div className="player-how-to-play-wrapper">
           <div className="player-details-container">
               <img src={manIcon} alt="icon" className="player-photo"/>
               <div className="player-details">
                   <div className="player-role">Player</div>
                   <div className="player-name">Akshay</div>
               </div>
           </div>
           <div className="how-to-play-button-container" >
                 <Button className="how-to-play-button" variant="primary">HOW TO PLAY</Button>
           </div>
           
           
       </div>
       <Lobby users={users}/>
       <div className="song-container">
           <h3>Add your song here...</h3>
            <div className="add-song">
                {/* an input field to paste link of songs with a button*/}
                <div className="add-song-input-container">
                    <input type="text" className="add-song-input" placeholder="Paste Your Link Here"
                    />
                    <div className="join-page-icon">< FaUpload/></div>
                    <Button className="add-song-button" variant="primary">ADD</Button>
                </div>
            </div>
            <div className="added-songs">
                    <SongPreview title="Stay - Justin Bieber" duration="04:00"/>
            </div>
        </div>
        <div className="startbutton"> 
            <Button className="start-button" variant="primary">START GAME</Button>
        </div>

       </div>
   </React.Fragment>
        )
    }
}export default JoinRoom;