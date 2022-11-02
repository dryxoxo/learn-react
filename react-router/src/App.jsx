import { Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import AboutSchool from "./pages/AboutSchool";
import AboutStudent from "./pages/AboutStudent";
import AboutTeacher from "./pages/AboutTeacher";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/detail/:id" element={<DetailPage/>}/>
        <Route path="/about" element={<About/>}>
          <Route path="student" element={<AboutStudent/>}/>
          <Route path="teacher" element={<AboutTeacher/>}/>
          <Route index element={<AboutSchool/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
