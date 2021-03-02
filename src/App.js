
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Productpage from './Composants/Productpage';
import Navbar from './Composants/Navbar';
import Chekoutpage from './Composants/Chekoutpage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path = "/Produtpage">
            <Productpage/>
          </Route>

          <Route exact path = "/">
            <h1 
            style={{ fontSize:'80px', display:'block', marginLeft:'50vw', marginTop:'50vh',
                      transform: 'translateX(-50%) translateY(-180%)'}}
            >Exercice Boutique en Ligne</h1>
          </Route>

          <Route exact path = "/Checkout">
            <Chekoutpage/>
          </Route>
          
          <Route >
              <h1 
              style={{ fontSize:'80px', display:'block', marginLeft:'50vw', marginTop:'50vh',
                        transform: 'translateX(-50%) translateY(-180%)'}}
              >Page not found: Error 404</h1>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
