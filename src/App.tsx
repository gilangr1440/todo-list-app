import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import AddTask from "./pages/AddTask";
import Detail from "./pages/Detail";
import EditTask from "./pages/EditTask";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/task/:id_task" element={<Detail />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/edit-task/:id_task" element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
