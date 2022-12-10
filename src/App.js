import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AccountPage from './Account/AccountPage';
import Todo from './Todo/Todo';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AccountPage/>} />
          <Route path="/todos" element={<Todo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
