import {BrowserRouter,Route,Routes} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Layout/Navbar";
import Add from "./Components/Users/Pages/Add";
import Show from "./Components/Users/Pages/Show";
import Update from "./Components/Users/Pages/Update";
import Delete from "./Components/Users/Pages/Delete";
import Login from "./Components/Users/Pages/Login";
import SignUp from "./Components/Users/Pages/SignUp";
import Logout from "./Components/Users/Pages/Logout";
import PostDetails from "./Components/Users/Pages/PostDetails";


function App() {

  return (
    <div >
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/add" element={<Add/>}></Route>
        <Route path="/show" element={<Show/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
        <Route path="/delete/:id" element={<Delete/>}></Route>

        <Route path="/post/:id" element={<PostDetails/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
