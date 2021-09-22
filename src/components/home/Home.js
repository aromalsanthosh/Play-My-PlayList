import react,{Component} from "react";
import { Button ,Card } from "react-bootstrap"
import './Home.css'
import { NavLink } from "react-router-dom";
import equ from '../../assets/equ.jpg';
import logo from '../../assets/PMPL-LOGO.png'

class Body extends Component{
    constructor(props){
        super(props);
    }
   
    render(){
        return(
            <react.Fragment>
                <div class="body-wrapper">                    
                        <img className="home-logo" src={logo} alt="LOGO"/>                    
                    <hr/>
                    <div class="body-description">A multiplayer Social Game to play along with your friends in a private room</div>
                    <div  class="button-container">
                        <NavLink to='/create-room'>
                        <Card className="card1 cards" >
                            <Card.Body>
                                <Card.Title className="card-title">Create Room</Card.Title>
                                <Card.Text className="card-text">Play along with <br/>your friends<br/> &#10230;</Card.Text>
                            </Card.Body>    
                        </Card>
                        </NavLink>
                        <NavLink to='/join-room'>
                        <Card className="card2 cards">
                            <Card.Body>
                                <Card.Title className="card-title">Join Room</Card.Title>
                                <Card.Text className="card-text">Play along with <br/>your friends<br/> &#10230;</Card.Text>    
                            </Card.Body>  
                        </Card>
                        </NavLink>    
                    </div>
                    <Button className="how-to-play" variant="dark">HOW TO PLAY</Button>
                    <img className="image" src={equ} alt="Logo" />
                    
                </div>
            </react.Fragment>
        )
    }
} export default Body;


