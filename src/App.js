import "./App.css";
import { Route, Switch, BrowserRouter as  Router } from "react-router-dom";

import Home from "./views/Home";
import Blog from "./views/Blog";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog/:id" exact component={Blog} />
      </Switch>
    </Router>
  );
}

export default App;
