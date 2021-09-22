import './Lobby.css'

function Lobby(props) {
    return ( 
        
        <div className="lobby-container">
            <h3 className="header">Waiting Lobby</h3>
            <div className="lobby-users">
                {
                props.users.map((user, index) => {
                    return (
                        <div className="lobby-user" key={index}>
                            <img className="user-image" alt="userimage" src={user.image} />
                            {user.status==="Online"?<div className="active-user"></div>:<div className="inactive-user"></div>}
                        </div>
                    )
                })}
            </div>
                    
        </div>
     );
}
 
export default Lobby;