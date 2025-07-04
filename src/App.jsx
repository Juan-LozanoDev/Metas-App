import "./App.css";
import List from "./components/private/list/List";
import Details from "./components/private/new/Details";
import { Route, Routes, Navigate } from "react-router";
import Layout from "./components/shared/Layout";
import NotFound from "./components/shared/NotFound";
import Modal from "./components/shared/Modal";
import Register from "./components/public/register/Register";
import Access from "./components/public/access/Access";
import Authenticate from "./components/shared/Authenticate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/list" />} />
      <Route element={<Layout />}>
        <Route path="access" element={<Access />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />}></Route>
      </Route>
      <Route element={<Layout privado />}>
        <Route element={<Authenticate />} >
          <Route path="list" element={<List />} >
            <Route 
              path="/list/:id"
              element={
                <Modal>
                  <Details />
                </Modal>}>
            </Route>
          </Route>
        </Route>
        <Route path="new" element={<Details />} />     
      </Route> 
    </Routes>
  );
}

export default App;
