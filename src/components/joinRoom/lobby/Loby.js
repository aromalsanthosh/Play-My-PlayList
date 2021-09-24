import React,{Component} from 'react';
import './Lobby.css'
import activeicon from '../../../assets/active.png';
import offlineicon from '../../../assets/offline.png';
class Lobby extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return ( 
        
            <div className="lobby-container">
                <h3 className="header">Waiting Lobby</h3>
                <div className="lobby-users">
                    {
                    this.props.users.map((user, index) => {
                        return (
                            <div>
                                 <div className="lobby-user" key={index}>
                                    <img className="user-image" alt="userimage" src={user.image} />
                                    {user.status==="Online"?<div className="active-user"> <img src={activeicon} alt="user active"/>  </div>:<div className="inactive-user">  <img src={offlineicon} alt="user offline"/>  </div>}
                            </div>
                            <p>{user.name}</p>
                            <p>{user.songs} songs added</p>
                            </div>
                        )
                    })}
                </div>
                        
            </div>
         );
    }

}
 
export default Lobby;