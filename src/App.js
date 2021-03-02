import { Switch, Route } from "react-router-dom";
import './App.css';
import { Navbar } from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

import { handleEffect } from "./components/Helper/handleEffect";
import { ScrollTop } from "./components/ScrollTop";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </Switch>
      <ScrollTop />
      <Footer />
    </div>
  );
}
document.addEventListener('scroll', handleEffect);
export default App;
