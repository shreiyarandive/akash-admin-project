import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditBattle from "./component/EditBattle";
import CreateBattle from "./component/CreateBattle";
import DeleteBattle from "./component/DeleteBattle";
import Users from "./component/Users";
import ViewBattle from "./component/ViewBattle";
import HomePage from "./component/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="" element={<HomePage />} />
        <Route exact path="/editBattle" element={<EditBattle />} />
        <Route exact path="/createBattle" element={<CreateBattle />} />
        <Route exact path="/deleteBattle" element={<DeleteBattle />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/viewBattle" element={<ViewBattle />} />
      </Routes>
    </Router>
  );
}

export default App;
