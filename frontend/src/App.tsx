import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import Employees from './pages/Employees';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">🏠 Home</Link>
        <Link to="/employees">👥 Employees</Link>
        <Link to="/dashboard">📊 Dashboard</Link>
      </nav>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/employees" component={Employees} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;