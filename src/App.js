
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import Navbar from './components/Layout/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup from './components/pages/signup';
import Login from './components/pages/login';
import Home from './components/pages/Home';
import AddPost from './components/pages/addpost';
import editpost from './components/pages/editpost';
import Profile from './components/pages/Profile';
import Mypost from './components/pages/mypost';
import Protected from './components/protected'


function App() {
  return (
    <Router>
      <div className="App">
      <ToastContainer />
        <Switch>
          <Route exact path="/" component={Signup}/>
          <Route exact path="/Pages/login" component={Login}/>
          <Route exact path="/Pages/signup" component={Signup}/>        
          <Route exact path="/Pages/home"  ><Protected  Cmp={Home}/></Route>          
          <Route exact path="/Pages/addpost" ><Protected  Cmp={AddPost}/></Route>
          <Route exact path="/Pages/mypost" ><Protected  Cmp={Mypost}/></Route>
          <Route exact path="/Pages/profile" ><Protected  Cmp={Profile}/></Route>
          <Route exact path="/Pages/editpost" ><Protected  Cmp={editpost}/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;



