import React from 'react';
import './App.css';
import Route from "./components/router/Route";
import Link from "./components/router/Link";
import Atlantic from "./views/Atlantic";
import Pacific from "./views/Pacific";
import BlackSea from "./views/BlackSea";
import Router from "./components/router/Router"

function App() {
  return (
    <Router>
      <div className="App">
        <div
            className='ui text container'
        >
          <h2 className='ui dividing header'>
            Which body of water?
          </h2>

          <ul>
            <li>
              <Link to='/atlantic'>
                <code>/atlantic</code>
              </Link>
            </li>
            <li>
              <Link to='/pacific'>
                <code>/pacific</code>
              </Link>
            </li>
            <li>
              <Link to='/black-sea'>
                <code>/black-sea</code>
              </Link>
            </li>
          </ul>

          <hr />

          <Route path='/atlantic' component={Atlantic} />
          <Route path='/pacific' component={Pacific} />
          <Route path='/black-sea' component={BlackSea} />
        </div>
      </div>
    </Router>
  );
}

export default App;
