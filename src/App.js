import react from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateRoom  from './components/createRoom/CreateRoom';
import JoinRoom from './components/joinRoom/JoinRoom';


function App() {
  return (
<react.Fragment>
<BrowserRouter basename={process.env.PUBLIC_URL}>
<Switch>
            <Route path="/" component={Home} exact />
            <Route path="/create-room" component={CreateRoom} />
            <Route path="/join-room" component={JoinRoom} /> 
</Switch>
</BrowserRouter>
</react.Fragment>
  );
}

export default App;






