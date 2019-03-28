import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Header />
          <Switch>
            {routes.route.map((data, i) => (
              <Route key={i} path={data.path} exact={data.exact} component={data.component}></Route>
            ))}
          </Switch>
          <Footer />
        </Router>
      </Fragment>
    );
  }
}

export default App;
