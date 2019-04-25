import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configStore from "./store";
import { setAuthorizationToken } from "./services/api";
import { setCurrentUser } from "./store/actions/auth";
import jwtDecode from "jwt-decode";
import Routes from "./containers/Routes";
import Navbar from "./containers/Navbar";

const store = configStore();

class App extends Component {
  async componentDidMount() {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      setAuthorizationToken(token);
      try {
        const user = jwtDecode(token);
        store.dispatch(setCurrentUser({ ...user, token }));
      } catch (err) {
        store.dispatch(setCurrentUser({}));
      }
    }
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <div className="content-wrapper">
              <Routes />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
