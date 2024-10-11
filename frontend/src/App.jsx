import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import StudentHome from "./student/studentHome";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentHome />} />
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
