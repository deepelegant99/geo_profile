import { BrowserRouter, Switch, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/profiles'>
            <ProfilePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

/*
This is a test commit to test out vs code features
*/
