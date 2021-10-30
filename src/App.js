import logo from "./logo.svg";
import "./App.css";
import { Container, Form } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact"
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Home />} />

        <Route path="/add">
          <AddContact />
        </Route>

        <Route path="/edit/:id">
       <EditContact />
        </Route>

        <Route path="/delete">
          <h3>I am Delete component</h3>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
