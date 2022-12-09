import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import LogIn from './Account/logIn/LogIn';
import SignUp from './Account/signUp/SignUp';
import AccountPage from './Account/AccountPage';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AccountPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
