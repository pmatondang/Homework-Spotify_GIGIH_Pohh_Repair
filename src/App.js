import "./index.css";
import { BrowserRouter as Router, Route, Redirect, Switch, } from "react-router-dom";
import CreatePlayList from "./pages/createPlaylist";
import Login from "./pages/login";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import HomePageHeader from "./pages/Navbar/homepage-header";
import './css/styles.css'

function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <Provider store={Store}>
      <div className="App">
        <Router>
          <HomePageHeader />
          <div>
            <Navbar />
            <Switch>
              <Route path={"/create-playlist"}>
                {isLogin ? <CreatePlayList /> : <Redirect to={"/"} />}
              </Route>
              <Route path={"/"}>
                <Login />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
