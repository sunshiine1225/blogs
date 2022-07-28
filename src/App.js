import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Navbar from "./Navbar"
import Home from "./Home"
import Create from "./create";
import Blogdetails from "./blogdetail";
function App() {
 
  return (
    <Router>
    <div className="App">
    <Navbar/>
   <div className="content">
     <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route  exact path="/create">
        <Create/>
      </Route>
      <Route  exact path="/blogs/:id">
        <Blogdetails/>
      </Route>
      <Route  path="/*">
        <h2>Not Found !!</h2>
      </Route>
     </Switch>
   </div>
      
    </div>
    </Router>
  );
}

export default App;
