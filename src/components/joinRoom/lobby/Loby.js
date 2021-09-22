import React,{Component} from 'react';
import './Lobby.css'

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
                                    {user.status==="Online"?<div className="active-user">   </div>:<div className="inactive-user">    </div>}
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