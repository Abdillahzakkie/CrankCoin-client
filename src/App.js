import { Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Dashboard from "./components/pages/Dashboard";
import Farm from "./components/pages/Farm";

import { handleEffect } from "./components/Helper/handleEffect";
import { ScrollTop } from "./components/ScrollTop";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/farm' component={Farm} />
      </Switch>
      <ScrollTop />
      <Footer />
    </div>
  );
}
document.addEventListener('scroll', handleEffect);
export default App;
