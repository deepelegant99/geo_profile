import { BrowserRouter, Switch, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CreateProfilePage from "./pages/CreateProfilePage";
import GetData from "./components/GetData";
import SavePage from "./pages/SavePage.js";
import { useState } from "react";

function App() {

  const [Data, setData] = useState({});

  return (
    <>
    <GetData setData={setData}/>
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact>
            <HomePage data={Data} />
          </Route>
          <Route path='/profiles'>
            <ProfilePage />
          </Route>
          <Route path='/create'>
            <CreateProfilePage />
          </Route>
          <Route path='/save'>
            <SavePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;

/*
This is a test commit to test out vs code features
*/
